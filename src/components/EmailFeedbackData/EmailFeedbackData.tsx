import { FC } from 'react';
interface EmailFeedbackDataProps {
    fullName: string;
    telegram: string;
    message?: string;
}

const EmailFeedbackData: FC<EmailFeedbackDataProps> = ({ fullName, telegram, message }) => {

    return (
        <section>
            <h3>Прізвище та ім’я</h3>
            <div>{fullName}</div>
            <h3>Telegram</h3>
            <div>{telegram}</div>
            {message &&
                <>
                    <h3>Повідомлення</h3>
                    <div>{message}</div>
                </>
            }
        </section>
    );
}

export default EmailFeedbackData;