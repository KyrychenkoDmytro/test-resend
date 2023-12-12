import { FC } from 'react';
import styles from './EducationProcess.module.scss';
import EducationProcessBlock from './EducationProcessBlock';

interface EducationProcessObj {
    title: string;
    text: string;
}
interface EducationProcessProps {
    color: string;
    blocks: EducationProcessObj[];
    subtitle?: string;
}

const EducationProcess: FC<EducationProcessProps> = ({ color, blocks, subtitle }) => {

    return (
        <div className={`${styles.root} ${styles[color]}`}>
            <div className='container'>
                <div className={styles.title_wrap}>
                    <h3 className={styles.title}>Як проходить навчання</h3>
                    {subtitle &&
                        <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></div>
                    }
                </div>
                <div className={styles.wrapper}>
                    {blocks?.map((block, index) => (
                        <EducationProcessBlock
                            {...block}
                            color={color}
                            additionalClass={styles.block}
                            key={index}
                        />
                    ))}
                </div>
                <div className={styles.img}></div>
            </div>
        </div>
    );
}

export default EducationProcess;