import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload { name: string; email: string; message: string }

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json() as ContactPayload;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Validate basic email shape
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Environment variables (configure in .env.local)
    const to = process.env.CONTACT_TO || 'adhikaribibek84@gmail.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn('SMTP credentials missing (set SMTP_USER & SMTP_PASS). Falling back to console log.');
      console.log('Contact message received', { name, email, message });
      return NextResponse.json({ success: true, fallback: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: smtpUser, pass: smtpPass }
    });

    const mailOptions = {
      from: `Portfolio Contact <${smtpUser}>`,
      to,
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact form error', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
