//app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the type for the request body
type ContactFormData = {
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { prefix, firstName, lastName, email, mobile, message } = body;

    // Validate required fields to prevent empty emails
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your provider (e.g., 'gmail', 'outlook')
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'dev@tazamun.com.sa',   // ✅ Changed to your email
      subject: `Contact Inquiry from ${prefix} ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #052E39;">New Contact Form Lead</h2>
          <hr />
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1F8593;"><strong>Name:</strong> ${prefix} ${firstName} ${lastName}</p>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1F8593;"><strong>Email:</strong> ${email}</p>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1F8593;"><strong>Phone:</strong> ${mobile}</p>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1F8593;"><strong>Message:</strong> ${message}</p>
          <hr /> 
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${String(error)}` },
      { status: 500 }
    );
  }
}