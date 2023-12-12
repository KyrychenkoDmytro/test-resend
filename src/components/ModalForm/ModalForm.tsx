import styles from './ModalForm.module.scss';
import data from './modalData';
import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setColorModalForm, setStateModalForm, toggleModalForm } from '@/lib/features/users/buyFormSlice';

const ModalForm: FC = () => {
    const modalData = data;
    const [fullName, setFullName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [header, setHeader] = useState('');
    const emailRegex = /^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/;
    const dispatch = useAppDispatch();
    const { colorModalForm, isModalOpen } = useAppSelector(state => state.buyForm);
    const headers = {
        lilac: 'Купівля рівня 1. Основи управління.',
        mint: 'Купівля рівня 2. Психологія взаємодії.',
        sky: 'Купівля рівня 3. Лідерство.'
    };
    useEffect(() => {
        setHeader((headers as any)[colorModalForm]);
    }, [colorModalForm]);

    const handleCoursePaymentSubmit = (event: any) => {
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
                    dispatch(toggleModalForm());
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

    }

    const handleRegistrationSubmit = (event: any) => {
        event.preventDefault();

        try {
            if (!emailRegex.test(email)) {
                toast.error('Будь ласка, введіть коректну адресу електронної пошти.');
                return;
            }

            const fetchData = async () => {
                const header = 'Рівень 4. Мислення.';
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
                    dispatch(toggleModalForm());
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

    useEffect(() => {
        const bodyClassList = document.body.classList;
        bodyClassList.remove('_noScroll');

        isModalOpen ? bodyClassList.add('_noScroll') : bodyClassList.remove('_noScroll');

        return () => {
            bodyClassList.remove('_noScroll');
        };
    }, [isModalOpen]);

    useEffect(() => {
        const storedColorModalForm = localStorage.getItem('colorModalForm');
        if (storedColorModalForm) {
            dispatch(setColorModalForm(storedColorModalForm));
        }

        const storedIsModalOpen = localStorage.getItem('isModalOpen');
        if (storedIsModalOpen) {
            dispatch(setStateModalForm(JSON.parse(storedIsModalOpen)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('colorModalForm', colorModalForm);
        localStorage.setItem('isModalOpen', JSON.stringify(isModalOpen));
    }, [colorModalForm, isModalOpen]);

    return (
        <div
            className={isModalOpen ? `${styles.root} ${styles[colorModalForm]} ${styles._active}` : `${styles.root} ${styles[colorModalForm]}`}
            onClick={() => dispatch(toggleModalForm())}
        >
            <div
                className={styles.wrapper}
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: modalData[colorModalForm].title }}></h3>
                <form className={styles.form} onSubmit={colorModalForm !== "pinky" ? handleCoursePaymentSubmit : handleRegistrationSubmit}>
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
                    {colorModalForm !== "pinky"
                        ?
                        <button className={styles.submit} type="submit"
                        >
                            Оплатити
                        </button>
                        :
                        <button className={styles.submit} type="submit">
                            Записатися
                        </button>
                    }
                </form>
                {colorModalForm !== "pinky"
                    ?
                    <div className={styles.additional_information}>
                        Після оплати на вказану пошту протягом 15 хвилин прийде лист. Перед оплатою перевірте, будь ласка, введені дані!
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default ModalForm;