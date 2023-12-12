import styles from './EducationProcessBlock.module.scss';
import {FC} from 'react';

interface EducationProcessBlockProps {
    title: string;
    text: string;
    color: string;
    additionalClass: string;
}

const EducationProcessBlock: FC<EducationProcessBlockProps> = ({color, title, text, additionalClass}) => {

    return (
        <div className={`${styles.root} ${additionalClass} ${styles[color]}`}>
            <h4 className={styles.name}>{title}</h4>
            <div className={styles.text}  dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
    );
}

export default EducationProcessBlock;