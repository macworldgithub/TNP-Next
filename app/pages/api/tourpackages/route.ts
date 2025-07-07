
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
  const prisma =new PrismaClient();
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
  const prisma = new PrismaClient();
  try {
    const formData = await request.formData();
    const body: any = {};

    for (const [key, value] of formData.entries()) {
      if (key.startsWith("images[")) {
        body.images = body.images || [];
        body.images.push(value);
      } else {
        body[key] =
          key === "package_details" && typeof value === "string"
            ? JSON.parse(value)
            : value;
      }
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

    // Handle image uploads
    const imagePaths: string[] = [];
    if (body.images && body.images.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      for (let i = 0; i < Math.min(body.images.length, 3); i++) {
        const file = body.images[i];
        const fileName = `${Date.now()}-${i}${path.extname(file.name)}`;
        const filePath = path.join(uploadDir, fileName);
        await fs.promises.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
        imagePaths.push(`/uploads/${fileName}`);
      }
    }

    // Update package_details with image paths
    body.package_details.TripDetailsAndCostSummary.Images = imagePaths;

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

    const response = NextResponse.json({
      status: 200,
      message: "Success",
      data: newPackage,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } catch (error) {
    console.error("Error in POST handler:", error);
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

export async function PUT(request: NextRequest) {
  const prisma = new PrismaClient();
  
  try {
    const formData = await request.formData();
    const body: any = {};

    for (const [key, value] of formData.entries()) {
      if (key.startsWith("images[")) {
        body.images = body.images || [];
        body.images.push(value);
      } else if (key.startsWith("deleteImages[")) {
        body.deleteImages = body.deleteImages || [];
        body.deleteImages.push(value);
      } else {
        body[key] =
          key === "package_details" && typeof value === "string"
            ? JSON.parse(value)
            : value;
      }
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

    // Fetch existing package to get current images
    const existingPackage = await prisma.tnp_packages.findUnique({
      where: { package_id: Number(body.package_id) },
      select: { package_details: true },
    });

    let existingImages: string[] = [];
    if (existingPackage?.package_details) {
      const details = JSON.parse(existingPackage.package_details);
      existingImages = details.TripDetailsAndCostSummary?.Images || [];
    }

    // Delete specified images
    if (body.deleteImages && body.deleteImages.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      body.deleteImages.forEach((imagePath: string) => {
        const filePath = path.join(process.cwd(), "public", imagePath);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
      existingImages = existingImages.filter((img: string) => !body.deleteImages.includes(img));
    }

    // Handle new image uploads
    const imagePaths: string[] = [...existingImages];
    if (body.images && body.images.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const maxNewImages = 3 - existingImages.length;
      for (let i = 0; i < Math.min(body.images.length, maxNewImages); i++) {
        const file = body.images[i];
        const fileName = `${Date.now()}-${i}${path.extname(file.name)}`;
        const filePath = path.join(uploadDir, fileName);
        await fs.promises.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
        imagePaths.push(`/uploads/${fileName}`);
      }
    }

    // Update package_details with image paths
    body.package_details.TripDetailsAndCostSummary.Images = imagePaths;

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

    // Delete associated images
    const existingPackage = await prisma.tnp_packages.findUnique({
      where: { package_id: Number(package_id) },
      select: { package_details: true },
    });

    if (existingPackage?.package_details) {
      const details = JSON.parse(existingPackage.package_details);
      const images = details.TripDetailsAndCostSummary?.Images || [];
      images.forEach((imagePath: string) => {
        const filePath = path.join(process.cwd(), "public", imagePath);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
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