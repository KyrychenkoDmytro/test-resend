import styles from './Advantage.module.scss';
import { CheckFillIcon } from '@/components/svgs';
import { FC } from 'react';

interface AdvantageProps {
    text: string;
    color: string;
}

const Advantage: FC<AdvantageProps> = ({ text, color }) => {

    return (
        <div className={styles.root}>
            <div className={styles.img}>
                <CheckFillIcon fill={color} />
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    );
}

export default Advantage;