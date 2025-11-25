// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Reuse your existing Nodemailer setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dev@tazamun.com.sa', // Your admin email
      subject: 'New Newsletter Subscriber',
      html: `
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1F8593;">
        <h2>New Subscriber Alert</h2>
        <hr /> 
        <p>A visitor has subscribed to the newsletter via the website footer.</p>
        <h4><strong>Email:</strong> ${email}</h4>
        <hr /> 
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}