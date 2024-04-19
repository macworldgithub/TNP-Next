import { NextResponse } from 'next/server';
import prisma from '../db';
import { comparePasswords, createJWT, hashPassword } from '../auth';

export async function POST(request: Request) {
    try {
        const req = await request.json()
    
        // @ts-ignore
        const user = await prisma.tnp_user.findUnique({
            where: {
                username: req.username
            }
        })

        const isValid = await comparePasswords(req.password, user.password)

        if (!isValid) {
            return Response.json({ message: "incorrect password" }, { status: 400 })
        }

        const token = createJWT(user)
        return Response.json({ token, message: "success" }, { status: 200 })



    } catch (error) {
        console.error('Error in GET handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

