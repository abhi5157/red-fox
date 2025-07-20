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

    const ownerEmail = process.env.SMTP_USER!;

    try {
        await transporter.sendMail({
            from: `"RedFox Team" <${ownerEmail}>`,
            to: email,
            subject: 'Thank you for contacting RedFox - We\'ve received your request',
            html: `
              <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Thank you for contacting RedFox</title>
                    <style>
                        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { text-align: center; margin-bottom: 30px; }
                        .logo { max-width: 180px; height: auto; }
                        .divider { border-top: 1px solid #eaeaea; margin: 25px 0; }
                        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 30px; }
                        .details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
                        .button { background-color: #E74C3C; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; }
                    </style>
                </head>
                <body> 
                    <div class="header">
                        <img src="../../../public/logo.jpg" alt="RedFox Logo" class="logo">
                        <h2 style="color: #E74C3C; margin-top: 15px;">Thank you for reaching out, ${name}!</h2>
                    </div>
                    
                    <p>We've received your inquiry and our team is already reviewing it. You can expect a personalized response from one of our experts within 24 hours.</p>
                    
                    <div class="details">
                        <h3 style="margin-top: 0; color: #E74C3C;">Your Request Details:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Service:</strong> ${service}</p>
                        <p><strong>Budget:</strong> ${budget}</p>
                        <p><strong>Message:</strong><br>${message}</p>
                    </div>
                    
                    <p>In the meantime, you might find these resources helpful:</p>
                    <ul>
                        <li><a href="http://localhost:3000/portfolio">Featured Work</a></li>
                        <li><a href="http://localhost:3000/about">Our Story</a></li>
                    </ul>
                    
                    <div class="divider"></div>
                    
                    <p>If you need immediate assistance, please don't hesitate to contact us directly:</p>
                    <p>
                        <a href="tel:+1234567890" style="text-decoration: none; color: #E74C3C;">+91 98765 43210</a><br>
                        <a href="mailto:info@redfoxmarketing.com" style="text-decoration: none; color: #E74C3C;">
                        info@redfoxmarketing.com</a>
                    </p>
                    
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} RedFox. All rights reserved.</p>
                        <p>123 Business Ave, Suite 100, City, Country</p>
                        <p>
                            <a href="http://localhost:3000/" style="color: #E74C3C; text-decoration: none;">Website</a> | 
                            <a href="https://www.instagram.com/" style="color: #E74C3C; text-decoration: none;">Instagram</a> | 
                            <a href="https://x.com/" style="color: #E74C3C; text-decoration: none;">Twitter</a>
                        </p>
                    </div>
                </body>
                </html>
            `
          });

        await transporter.sendMail({
          from: `"RedFox Website Alerts" <${ownerEmail}>`,
          to: ownerEmail,
          subject: `🚀 NEW LEAD: ${name} - ${service} (Budget: ${budget})`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>New Lead: ${name}</title>
                <style>
                    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; }
                    .header { color: #E74C3C; text-align: center; }
                    .lead-card { border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; margin: 20px 0; }
                    .contact-info { background-color: #f8f8f8; padding: 15px; border-radius: 6px; }
                    .project-details { background-color: #f0f7ff; padding: 15px; border-radius: 6px; margin-top: 15px; }
                    .priority { color: #E74C3C; font-weight: bold; background-color: #fff0f0; padding: 2px 5px; border-radius: 3px; }
                    .action-buttons { margin-top: 25px; text-align: center; }
                    .action-btn { 
                        background-color: #E74C3C; 
                        color: white; 
                        padding: 10px 20px; 
                        text-decoration: none; 
                        border-radius: 4px; 
                        display: inline-block; 
                        margin: 0 10px;
                        font-weight: bold;
                    }
                    .message-box { 
                        background-color: white; 
                        padding: 15px; 
                        border-left: 4px solid #E74C3C;
                        margin-top: 15px;
                    }
                    .footer { font-size: 12px; color: #777; text-align: center; margin-top: 30px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>🚀 New Lead Alert</h2>
                    <p>${new Date().toLocaleString()}</p>
                </div>
                
                <div class="lead-card">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="https://redfoxmarketing.com/logo.jpg" alt="RedFox Logo" style="max-width: 150px; height: auto;">
                    </div>
                    
                    <div class="contact-info">
                        <h3 style="margin-top: 0;">👤 Contact Information</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                        <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                    
                    <div class="project-details">
                        <h3>📋 Project Details</h3>
                        <p><strong>Service Needed:</strong> ${service}</p>
                        <p><strong>Budget:</strong> <span class="priority">${budget}</span></p>
                        <p><strong>Lead Source:</strong> Website Contact Form</p>
                        
                        <div class="message-box">
                            <strong>📩 Client Message:</strong>
                            <p>${message}</p>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <a href="mailto:${email}?subject=Re: Your ${service} inquiry&body=Dear ${name}," class="action-btn">✉️ Reply Now</a>
                        <a href="tel:${phone}" class="action-btn">📞 Call Client</a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This lead was automatically generated from the RedFox Marketing website.</p>
                    <p>© ${new Date().getFullYear()} RedFox Marketing. All rights reserved.</p>
                </div>
            </body>
            </html>
          `
      });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Nodemailer Error:', err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}