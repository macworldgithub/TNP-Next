
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
  const prisma = new PrismaClient();
  const searchParams = request.nextUrl?.searchParams;

  if (!searchParams?.get("id")) {
    return new NextResponse("Bad Request: Missing or invalid id parameter", {
      status: 400,
    });
  }

  try {
    let packages: PackageStructure[] = [];
    const id = searchParams?.get("id");

    packages = await prisma.tnp_packages.findMany({
      where: {
        package_id: parseInt(id),
      },
      include: {
        tnp_package_types: true,
        tnp_destinations: true,
      },
    });

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
    console.error("Error in GET handler tourpackages:", error);
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
      } else if (key.startsWith("subImages[")) {
        const match = key.match(/subImages\[(\d+)\]\[(\d+)\]/);
        if (match) {
          const subPackageIndex = parseInt(match[1]);
          body.subImages = body.subImages || [];
          body.subImages[subPackageIndex] = body.subImages[subPackageIndex] || [];
          body.subImages[subPackageIndex].push(value);
        }
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

    // Validate itinerary prices
    if (body.package_details?.TripDetailsAndCostSummary?.Itinerary) {
      for (const itinerary of body.package_details.TripDetailsAndCostSummary.Itinerary) {
        if (itinerary.price && isNaN(Number(itinerary.price))) {
          const response = NextResponse.json({
            status: 400,
            message: "Invalid itinerary price",
          });
          response.headers.set("Access-Control-Allow-Origin", "*");
          return response;
        }
      }
    }

    // Validate subpackage fields
    if (body.package_details?.SubPackages) {
      for (const subPackage of body.package_details.SubPackages) {
        const subNumericFields = [
          "package_rate_normal",
          "package_rate_deluxe",
          "package_total_persons",
          "package_duration",
        ];
        for (const field of subNumericFields) {
          if (subPackage[field] && isNaN(Number(subPackage[field]))) {
            const response = NextResponse.json({
              status: 400,
              message: `Invalid subpackage numeric field: ${field}`,
            });
            response.headers.set("Access-Control-Allow-Origin", "*");
            return response;
          }
        }
        if (subPackage.Itinerary) {
          for (const itinerary of subPackage.Itinerary) {
            if (itinerary.price && isNaN(Number(itinerary.price))) {
              const response = NextResponse.json({
                status: 400,
                message: "Invalid subpackage itinerary price",
              });
              response.headers.set("Access-Control-Allow-Origin", "*");
              return response;
            }
          }
        }
      }
    }

    // Handle image uploads for main package
    const imagePaths: string[] = [];
    if (body.images && body.images.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "Uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      for (let i = 0; i < Math.min(body.images.length, 3); i++) {
        const file = body.images[i];
        const fileName = `${Date.now()}-${i}${path.extname(file.name)}`;
        const filePath = path.join(uploadDir, fileName);
        await fs.promises.writeFile(filePath, new Uint8Array(await file.arrayBuffer()));
        imagePaths.push(`/uploads/${fileName}`);
      }
    }

    // Handle image uploads for subpackages
    const subImagePaths: string[][] = [];
    if (body.subImages && body.subImages.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "Uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      for (let subIndex = 0; subIndex < body.subImages.length; subIndex++) {
        const subImages = body.subImages[subIndex] || [];
        subImagePaths[subIndex] = [];
        for (let i = 0; i < Math.min(subImages.length, 3); i++) {
          const file = subImages[i];
          const fileName = `${Date.now()}-sub-${subIndex}-${i}${path.extname(file.name)}`;
          const filePath = path.join(uploadDir, fileName);
          await fs.promises.writeFile(filePath, new Uint8Array(await file.arrayBuffer()));
          subImagePaths[subIndex].push(`/uploads/${fileName}`);
        }
      }
    }

    // Update package_details with image paths
    body.package_details.TripDetailsAndCostSummary.Images = imagePaths;
    if (body.package_details.SubPackages) {
      body.package_details.SubPackages.forEach((subPackage: any, index: number) => {
        subPackage.Images = subImagePaths[index] || [];
      });
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
      } else if (key.startsWith("subImages[")) {
        const match = key.match(/subImages\[(\d+)\]\[(\d+)\]/);
        if (match) {
          const subPackageIndex = parseInt(match[1]);
          body.subImages = body.subImages || [];
          body.subImages[subPackageIndex] = body.subImages[subPackageIndex] || [];
          body.subImages[subPackageIndex].push(value);
        }
      } else if (key.startsWith("deleteImages[")) {
        body.deleteImages = body.deleteImages || [];
        body.deleteImages.push(value);
      } else if (key.startsWith("deleteSubImages[")) {
        const match = key.match(/deleteSubImages\[(\d+)\]\[(\d+)\]/);
        if (match) {
          const subPackageIndex = parseInt(match[1]);
          body.deleteSubImages = body.deleteSubImages || [];
          body.deleteSubImages[subPackageIndex] = body.deleteSubImages[subPackageIndex] || [];
          body.deleteSubImages[subPackageIndex].push(value);
        }
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

    // Validate itinerary prices
    if (body.package_details?.TripDetailsAndCostSummary?.Itinerary) {
      for (const itinerary of body.package_details.TripDetailsAndCostSummary.Itinerary) {
        if (itinerary.price && isNaN(Number(itinerary.price))) {
          const response = NextResponse.json({
            status: 400,
            message: "Invalid itinerary price",
          });
          response.headers.set("Access-Control-Allow-Origin", "*");
          return response;
        }
      }
    }

    // Validate subpackage fields
    if (body.package_details?.SubPackages) {
      for (const subPackage of body.package_details.SubPackages) {
        const subNumericFields = [
          "package_rate_normal",
          "package_rate_deluxe",
          "package_total_persons",
          "package_duration",
        ];
        for (const field of subNumericFields) {
          if (subPackage[field] && isNaN(Number(subPackage[field]))) {
            const response = NextResponse.json({
              status: 400,
              message: `Invalid subpackage numeric field: ${field}`,
            });
            response.headers.set("Access-Control-Allow-Origin", "*");
            return response;
          }
        }
        if (subPackage.Itinerary) {
          for (const itinerary of subPackage.Itinerary) {
            if (itinerary.price && isNaN(Number(itinerary.price))) {
              const response = NextResponse.json({
                status: 400,
                message: "Invalid subpackage itinerary price",
              });
              response.headers.set("Access-Control-Allow-Origin", "*");
              return response;
            }
          }
        }
      }
    }

    // Fetch existing package to get current images
    const existingPackage = await prisma.tnp_packages.findUnique({
      where: { package_id: Number(body.package_id) },
      select: { package_details: true },
    });

    let existingImages: string[] = [];
    let existingSubImages: string[][] = [];
    if (existingPackage?.package_details) {
      const details = JSON.parse(existingPackage.package_details);
      existingImages = details.TripDetailsAndCostSummary?.Images || [];
      if (details.SubPackages) {
        existingSubImages = details.SubPackages.map((sp: any) => sp.Images || []);
      }
    }

    // Delete specified images for main package
    if (body.deleteImages && body.deleteImages.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "Uploads");
      body.deleteImages.forEach((imagePath: string) => {
        const filePath = path.join(process.cwd(), "public", imagePath);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
      existingImages = existingImages.filter((img: string) => !body.deleteImages.includes(img));
    }

    // Delete specified images for subpackages
    if (body.deleteSubImages && body.deleteSubImages.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "Uploads");
      body.deleteSubImages.forEach((subImages: string[], subIndex: number) => {
        subImages.forEach((imagePath: string) => {
          const filePath = path.join(process.cwd(), "public", imagePath);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        });
        existingSubImages[subIndex] = existingSubImages[subIndex]?.filter(
          (img: string) => !subImages.includes(img)
        ) || [];
      });
    }

    // Handle new image uploads for main package
    const imagePaths: string[] = [...existingImages];
    if (body.images && body.images.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "Uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const maxNewImages = 3 - existingImages.length;
      for (let i = 0; i < Math.min(body.images.length, maxNewImages); i++) {
        const file = body.images[i];
        const fileName = `${Date.now()}-${i}${path.extname(file.name)}`;
        const filePath = path.join(uploadDir, fileName);
        await fs.promises.writeFile(filePath, new Uint8Array(await file.arrayBuffer()));
        imagePaths.push(`/uploads/${fileName}`);
      }
    }

    // Handle new image uploads for subpackages
    const subImagePaths: string[][] = [...existingSubImages];
    if (body.subImages && body.subImages.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "Uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      for (let subIndex = 0; subIndex < body.subImages.length; subIndex++) {
        const subImages = body.subImages[subIndex] || [];
        subImagePaths[subIndex] = subImagePaths[subIndex] || [];
        const maxNewImages = 3 - subImagePaths[subIndex].length;
        for (let i = 0; i < Math.min(subImages.length, maxNewImages); i++) {
          const file = subImages[i];
          const fileName = `${Date.now()}-sub-${subIndex}-${i}${path.extname(file.name)}`;
          const filePath = path.join(uploadDir, fileName);
          await fs.promises.writeFile(filePath, new Uint8Array(await file.arrayBuffer()));
          subImagePaths[subIndex].push(`/uploads/${fileName}`);
        }
      }
    }

    // Update package_details with image paths
    body.package_details.TripDetailsAndCostSummary.Images = imagePaths;
    if (body.package_details.SubPackages) {
      body.package_details.SubPackages.forEach((subPackage: any, index: number) => {
        subPackage.Images = subImagePaths[index] || [];
      });
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

    // Delete associated images
    const existingPackage = await prisma.tnp_packages.findUnique({
      where: { package_id: Number(package_id) },
      select: { package_details: true },
    });

    if (existingPackage?.package_details) {
      const details = JSON.parse(existingPackage.package_details);
      const images = details.TripDetailsAndCostSummary?.Images || [];
      const subImages = details.SubPackages?.flatMap((sp: any) => sp.Images || []) || [];
      [...images, ...subImages].forEach((imagePath: string) => {
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