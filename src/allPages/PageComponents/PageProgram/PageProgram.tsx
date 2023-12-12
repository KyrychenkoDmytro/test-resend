'use client';

import { FC } from 'react';
import styles from './PageProgram.module.scss';
import ProgramBlock from './ProgramBlock';
import { useAppDispatch } from '@/lib/hooks';
import { setColorModalForm, toggleModalForm } from '@/lib/features/users/buyFormSlice';

interface ProgramBlockObj {
    title: string;
    ul: string[];
}
interface ProgramProps {
    color: string;
    blocks: ProgramBlockObj[];
    stroke: string;
}

const PageProgram: FC<ProgramProps> = ({ color, blocks, stroke }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;
    const dispatch = useAppDispatch();
    const openModalForm = () => {
        dispatch(setColorModalForm(color));
        dispatch(toggleModalForm());
    }

    return (
        <div className={dynamicStylesRoot}>
            <div className='container'>
                <h2 className={styles.title}>програма навчання</h2>
                <div className={styles.wrapper}>
                    {blocks?.map((block, index) => (
                        <ProgramBlock color={color} {...block} stroke={stroke} key={index} />
                    ))}
                </div>
                {color != 'pinky'
                    ?
                    <button className={styles.btn} onClick={openModalForm}>Купити курс</button>
                    :
                    <button className={styles.btn}>Зареєструватися</button>
                }

            </div>
        </div>
    );
}

export default PageProgram;