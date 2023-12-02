'use server';
import { Resend } from 'resend';
import React from 'react';
import EmailFeedbackData from '@/components/EmailFeedbackData';

const sendEmail = async (formData: FormData) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fullName = formData.get('fullName');
    const telegram = formData.get('telegram');
    const email = formData.get('emailForm');
    const message = formData.get('message');

    try {
        await resend.emails.send({
            from: 'Train Courses <onboarding@resend.dev>',
            to: 'test.resend12@gmail.com',
            subject: 'Form Data',
            reply_to: email as string,
            react: React.createElement(EmailFeedbackData, {
                fullName: fullName as string,
                telegram: telegram as string,
                message: message as string
            })
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export default sendEmail;