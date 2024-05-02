import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page"));

    if (!page) {
      return NextResponse.json({
        status: 400,
        message: "send page in query param",
      });
    }
    const user = await prisma.tnp_user.findMany({
      take: 10,
      skip: (page - 1) * 10,
      select: {
        id: false,
        createdAt: false,
        name: true,
        lname: true,
        email: true,
        login_count: true,
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
    console.log(user, "user");
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
