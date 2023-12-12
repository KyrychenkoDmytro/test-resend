'use client';

import { useAppDispatch } from '@/lib/hooks';
import styles from './PriceAndRegistrationForm.module.scss';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { setColorModalForm, toggleModalForm } from '@/lib/features/users/buyFormSlice';

interface PriceAndRegistrationFormProps {
    color: string;
    price: string;
    valid_until: string;
    additional_information?: string;
}

const PriceAndRegistrationForm: FC<PriceAndRegistrationFormProps> = ({ color, valid_until, price, additional_information }) => {
    const [fullName, setFullName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [header, setHeader] = useState('');
    const emailRegex = /^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/;
    const headers = {
        lilac: 'Рівень 1. Основи управління.',
        mint: 'Рівень 2. Психологія взаємодії.',
        sky: 'Рівень 3. Лідерство.',
        pinky: 'Рівень 4. Мислення.'
    };
    const dispatch = useAppDispatch();
    const openModalForm = () => {
        dispatch(setColorModalForm(color));
        dispatch(toggleModalForm());
    }

    useEffect(() => {
        setHeader((headers as any)[color]);
    }, [color]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

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
                    body: JSON.stringify({ fullName, telegram, email, header }),
                })
                if (response.ok) {
                    toast.success('ДЯКУЄМО ЗА РЕЄСТРАЦІЮ!');
                    setFullName('');
                    setTelegram('');
                    setEmail('');
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
        <div className={`${styles.root} ${styles[color]}`}>
            <div className={styles.bg}>
                <div className='container'>
                    <div className={styles.wrapper}>
                        <div className={styles.price_block}>
                            <h3 className={styles.price_title}>вартість навчання</h3>
                            <h3 className={styles.price_value}>{price}</h3>
                            {!additional_information &&
                                <>
                                    <p className={styles.price_text}>спеціальна акційна ціна діє <span>{valid_until}</span></p>
                                    <button className={styles.price_buy} onClick={openModalForm}>Купити курс</button>
                                </>
                            }
                        </div>
                        <div className={styles.form_block} id="registration-form">
                            {additional_information
                                ?
                                <h3 className={styles.title}>Реєстрація*</h3>
                                :
                                <h3 className={styles.title}>Реєстрація</h3>
                            }
                            <p className={styles.text}>відразу після реєстрації з вами звʼяжеться менеджер з додатковою інформацією</p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.full_name}>
                                    <div className={styles.label}><span>* </span>прізвище та ім’я</div>
                                    <div className={styles.input}>
                                        <input
                                            value={fullName}
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
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder='example@gmail.com'
                                            required
                                        />
                                    </div>
                                </div>
                                <button className={styles.submit} type="submit">Відправити</button>
                                {additional_information &&
                                    <div className={styles.additional_information}>{additional_information}</div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceAndRegistrationForm;