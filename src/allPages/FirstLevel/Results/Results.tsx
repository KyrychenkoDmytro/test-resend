import styles from './Results.module.scss';

const Results = () => {

    return (
        <div className={styles.root}>
            <div className='container'>
                <div className={styles.bg}>
            <div className={styles.title}>Результат після проходження курсу</div>
                <div className={styles.wrapper}>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Знаю як застосовувати управлінські методи до підлеглих</div>
                    </div>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Конструктивна критика може мотивувати</div>
                    </div>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Знаю ЩО мотивує людину та як підвищити результативність управлінського спілкування</div>
                    </div>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Обходжу пастки делегування та зберігаю енергію для стратегічного розвитку</div>
                    </div>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Тримаю баланс матеріальної та нематеріальної мотивації</div>
                    </div>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Управляю з позиції усвідомленої компетенції</div>
                    </div>
                    <div className={styles.result}>
                        <div className={styles.img}></div>
                        <div className={styles.text}>Розумію, що правильно впроваджене непопулярне рішення - запорука збереження результативних відносин в команді</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Results;