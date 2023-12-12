import styles from './SuitableBlock.module.scss';
import { FC } from 'react';

interface SuitableBlockProps {
    text: string;
    color: string;
}

const SuitableBlock: FC<SuitableBlockProps> = ({ text }) => {

    return (
        <div className={styles.root}>
            <div className={styles.img}></div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    );
}

export default SuitableBlock;