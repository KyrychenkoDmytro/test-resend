import styles from './Education.module.scss';

const Education = () => {

    return (
        <section className={styles.root} id ='education'>
            <div className='container'>
                <h3 className={styles.title}>Як проходить навчання</h3>
                <div className={styles.wrap1}>
                    <div className={`${styles.block1} ${styles.block}`}>
                        <h4>5 тижнів</h4>
                        <p>тривалість кожного рівня</p>
                    </div>
                    <div className={`${styles.block2} ${styles.block}`}>
                        <h4>практика та лекції</h4>
                        <p>відбуваються на платформі zoom</p>
                    </div>
                    <div className={`${styles.block3} ${styles.block}`}>
                        <h4>Сертифікат</h4>
                        <p>який підтверджує ваше навчання</p>
                    </div>
                </div>
                <div className={styles.wrap2}>
                    <div className={`${styles.block4} ${styles.block}`}>
                        <h4>Мастермайнд формат</h4>
                        <p>допомогає фокусуватися на своїх цілях та отримувати підтримку від колег протягом їх реалізації</p>
                    </div>
                    <div className={`${styles.block5} ${styles.block}`}>
                        <h4>Домашнє завдання</h4>
                        <p>в форматах практичних завдань та синематики
                            з розгорнутим відео - коментарем від тренера</p>
                    </div>
                </div>
                <div className={`${styles.block6} ${styles.block}`}>
                    <h4>Особистий Доступ до закритого чату</h4>
                    <p>де можна отримати оперативні відповіді на запитання від тренера та колег, додатковий матеріал, літературу та спілкування з колегами та тренером з питань особистих кейсів та роздумів</p>
                </div>
            </div>
        </section>
    );
}

export default Education;