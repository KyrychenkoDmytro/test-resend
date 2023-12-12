'use client';

import styles from './HeaderNav.module.scss';
import HeaderSelect from '../HeaderSelect';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const HeaderNav: FC<{ color: string | undefined, active: any }> = ({ color, active }) => {
    let HeaderNavClasses;
    if (typeof color === 'string') {
        HeaderNavClasses = active ? `${styles.root} ${styles[color]} ${styles._active}` : `${styles.root} ${styles[color]}`;
    } else {
        HeaderNavClasses = active ? `${styles.root} ${styles._active}` : `${styles.root}`;
    }
    const pathname = usePathname();

    return (
        <div className={HeaderNavClasses}>
            <div className={styles.container}>
                <nav>
                    <ul>
                        <li>
                            <Link href='/#about-author'>Про автора</Link>
                        </li>
                        <li>
                            <HeaderSelect />
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
                        <li>
                            <Link href={`${pathname}/#contacts`}>Контакти</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderNav;