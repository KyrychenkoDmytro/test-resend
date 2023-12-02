import styles from './AfterCourse.module.scss';
import Image from 'next/image';

const AfterCourse = () => {

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>після навчання Ви:</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}>Опануєте основні принципи та механізми управління</li>
                            <li className={styles.item}>Усвідомите індивідуальний стиль управління та розширите можливості впливу на роботу підлеглих</li>
                            <li className={styles.item}>Навчитеся знаходити спільну мову з підлеглими та отримувати драйв від управління командою</li>
                            <li className={styles.item}>Почнете керувати результатами команди за рахунок практики здобутих знань</li>
                            <li className={styles.item}>Особистісне зростання надасть можливість усвідомлено впроваджувати та обирати інструменти управління собою, процесом та людьми</li>
                        </ul>
                    </div>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
}

export default AfterCourse;