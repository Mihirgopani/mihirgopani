const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, service, subject, message } = req.body;

    // Validate incoming form payloads
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required validation data payload parameters.' });
    }

    // Configure the SMTP transporter using your credentials safely via Environment Variables
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techtically.official@gmail.com',       // techtically.official@gmail.com
            pass: 'mmtw bmdg vkpc ivll' // Your 16-digit app password
        }
    });

    // Structure the data payload layout cleanly for your inbox notification
    const emailHtmlContent = `
        <h3>New Portfolio Inquiry Received</h3>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; border-color: #cbd5e1; font-family: sans-serif; font-size: 14px;">
            <tr style="background-color: #f1f5f9;"><th>Field</th><th>Value</th></tr>
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email Coordinate:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td>${phone || 'Not Provided'}</td></tr>
            <tr><td><strong>Selected Service Domain:</strong></td><td>${service || 'Generic Consultation'}</td></tr>
            <tr><td><strong>Subject Payload:</strong></td><td>${subject}</td></tr>
            <tr><td><strong>Message Description:</strong></td><td>${message}</td></tr>
        </table>
    `;

    try {
        await transporter.sendMail({
            from: `"Portfolio Automation" <${process.env.SMTP_USER}>`, 
            to: 'mihirm2m3m5@gmail.com', // Your target destination email address
            subject: `💼 Portfolio Contact: ${subject}`,
            html: emailHtmlContent,
            replyTo: email // Allows you to click 'Reply' in Gmail to answer the user instantly
        });

        return res.status(200).json({ success: true, message: 'Message transmitted successfully.' });
    } catch (error) {
        console.error('SMTP Transmission Failure Error:', error);
        return res.status(500).json({ error: 'Failed to transmit mail payload through routing pipelines.' });
    }
}