'use client';

import styles from './FeedbackForm.module.scss';
import { useState } from 'react';

const FeedbackForm = () => {
    const [fullName, setFullName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('telegram', telegram);
        formData.append('emailForm', email);
        formData.append('message', message);
       
        
        try {
            console.log(formData);
            // await sendEmail(formData);
            // setFullName('');
            // setTelegram('');
            // setEmail('');
            // setMessage('');
        } catch (error) {
            console.error('Error sending email:', error);
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
                        // action={sendEmail}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.full_name}>
                            <div className={styles.label}>прізвище та ім’я</div>
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
                            <div className={styles.label}>telegram</div>
                            <div className={styles.input}>
                                <input
                                    value={telegram}
                                    name='telegram'
                                    onChange={(e) => setTelegram(e.target.value)}
                                    type="text"
                                    required />
                            </div>
                        </div>
                        <div className={styles.email}>
                            <div className={styles.label}>e-mail</div>
                            <div className={styles.input}>
                                <input
                                    value={email}
                                    name='emailForm'
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
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
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className={styles.submit}>Відправити</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FeedbackForm;