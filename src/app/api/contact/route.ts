// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
  from: `"${name}" <${process.env.EMAIL_USER}>`, // display name is user, actual sender is you
  to: process.env.EMAIL_TO,
  subject: `New contact form submission from ${name}`,
  text: `You have a new message:

  Name: ${name}
  Email: ${email}
  
  Message:
  ${message}
  `,
    replyTo: email, // so replies go to the user
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
