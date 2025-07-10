// import { NextResponse } from 'next/server';
// import { sendEmail } from '../utils';

// export async function GET(request: Request) {
//   try {
//     await sendEmail({
//       to: "test@example.com",
//       subject: "Test Email",
//       text: "This is a test email sent from the API route",
//     });
//     console.log("SENTTTTT");
//     return NextResponse.json({ status: 200, message: "Success" });
//   } catch (error) {
//     console.error('Error in GET handler emailtest:', error);
//     return new NextResponse('Internal Server Error', { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import { sendEmail, getUser } from '../utils';

export async function POST(request: Request) {
  try {
    const { to, subject, text, email } = await request.json();
    if (!to || !subject || !text) {
      return NextResponse.json({ status: 400, message: 'Missing required email fields' }, { status: 400 });
    }

    // Optionally fetch user if email is provided
    if (email) {
      const user = await getUser(email);
      if (!user) {
        return NextResponse.json({ status: 404, message: 'User not found' }, { status: 404 });
      }
    }

    await sendEmail({ to, subject, text });
    return NextResponse.json({ status: 200, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ status: 500, message: 'Internal Server Error' }, { status: 500 });
  }
}