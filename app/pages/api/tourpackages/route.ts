import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

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

export async function POST(request: Request) {
  try {
    // Your logic here
    // ...
    return new NextResponse("Success", { status: 200 });
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