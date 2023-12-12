import { FC } from 'react';
import {
    Body,
    Head,
    Html,
    Heading,
    Tailwind,
    Text
} from '@react-email/components';
interface EmailFeedbackDataProps {
    fullName: string;
    telegram: string;
    email: string;
    header: string;
    message?: string;
}

const EmailFeedbackData: FC<EmailFeedbackDataProps> = ({ fullName, telegram, email, header, message }) => {

    return (
        <Html lang='uk'>
            <Head />
            <Tailwind>
                <Body className='bg-white font-sans text-slate-700'>
                    <Heading as="h2">{header}</Heading>
                    <Heading as="h3" className='mb-0'>Прізвище та ім’я</Heading>
                    <Text className='text-xl mt-0 ml-4'>{fullName}</Text>
                    <Heading as="h3" className='mb-0'>Telegram</Heading>
                    <Text className='text-xl mt-0 ml-4'>{telegram}</Text>
                    <Heading as="h3" className='mb-0'>Email</Heading>
                    <Text className='text-xl mt-0 ml-4'>{email}</Text>
                    {message &&
                        <>
                            <Heading as="h3" className='mb-0'>Повідомлення</Heading>
                            <Text className='text-xl mt-0 ml-4'>{message}</Text>
                        </>
                    }
                </Body>
            </Tailwind>
        </Html>
    );
}

export default EmailFeedbackData;