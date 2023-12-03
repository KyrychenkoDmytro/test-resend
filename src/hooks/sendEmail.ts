'use server';
import { Resend } from 'resend';
import React from 'react';
import EmailFeedbackData from '@/components/EmailFeedbackData';

const resend = new Resend('re_Vw8Lz8GE_PEDewynGQSq8g3Fc8XnJ7Wdj');

const sendEmail = async (formData: FormData) => {
  
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