'use client'

import Link from 'next/link';
import styles from './AboutAuthor.module.scss';
import Image from 'next/image';
import { StarIcon, InstagramIcon, TelegramIcon } from '../../components/svgs';

const AboutAuthor = () => {

    return (
        <section className={styles.root} id='about-author'>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.photo}>
                        <Image
                            src='/images/author.png'
                            alt='photo'
                            width={480}
                            height={480}
                        />
                    </div>
                    <div className={styles.text}>
                        <h3 className={styles.title}>Галина воропаєва</h3>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                Автор курсу
                            </li>
                            <li className={styles.li}>
                                Бізнес-тренер, супервізор управлінської практики
                            </li>
                            <li className={styles.li}>
                                Коуч організаційного розвитку (стандарт ECF)
                            </li>
                            <li className={styles.li}>
                                Акредитований консультант програм ЄБРР (організаційний розвиток, оптимізація систем управління)
                            </li>
                        </ul>
                        <div className={styles.network}>
                            <Link href='https://t.me/voropaevagalyna' target='_blank'>
                                <TelegramIcon className={styles.telegram} />
                                Telegram-канал
                            </Link>
                            <Link href='https://www.instagram.com/voropaeva.galyna' target='_blank'>
                                <InstagramIcon className={styles.instagram} />
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutAuthor;