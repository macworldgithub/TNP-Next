import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import prisma from './app/pages/api/db'
import { getUser } from './app/pages/api/utils'
 
export const protect = (req : NextRequest) => {

  const bearer = req.headers.get("authorization")

  if (!bearer) {
      console.log("Hello")
    return false
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    return false
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.headers.set("user",user)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}




export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/pages/api/signUp"){
        return NextResponse.rewrite(new URL('/pages/api/signUp', request.url))
    }
    else if (request.nextUrl.pathname === "/pages/api/hotelBooking"){
        console.log("RANNNNNNNN")
        let isAuthorized = protect(request)
        if (!isAuthorized){
            return NextResponse.json({message:"UnAuthorized",status:401})
        }
        return NextResponse.next()
    }
}












