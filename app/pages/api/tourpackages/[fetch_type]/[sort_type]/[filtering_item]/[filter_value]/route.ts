import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

interface PackageStructure {
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
}

interface PackagesRequestParams {
  fetch_type: string;
  sort_type?: string;
  filtering_item?: string;
  filter_value?: string | number;
}

export async function GET(
  request: Request,
  context: { params: PackagesRequestParams }
) {
  const prisma = new PrismaClient();
  const { fetch_type, sort_type, filtering_item, filter_value } =
    await context.params;
  console.log(
    "Request body",
    fetch_type,
    sort_type,
    filtering_item,
    filter_value
  );
  try {
    let packages: PackageStructure[] = [];

    switch (fetch_type) {
      case "search":
        if (!filter_value || typeof filter_value !== "string") {
          return new NextResponse(
            "Bad Request: Missing or invalid search parameters",
            { status: 400 }
          );
        }
        console.log("Inside search");
        packages = await prisma.tnp_packages.findMany({
          where: {
            package_name: {
              contains: filter_value,
            },
          },
        });
        break;
      case "sort":
        if (!sort_type) {
          return new NextResponse("Bad Request: Missing sort type", {
            status: 400,
          });
        }
        packages = await prisma.tnp_packages.findMany({
          orderBy: {
            [sort_type]: "asc", // Assuming ascending order
          },
        });
        break;
      case "filter":
        if (!filtering_item || typeof filter_value === "undefined") {
          return new NextResponse(
            "Bad Request: Missing or invalid filter parameters",
            { status: 400 }
          );
        }
        packages = await prisma.tnp_packages.findMany({
          where: {
            [filtering_item]: filter_value,
          },
        });
        break;
      case "all":
        packages = await prisma.tnp_packages.findMany({
          orderBy: {
            package_id: "desc", // Sort by package_id in descending order
          },
        });
        break;
      default:
        return new NextResponse("Bad Request: Invalid fetch type", {
          status: 400,
        });
    }

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

export async function POST(request: PackageStructure) {
  const prisma = new PrismaClient();
  try {
    // Insert logic here
    const insert = await prisma.tnp_packages.create({
      data: {
        package_name: request.package_name,
        package_description: request.package_description,
        package_rate_normal: request.package_rate_normal,
        package_rate_deluxe: request.package_rate_deluxe,
        package_total_persons: request.package_total_persons,
        package_category_id: request.package_category_id,
        package_details: request.package_details,
        package_region_id: request.package_region_id,
        package_type_id: request.package_type_id,
      },
    });
    console.log("Body", insert);
    return NextResponse.json({ status: 200, message: "Success", data: insert });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    //update logic here
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
