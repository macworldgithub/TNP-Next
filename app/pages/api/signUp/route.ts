import { NextResponse } from 'next/server';
import prisma from '../db';
import { createJWT, hashPassword } from '../auth';
import { getUser } from '../utils';

export async function POST(request: Request) {
    try {

        const req = await request.json()

        const isAvailable = await getUser(req.username)

        if (isAvailable){
            return Response.json({message:"username already taken"}, {status:400})
        }

        // @ts-ignore
        const user = await prisma.tnp_user.create({
            data: {
                name: req.name,
                lname: req.lname,
                username: req.username,
                password: await hashPassword(req.password)
            }
        })
        console.log(user)

        const token = createJWT(user)

        return NextResponse.json({ status: 200, message: "success",token });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

