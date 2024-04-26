import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/pages/api/signUp"){
        return NextResponse.rewrite(new URL('/pages/api/signUp', request.url))
    }
    else if (request.nextUrl.pathname === "/pages/api/hotelBooking"){
        return NextResponse.next()
    }
}












