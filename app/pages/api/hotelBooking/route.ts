import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json()
        console.log(req)
        return new NextResponse('Success', { status: 200 });
    } catch (error) {
        console.error('Error in POST handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

