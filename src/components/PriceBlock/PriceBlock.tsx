import styles from './PriceBlock.module.scss';
import { useAppDispatch } from '@/lib/hooks';
import { setColorModalForm, toggleModalForm } from '@/lib/features/users/buyFormSlice';

interface PriceBlockProps {
    color: string;
    level: string;
    title: string;
    main_info_list: string[];
    modules_list: string[];
    extra_list: string[];
    expiration_date: string;
};

const PriceBlock: React.FC<PriceBlockProps> = ({ color, level, title, main_info_list, modules_list, extra_list, expiration_date }) => {
    const dynamicStylesRoot = `${styles.root} ${styles[color]}`;
    const createMarkup = (htmlString: string) => {
        return { __html: htmlString };
    };
    const dispatch = useAppDispatch();

    const openModalForm = () => {
        dispatch(setColorModalForm(color));
        dispatch(toggleModalForm());
    }

    return (
        <div className={dynamicStylesRoot}>
            <div className={styles.hat}>
                <div className={styles.level}>{level}</div>
                <h4 className={styles.title}>{title}</h4>
                <ul className={styles.main_info_list}>
                    {main_info_list?.map((list, index) => (
                        <li key={index}>{list}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.body}>
                <ul className={styles.modules_list}>
                    {modules_list?.map((list, index) => (
                        <li key={index} dangerouslySetInnerHTML={createMarkup(list)} />
                    ))}
                </ul>
                <ul className={styles.extra_list}>
                    {extra_list?.map((list, index) => (
                        <li key={index} dangerouslySetInnerHTML={createMarkup(list)} />
                    ))}
                </ul>
                {level !== 'рівень 4' ? (
                    <div className={styles.price_container}>
                        <h5 className={styles.subtitle_timer}>Встигніть придбати курс до підняття ціни:</h5>
                        <div className={styles.timer_wrap}>
                            <div className={styles.timer_block}>
                                <div className={styles.days}>30</div>
                                <span>днів</span>
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
                        <div className={styles.price}>300$</div>
                        <div className={styles.old_price}>400$</div>
                        <div className={styles.link}>
                            <button
                                className={styles.button}
                                onClick={openModalForm}
                            >
                                Купити зі знижкою
                            </button>
                        </div>
                        <div className={styles.expiration_date}>*ціна зі знижкою <span>{expiration_date}</span></div>
                    </div>
                ) : (
                    <>
                        <div className={styles.link}><button
                            className={styles.button}
                            onClick={openModalForm}
                        >
                            Записатися</button></div>
                        <div className={styles.expiration_date_last}>{expiration_date}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default PriceBlock;