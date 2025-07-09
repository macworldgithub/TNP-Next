import { NextResponse } from 'next/server';
import { sendEmail } from '../utils';

export async function GET(request: Request) {
  try {
    await sendEmail({
      to: "test@example.com",
      subject: "Test Email",
      text: "This is a test email sent from the API route",
    });
    console.log("SENTTTTT");
    return NextResponse.json({ status: 200, message: "Success" });
  } catch (error) {
    console.error('Error in GET handler emailtest:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
