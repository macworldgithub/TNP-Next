import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

const router = createRouter<NextApiRequest, NextApiResponse>();

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/pages/api/signUp") {
    return NextResponse.rewrite(new URL("/pages/api/signUp", request.url));
  } else if (request.nextUrl.pathname === "/pages/api/hotelBooking") {
    return NextResponse.next();
  }
}
