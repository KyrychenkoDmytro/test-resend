import { FC } from 'react';
import styles from './HaveAQuestion.module.scss';
import Link from 'next/link';

interface HaveAQuestionProps {
    color?: string;
}

const HaveAQuestion: FC<HaveAQuestionProps> = ({ color }) => {
    const dynamicStylesRoot = color ? `${styles.root} ${styles[color]}` : `${styles.root}`;

    return (
        <div className={dynamicStylesRoot}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Залишилися запитання?</h3>
                    <p className={styles.text}>
                        Тисни на кнопку та отримай відповіді на будь-яке своє запитання щодо навчання
                    </p>
                    <Link href="#"><button className={styles.button}>Поставити запитання</button></Link>
                </div>
            </div>
        </div>
    );
}

export default HaveAQuestion;