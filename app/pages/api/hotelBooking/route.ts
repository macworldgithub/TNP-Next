import { NextRequest, NextResponse } from "next/server";
import { protect } from "../auth";
import prisma from "../db";
import { sendEmail } from "../utils";

export async function POST(request: NextRequest) {
    try {
        let isAuthorized = protect(request)
        if (!isAuthorized) {
            return NextResponse.json({ message: "UnAuthorized", status: 401 })
        }
        const user = request.headers.get("user")
        const req = await request.json()
        const jsonUser = JSON.parse(user)

        console.log(jsonUser)

        console.log(req)

        const temp = {
            booking_user_id: jsonUser?.id,
            booking_hotel_id: parseInt(req?.hotel),
            booking_checkin_time: new Date(req?.checkInDate),
            booking_checkout_time: new Date(req?.checkOutDate),
            booking_adult_count: parseInt(req?.adults),
            booking_children_count: parseInt(req?.kids),
        }

        const res = await prisma.tnp_hotel_bookings.create({
            data: temp
        })

        if (res) {
            const emailOptions = {
                subject: "",
                text: "Your request has been recieved, Thank you for using TNP.",
                to: jsonUser?.email,
                from: process.env.USER_EMAIL,
            }
            await sendEmail(emailOptions)
        }

        return NextResponse.json({ message: "success", res, status: 200 });

    } catch (error) {
        console.error('Error in POST handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

