import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/pages/api/signUp") {
    return NextResponse.rewrite(new URL("/pages/api/signUp", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/pages/api/admin")) {
    // Add CORS headers to allow requests from any origin
    return NextResponse.next({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } else if (request.nextUrl.pathname === "/pages/api/hotelBooking") {
    return NextResponse.next();
  }
}
