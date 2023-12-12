import EmailFeedbackData from '@/components/EmailFeedbackData';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';


export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { fullName, telegram, email, header, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Усвідомлене Управління <onboarding@resend.dev>",
      to: 'test.resend12@gmail.com',
      subject: "Зворотній зв'язок",
      reply_to: email as string,
      react: React.createElement(EmailFeedbackData, {
        fullName: fullName as string,
        telegram: telegram as string,
        email: email as string,
        message: message as string,
        header: header as string
      })
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}