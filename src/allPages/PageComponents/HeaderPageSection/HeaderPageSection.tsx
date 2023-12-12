'use client';
import Header from '@/components/Header';
import styles from './HeaderPageSection.module.scss';
import Timer from '@/components/Timer';
import Link from 'next/link';
import { FC } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { setColorModalForm, toggleModalForm } from '@/lib/features/users/buyFormSlice';

interface HeaderSectionProps {
    color: string;
    header: {
        subtitle: string;
        title: string;
        content: string;
        registrationLink: string;
        paymentLink: string;
        startDate: string;
        duration: string;
        price: string;
        validUntil?: string;
    };
};

const HeaderPageSection: FC<HeaderSectionProps> = ({ color, header }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;
    const headerPadding = '20px 0';
    if (!header) {
        return null;
    }
    const { subtitle, title, content, registrationLink, paymentLink, startDate, duration, price, validUntil } = header;
    const dispatch = useAppDispatch();

    const openModalForm = () => {
        dispatch(setColorModalForm(color));
        dispatch(toggleModalForm());
    }

    return (
        <div className={dynamicStylesRoot}>
            {color != 'pinky'
                ?
                <Timer color={color} />
                :
                <></>
            }
            <Header color={color} padding={headerPadding} />
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></p>
                    <div className={styles.buttons_wrapper}>
                        <Link href={registrationLink} className={styles.registration_link}> <button className={styles.registration}>Зареєструватися</button></Link>
                        <Link href={paymentLink} className={styles.payment_link}>
                            <button 
                            className={styles.buy_course}
                            onClick={openModalForm}
                            >
                                Купити курс
                            </button>
                            </Link>
                    </div>
                    <div className={styles.course_details}>
                        <div className={styles.date_block}>
                            <div>{startDate}</div>
                            <span>старт курсу</span>
                        </div>
                        <div className={styles.duration_block}>
                            <div>{duration}</div>
                            <span>тривалість курсу</span>
                        </div>
                        <div className={styles.price_block}>
                            <div className={styles.price_wrapper}>
                                <div className={styles.price}>
                                    <div>{price}</div>
                                    {color != 'pinky'
                                        ?
                                        <span>вартість</span>
                                        :
                                        <span>цей рівень тільки для учасників попереднього навчання - відкритого набору не буває</span>
                                    }
                                </div>
                                <div className={styles.valid_until}>спеціальна акційна ціна діє <span>{validUntil}</span></div>
                            </div>
                            <div className={styles.limited}>*кількість учасників обмежена</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPageSection;