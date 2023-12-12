'use client';

import styles from './FeedbackForm.module.scss';
import { useState } from 'react';
import toast from 'react-hot-toast';

const FeedbackForm = () => {
    const [fullName, setFullName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const emailRegex = /^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const header = 'Головна сторінка.'

        try {
            if (!emailRegex.test(email)) {
                toast.error('Будь ласка, введіть коректну адресу електронної пошти.');
                return;
            }

            const fetchData = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-mail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fullName, telegram, email, message, header }),
                })
                if (response.ok) {
                    toast.success('ДЯКУЄМО ЗА РЕЄСТРАЦІЮ!');
                    setFullName('');
                    setTelegram('');
                    setEmail('');
                    setMessage('');
                } else {
                    console.log(`status: ${response.status}(${response.statusText})`);
                    toast.error(`Помилка при відправленні форми: ${response.statusText}`);
                }
                const data = await response.json();
                return data;
            }
            const data = fetchData();

        } catch (error: any) {
            console.error('Помилка при відправленні форми: ', error);
            toast.error(`Помилка при відправленні форми: ${error}`);
        }
    };

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>зворотній зв’язок</h3>
                    <p className={styles.text}>
                        Є додаткові запитання чи не знаєте який рівень обрати? Залишайте свої контакти в формі і з вами відразу звʼяжеться менеджер і обов’язково допоможе!
                    </p>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.full_name}>
                            <div className={styles.label}><span>* </span>прізвище та ім’я</div>
                            <div className={styles.input}>
                                <input
                                    value={fullName}
                                    name='fullName'
                                    onChange={(e) => setFullName(e.target.value)}
                                    type="text"
                                    required />
                            </div>
                        </div>
                        <div className={styles.telegram}>
                            <div className={styles.label}><span>* </span>telegram</div>
                            <div className={styles.input}>
                                <input
                                    value={telegram}
                                    name='telegram'
                                    onChange={(e) => setTelegram(e.target.value)}
                                    type="text"
                                    placeholder='@example or https://t.me/example'
                                    required />
                            </div>
                        </div>
                        <div className={styles.email}>
                            <div className={styles.label}><span>* </span>e-mail</div>
                            <div className={styles.input}>
                                <input
                                    value={email}
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder='example@gmail.com'
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.message}>
                            <div className={styles.label}>ваше повідомлення</div>
                            <div className={styles.input}>
                                <textarea
                                    value={message}
                                    name='message'
                                    placeholder='your message'
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className={styles.submit} type="submit">Відправити</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FeedbackForm;