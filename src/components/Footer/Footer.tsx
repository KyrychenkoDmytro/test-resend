import styles from './Footer.module.scss';
import HeaderLogo from '../HeaderLogo';
import FooterNav from '../FooterNav';
import { FC } from 'react';


interface FooterProps {
    color?: string;
}

const Footer: FC<FooterProps> = ({ color }) => {
    const dynamicStylesRoot = color ? `${styles.root} ${styles[color]}` : `${styles.root}`;

    return (
        <div className={dynamicStylesRoot} id='contacts'>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.nav_wrapper}>
                        <HeaderLogo />
                        <FooterNav />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.copyright}>Усвідомлене управління © 2023 Всі права захищені</div>
                        <div className={styles.privacy_policy}>Політика конфіденційності</div>
                        <div className={styles.public_offer}>Публічна оферта</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;