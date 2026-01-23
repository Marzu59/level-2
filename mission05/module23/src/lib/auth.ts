

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
// If your Prisma file is located elsewhere, you can change the path
import nodemailer from 'nodemailer'




const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_NAME,
    pass: process.env.APP_PASS,
  },
});


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "", ...etc
    }),
    trustedOrigins: [process.env.APP_URL!],
    user:{
       additionalFields: {
        role: {
          type: "string",
          defaultValue: "USER",
          required:false
        },
        phone: {
          type: "string",
          required: false
        },
        status: {
          type: "string",
          defaultValue: "ACTIVE",
          required: false
        }
       }    
       
    },
     emailAndPassword: { 
    enabled: true, 
    autoSignIn: false,
    requireEmailVerification: true
  },
  emailVerification: {
      autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ( { user, url, token }, request) => {

     try{
      const verifiactonUrl = `${process.env.APP_URL}/verify-email?token=${token}`
      
      const info = await transporter.sendMail({
    from: '"prisma-blog" <prisma-testing@gmail.con>',
    to: user.email,
    subject: "Complete email verification",
    text: "Hello world?", // Plain-text version of the message
    html: `
         <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f7;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          color: #333333;
        }
        p {
          color: #555555;
          line-height: 1.6;
        }
        .btn {
          display: inline-block;
          padding: 12px 25px;
          margin-top: 20px;
          font-size: 16px;
          color: #ffffff;
          background-color: #4caf50;
          border-radius: 5px;
          text-decoration: none;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #888888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Verify Your Email</h1>
        <p>Hi there! Thanks for signing up. Please click the button below to verify your email address and activate your account.</p>
        <a href="${verifiactonUrl}" class="btn">Verify Email</a>
        <p class="footer">If you did not create an account, you can ignore this email.</p>
      </div>
    </body>
  </html> `, // HTML version of the message
  });
  console.log("Message sent:", info.messageId);
     }
     catch(error){
      console.log(error)
      throw error;
     }

  }
  
},
  socialProviders: {
        google: { 
          prompt: 'select_account consent',
          accessType:'offline',
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 

        }, 
    },



});