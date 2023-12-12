import Program from '@/components/Program';
import styles from './LevelsProgram.module.scss';
import levelsData from './levels.json';

const LevelsProgram = () => {
    const levels = levelsData;

    return (
        <section className={styles.root} id='programs'>
            <div className='container'>
                <h3 className={styles.title}><span>4 РІВНІ,</span> ЯКІ ПОВНІСТЮ ФОРМУЮТЬ УПРАВЛІНСЬКУ КОМПЕТЕНЦІЮ КЕРІВНИКА</h3>
                <h4 className={styles.subtitle}>Програми навчання</h4>
                <div className={styles.wrapper}>
                    {levels?.map((level, index) => (
                        <Program {...level} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LevelsProgram;