import styles from './FooterNav.module.scss';
import Link from 'next/link';

const FooterNav = () => {

    return (
        <div className={styles.root}>
            <div className={styles.navigation}>
                <h4 className={styles.title}>Навігація</h4>
                <nav>
                    <ul className={styles.ul}>
                        <li>
                            <Link href='/#about-author'>Про автора</Link>
                        </li>
                        <li>
                            <Link href='/#programs'>Програми</Link>
                        </li>
                        <li>
                            <Link href='/#education'>Як проходить</Link>
                        </li>
                        <li>
                            <Link href='/#testimonials'>Відгуки</Link>
                        </li>
                        <li>
                            <Link href='/#tariffs'>Тарифи</Link>
                        </li>
                        <li>
                            <Link href='/corporate'>Корпоративне навчання</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.program}>
                <h4 className={styles.title}>Програма навчання</h4>
                <ul className={styles.ul}>
                    <li>
                        <Link href='/level-1'>Основи управління</Link>
                    </li>
                    <li>
                        <Link href='/level-2'>Психологія взаємодії</Link>
                    </li>
                    <li>
                        <Link href='/level-3'>Лідерство</Link>
                    </li>
                    <li>
                        <Link href='/level-4'>Мислення</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.contact}>
                <h4 className={styles.title}>Контактна інформація</h4>
                <ul className={styles.ul}>
                    <li>
                        <span>Пошта</span>
                        <Link href='mailto:example@example.com' target='_blank'>example@gmail.com</Link>
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/voropaeva.galyna' target='_blank'>Instagram</Link>
                    </li>
                    <li>
                        <Link href='https://t.me/ka_zhur' target='_blank'>Telegram менеджера </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FooterNav;