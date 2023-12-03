// import { EmailTemplate } from '../../../components/EmailTemplate';
// 'use server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';
import EmailFeedbackData from '@/components/EmailFeedbackData';

const resend = new Resend('re_Vw8Lz8GE_PEDewynGQSq8g3Fc8XnJ7Wdj');

export async function OPTIONS(request: Request) {
    const allowedOrigin = request.headers.get("origin");
    const response = new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    });
  
    return response;
  }

export async function POST(formData: FormData) {
    const fullName = formData.get('fullName');
    const telegram = formData.get('telegram');
    const email = formData.get('emailForm');
    const message = formData.get('message');

  try {
    const data = await resend.emails.send({
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
