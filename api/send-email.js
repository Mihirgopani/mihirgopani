const nodemailer = require('nodemailer');

// HTML escape helper — prevents injection from user-submitted form data
const e = (str) => String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = async function handler(req, res) {

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, service, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required validation data payload parameters.' });
    }

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techtically.official@gmail.com',
            pass: 'mmtw bmdg vkpc ivll'  // Gmail App Password (16-digit)
        }
    });

    // Email HTML body
    const emailHtmlContent = `
        <h3>New Portfolio Inquiry Received</h3>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; border-color: #cbd5e1; font-family: sans-serif; font-size: 14px;">
            <tr style="background-color: #f1f5f9;"><th>Field</th><th>Value</th></tr>
            <tr><td><strong>Name:</strong></td><td>${e(name)}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${e(email)}</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td>${e(phone) || 'Not Provided'}</td></tr>
            <tr><td><strong>Selected Service:</strong></td><td>${e(service) || 'Generic Consultation'}</td></tr>
            <tr><td><strong>Subject:</strong></td><td>${e(subject)}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${e(message)}</td></tr>
        </table>
    `;

    try {
        await transporter.sendMail({
            from: '"Portfolio Automation" <techtically.official@gmail.com>',  // Must match auth.user
            to: 'mihirm2m3m5@gmail.com',
            subject: `💼 Portfolio Contact: ${e(subject)}`,
            html: emailHtmlContent,
            replyTo: email
        });

        return res.status(200).json({ success: true, message: 'Message transmitted successfully.' });

    } catch (error) {
        console.error('SMTP Transmission Failure:', error);
        return res.status(500).json({ error: 'Failed to transmit mail payload through routing pipelines.' });
    }
}