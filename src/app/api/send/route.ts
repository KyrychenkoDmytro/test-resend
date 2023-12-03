import EmailFeedbackData from '@/components/EmailFeedbackData';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

export async function POST() {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // const fullName = formData.get('fullName');
    // const telegram = formData.get('telegram');
    // const email = formData.get('emailForm');
    // const message = formData.get('message');
  try {
    const { data, error } = await resend.emails.send({
        from: 'Train Courses <onboarding@resend.dev>',
        to: 'test.resend12@gmail.com',
        subject: 'Form Data',
        // reply_to: email as string,
        text: 'atata'
        // react: React.createElement(EmailFeedbackData, {
        //     fullName: fullName as string,
        //     telegram: telegram as string,
        //     message: message as string
        // })
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}