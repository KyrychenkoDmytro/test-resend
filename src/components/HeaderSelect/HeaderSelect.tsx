'use client'

import styles from './HeaderSelect.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeaderSelect = () => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const links = [
        { href: '/level-1', name: 'Рівень 1. Основи управління' },
        { href: '/level-2', name: 'Рівень 2. Психологія взаємодії' },
        { href: '/level-3', name: 'Рівень 3. Лідерство' },
        { href: '/level-4', name: 'Рівень 4. Мислення' },
    ];

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1440);
        if (window.innerWidth < 1440) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div className={styles.root}>
            <button className={styles.btn} onClick={() => setIsActive(!isActive)} disabled={isMobile}>
                Програми
            </button>
            {isActive && (
                <div className={styles.content}>
                    {links?.map((link) => (
                        <Link
                            href={link.href}
                            className={styles.option}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderSelect;