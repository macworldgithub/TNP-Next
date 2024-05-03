import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit"));

    if (!page) {
      return NextResponse.json({
        status: 400,
        message: "send page in query param",
      });
    }
    const user = await prisma.tnp_trips.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        tnp_packages: {
          select: {
            package_name: true,
            package_total_persons: true,
          },
        },
      },
    });

    const token = createJWT(user);

    // let userData = {
    //   token,
    //   name: user?.name,
    //   lname: user?.lname,
    //   email: user?.email,
    //   id: user?.id,
    // };
    return NextResponse.json({
      status: 200,
      message: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: 400,
        message: "send id in query param",
      });
    }
    const response = await prisma.tnp_trips.findUnique({
      where: {
        trip_id: id,
      },
    });

    if (!response) {
      return new NextResponse("Record Not Found", { status: 400 });
    }
    await prisma.tnp_trips.delete({
      where: {
        trip_id: id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
