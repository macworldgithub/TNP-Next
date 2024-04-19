import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

interface package_structure {
  package_name: string;
  package_category_id: number;
  package_type_id: number;
  package_region_id: number;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string;
}

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  try {
    const packages = await prisma.tnp_packages.findMany();
    console.log("Packages", packages);
    return NextResponse.json({ status: 200, message: "Success", data: packages });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: package_structure) {
  const prisma = new PrismaClient();
  try {
    // Your logic here
    // ...

    // const insert = await prisma.tnp_packages.create({ data: { package_name: request.body.} })
    // const response = await request.json();
    // console.log("Body", response);
    return NextResponse.json({ status: 200, message: "Success", data: [] });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    //update logic here
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}