import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import prisma from './app/pages/api/db'
 
export const protect = (req : NextRequest) => {

  const bearer = req.headers.get("authorization")

  if (!bearer) {
    return Response.json({message: "unauthorized"},{status:401})
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    return Response.json({message: "unauthorized"},{status:401})
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.headers.set("user",user)
    return
  } catch (e) {
    console.error(e)
    return Response.json({message: "unauthorized"},{status:401})
  }
}




export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/pages/api/signUp"){
        const body = await request.json()
        // @ts-ignore
        const user = await prisma.tnp_user.findUnique({
            where: {
                username: body.username
            }
        })
        if (user){
            return Response.json({message:"username already taken"}, {status:400})
        }

        return NextResponse.rewrite(new URL('/pages/api/signUp', request.url))
    }
}












