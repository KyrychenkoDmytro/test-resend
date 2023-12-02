import React from 'react';
import styles from './Program.module.scss';
import Link from 'next/link';

interface ProgramProps {
    color: string;
    level: string;
    title: string;
    date: string;
    duration: string;
    text: string;
    href: string;
};

const Program: React.FC<ProgramProps> = ({ text, level, title, date, duration, color, href }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;

    return (
        <div className={dynamicStylesRoot}>
            <div className={styles.background}></div>
            <div className={styles.wrapper}>
                <div className={styles.level}>{level}</div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
                <Link href={href} className={styles.link}><button className={styles.button}>Подивитися детальну програму</button></Link>
                <div className={styles.date_duration}>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.duration}>{duration}</div>
                </div>
            </div>
        </div>
    );
}

export default Program;