'use client';
import styles from './Note.module.scss';
import { SolutionIcon } from '@/components/svgs';
import { FC } from 'react';

interface NoteProps {
    color: string;
    fill1: string;
    fill2: string;
    text: string;
}

const Note: FC<NoteProps> = ({ fill1, fill2, text, color }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;

    return (
        <div className={dynamicStylesRoot}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <SolutionIcon
                        dynamicClass={styles.image}
                        fill1={fill1}
                        fill2={fill2}
                    />
                    <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
            </div>
        </div>
    );
}

export default Note;