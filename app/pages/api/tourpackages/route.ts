import { PrismaClient } from "@prisma/client";
import prisma from "../db";
import { NextRequest, NextResponse } from "next/server";
import multer from 'multer';

interface InsertBodyRequest {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_category_id: number;
  package_type_id: number;
  package_region_id: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  package_destination_id: number;
  package_duration: number;
}

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  tnp_destinations: {
    destination_id: number;
    destination_category_id: number;
    destination_region_id: number;
    destination_name: string;
  };
  tnp_package_types: {
    package_type_id: number;
    package_type_name: string;
    package_type_value: string;
  };
}
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl?.searchParams;
  if (!searchParams?.get("id")) {
    return new NextResponse("Bad Request: Missing or invalid id parameter", {
      status: 400,
    });
  }

  try {
    let packages: PackageStructure[] = [];
    const id = searchParams?.get("id");
    switch (id) {
      case "id":
        packages = await prisma.tnp_packages.findMany({
          where: {
            package_id: parseInt(id),
          },
          include: {
            tnp_package_types: true,
            tnp_destinations: true,
          },
        });
        break;
      default:
        return new NextResponse("Bad Request: Invalid fetch type", {
          status: 400,
        });
    }

    packages = packages.map((pkg) => ({
      ...pkg,
      package_type: pkg.tnp_package_types?.package_type_name || "",
    }));

    return NextResponse.json({
      status: 200,
      message: "Success",
      data: packages,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  console.log("hehe");

  const prisma = new PrismaClient();

  try {
    const formData = await request.formData();
    const body: any = {};

    for (const [key, value] of formData.entries()) {
      body[key] =
        key === "package_details" && typeof value === "string"
          ? JSON.parse(value)
          : value;
    }

    // Validate numeric fields
    const numericFields = [
      "package_rate_normal",
      "package_rate_deluxe",
      "package_total_persons",
      "package_type_id",
      "package_destination_id",
      "package_duration",
    ];

    for (const field of numericFields) {
      if (isNaN(Number(body[field]))) {
        const response = NextResponse.json({
          status: 400,
          message: `Invalid numeric field: ${field}`,
        });
        response.headers.set("Access-Control-Allow-Origin", "*");
        return response;
      }
    }

    const newPackage = await prisma.tnp_packages.create({
      data: {
        package_name: body.package_name,
        package_description: body.package_description,
        package_rate_normal: Number(body.package_rate_normal),
        package_rate_deluxe: Number(body.package_rate_deluxe),
        package_total_persons: Number(body.package_total_persons),
        package_details: JSON.stringify(body.package_details),
        package_type_id: Number(body.package_type_id),
        package_bestseller: true,
        package_isfeatured: true,
        package_destination_id: Number(body.package_destination_id),
        package_duration: Number(body.package_duration),
      },
    });

    console.log("ha");

    const response = NextResponse.json({
      status: 200,
      message: "Success",
      data: newPackage,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } catch (error) {
    console.error("Error in POST handler:", error);

    const response = new NextResponse("Internal Server Error", { status: 500 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } finally {
    await prisma.$disconnect();
  }
}



export async function PUT(request: NextRequest) {
  const prisma = new PrismaClient();
  
  try {
    const formData = await request.formData();
    const body: any = {};

    for (const [key, value] of formData.entries()) {
      body[key] =
        key === "package_details" && typeof value === "string"
          ? JSON.parse(value)
          : value;
    }

    if (!body.package_id) {
      const response = NextResponse.json({
        status: 400,
        message: "Missing package_id",
      });
      response.headers.set("Access-Control-Allow-Origin", "*");
      return response;
    }

    // Validate numeric fields
    const numericFields = [
      "package_rate_normal",
      "package_rate_deluxe",
      "package_total_persons",
      "package_type_id",
      "package_destination_id",
      "package_duration",
    ];

    for (const field of numericFields) {
      if (body[field] && isNaN(Number(body[field]))) {
        const response = NextResponse.json({
          status: 400,
          message: `Invalid numeric field: ${field}`,
        });
        response.headers.set("Access-Control-Allow-Origin", "*");
        return response;
      }
    }

    const updatedPackage = await prisma.tnp_packages.update({
      where: {
        package_id: Number(body.package_id),
      },
      data: {
        package_name: body.package_name,
        package_description: body.package_description,
        package_rate_normal: Number(body.package_rate_normal),
        package_rate_deluxe: Number(body.package_rate_deluxe),
        package_total_persons: Number(body.package_total_persons),
        package_details: JSON.stringify(body.package_details),
        package_type_id: Number(body.package_type_id),
        package_destination_id: Number(body.package_destination_id),
        package_duration: Number(body.package_duration),
      },
    });

    const response = NextResponse.json({
      status: 200,
      message: "Package updated successfully",
      data: updatedPackage,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } catch (error) {
    console.error("Error in PUT handler:", error);
    const response = NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: NextRequest) {
  const prisma = new PrismaClient();
  
  try {
    const { package_id } = await request.json();

    if (!package_id) {
      const response = NextResponse.json({
        status: 400,
        message: "Missing package_id",
      });
      response.headers.set("Access-Control-Allow-Origin", "*");
      return response;
    }

    await prisma.tnp_packages.delete({
      where: {
        package_id: Number(package_id),
      },
    });

    const response = NextResponse.json({
      status: 200,
      message: "Package deleted successfully",
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } catch (error) {
    console.error("Error in DELETE handler:", error);
    const response = NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } finally {
    await prisma.$disconnect();
  }
}