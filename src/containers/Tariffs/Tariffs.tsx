import styles from './Tariffs.module.scss';
import PriceBlock from '@/components/PriceBlock';
import pricesData from './tariffs.json';
import { FC } from 'react';



const Tariffs: FC = () => {
    const prices = pricesData;

    return (
        <div className={styles.root} id='tariffs'>
            <div className="container">
                <h3 className={styles.title}>Тарифи</h3>
                <div className={styles.wrapper}>
                    {prices?.map((price, index) => (
                        <PriceBlock
                         {...price}
                          key={index} 
                          />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tariffs;