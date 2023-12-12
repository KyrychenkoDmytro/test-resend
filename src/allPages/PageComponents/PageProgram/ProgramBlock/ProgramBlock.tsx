'use client';

import styles from './ProgramBlock.module.scss';
import { FC, useState } from 'react';
import { useScreenWidth } from '../../../../hooks';
import { ArrowDownIcon } from '@/components/svgs';

interface ProgramBlockProps {
    color: string;
    title: string;
    ul: string[];
    stroke: string;
}

const ProgramBlock: FC<ProgramBlockProps> = ({ color, title, ul, stroke }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;
    const [isOpen, setIsOpen] = useState(false);
    const screenWidth = useScreenWidth();

    const handleTitleClick = () => {
        if (screenWidth.mobile) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <div className={dynamicStylesRoot}>
            <h4
                onClick={handleTitleClick}
                className={`${styles.title} ${isOpen ? `${styles.open}` : ''}`}
            >
                {title}
                <ArrowDownIcon dynamicClass={styles.arrow} stroke={stroke} />
            </h4>
            <ul
                className={`${styles.ul} ${isOpen ? `${styles.open}` : ''}`}
            >
                {ul?.map((li, index) => (
                    <li key={index}>{li}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProgramBlock;