import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    // Check if the method is POST
    if (req.method === 'POST') {
        const { name, email, message, organization, subject } = req.body;

        // Create the transporter using Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email provider
            auth: {
                user: process.env.EMAIL_USER, // Add these to your .env.local
                pass: process.env.EMAIL_PASS,  // Add your email password to .env.local
            },
        });

        // Set the email options
        const mailOptions = {
            from: 'cansatuci@gmail.com', // Your Gmail address
            to: 'cansatuci@gmail.com',  // Where to send the email
            subject: `${subject} - from ${name}`,
            text: `Message from: ${name} (${email})\nOrganization: ${organization || 'N/A'}\n\n${message}`,
            replyTo: email, // Reply back to the user's email
        };

        // Send the email
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        // Only allow POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
