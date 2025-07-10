import prisma from "./db";
import * as nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

export const getUser = async (email: string) => {
  // @ts-ignore
  const user = await prisma.tnp_user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

async function createTransporter() {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      type: "OAuth2",
      user: process.env.USER_EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  } as nodemailer.TransportOptions);

  return transporter;
}

export const sendEmail = async (emailOptions : any) => {
  let _ = {
    subject: "New Tour Request For You",
    text: "New Request is received",
    to: "siddiquiusman328@gmail.com",
    from: process.env.USER_EMAIL,
  };

  let emailTransporter = await createTransporter();

  await emailTransporter.sendMail(emailOptions);
};

// import * as nodemailer from 'nodemailer';
// import { google } from 'googleapis';
// import prisma from './db';

// const OAuth2 = google.auth.OAuth2;

// interface EmailOptions {
//   to: string;
//   subject: string;
//   text: string;
//   from?: string;
// }

// async function createTransporter() {
//   const requiredEnvVars = ['CLIENT_ID', 'CLIENT_SECRET', 'REFRESH_TOKEN', 'USER_EMAIL'];
//   for (const envVar of requiredEnvVars) {
//     if (!process.env[envVar]) {
//       throw new Error(`Missing required environment variable: ${envVar}`);
//     }
//   }
//   const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     'https://developers.google.com/oauthplayground'
//   );

//   oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
//   });

//   const accessToken = await new Promise<string>((resolve, reject) => {
//     oauth2Client.getAccessToken((err, token) => {
//       if (err || !token) {
//         reject(new Error(`Failed to obtain access token: ${err?.message || 'Unknown error'}`));
//       } else {
//         resolve(token);
//       }
//     });
//   });

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: process.env.USER_EMAIL,
//       accessToken,
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken: process.env.REFRESH_TOKEN,
//     },
//   });

//   return transporter;
// }

// let emailTransporter: nodemailer.Transporter | null = null;

// export const sendEmail = async (emailOptions: EmailOptions) => {
//   if (!emailOptions.to || !emailOptions.subject || !emailOptions.text) {
//     throw new Error('Missing required email fields: to, subject, or text');
//   }

//   if (!emailOptions.to.includes('@')) {
//     throw new Error('Invalid email address');
//   }

//   if (!emailTransporter) {
//     emailTransporter = await createTransporter();
//   }

//   const mailOptions = {
//     from: process.env.USER_EMAIL,
//     ...emailOptions,
//   };

//   await emailTransporter.sendMail(mailOptions);
// };

// export const getUser = async (email: string) => {
//   if (!email || !email.includes('@')) {
//     throw new Error('Invalid email address');
//   }

//   try {
//     const user = await prisma.tnp_user.findUnique({
//       where: {
//         email,
//       },
//     });
//     return user;
//   } catch (error) {
//     throw new Error(`Failed to fetch user: ${(error as Error).message}`);
//   }
// };