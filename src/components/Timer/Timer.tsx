import styles from './Timer.module.scss';
import { FC } from 'react';

const Timer: FC<{ color: string }> = ({ color }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;

    return (
        <div className={dynamicStylesRoot}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>до підвищення ціни:</h3>
                    <div className={styles.timer_wrapper}>
                        <div className={styles.timer_block}>
                            <div className={styles.days}>30</div>
                            <span>дн</span>
                        </div>
                        <div className={styles.timer_block}>
                            <div className={styles.hours}>05</div>
                            <span>год</span>
                        </div>
                        <div className={styles.timer_block}>
                            <div className={styles.minutes}>20</div>
                            <span>хв</span>
                        </div>
                        <div className={styles.timer_block}>
                            <div className={styles.seconds}>48</div>
                            <span>сек</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;