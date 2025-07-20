// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//     const data = await req.formData();
//     const email = data.get('email') as string;
//     const name = data.get('name') as string;

//     if (!email) {
//         return NextResponse.json({ error: 'Email is required' }, { status: 400 });
//     }
//     console.log('emai', email); // Check if undefined

//     console.log('SMTP_USER:', process.env.SMTP_USER); // Check if undefined


//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: process.env.SMTP_USER!,
//             pass: process.env.SMTP_PASS!
//         }
//     });

//     try {
//         await transporter.sendMail({
//             from: `"RedFox Team" <${process.env.SMTP_USER}>`,
//             to: email,
//             subject: 'Your Request Was Received!',
//             html: `
//         <h3>Hello ${name},</h3>
//         <p>Thank you for contacting RedFox. We’ve received your request and will reach out within 24 hours.</p>
//         <p>— The RedFox Team</p>
//       `
//         });

//         return NextResponse.json({ success: true });
//     } catch (err) {
//         console.error('Nodemailer Error:', err);
//         return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
//     }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const data = await req.formData();
    const email = data.get('email') as string;
    const name = data.get('name') as string;
    const phone = data.get('phone') as string;
    const service = data.get('service') as string;
    const budget = data.get('budget') as string;
    const message = data.get('message') as string;

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASS!,
        },
    });

    const ownerEmail = process.env.SMTP_USER!; // Admin will receive query here

    try {
        // 1. Confirmation Email to Sender
        await transporter.sendMail({
            from: `"RedFox Team" <${ownerEmail}>`,
            to: email,
            subject: 'Your Request Was Received!',
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Hello ${name},</h2>
          <p>Thank you for contacting <strong>RedFox</strong>. We’ve received your request and our team will get back to you within 24 hours.</p>
          <p>Here’s what we received:</p>
          <ul>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Budget:</strong> ${budget}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>Best regards,<br/>RedFox Team</p>
        </div>
      `
        });

        // 2. Email to RedFox (admin)
        await transporter.sendMail({
            from: `"Website Query" <${ownerEmail}>`,
            to: ownerEmail,
            subject: `New Contact Request from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>New Query Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Nodemailer Error:', err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
