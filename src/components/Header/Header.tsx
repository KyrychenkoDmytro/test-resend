'use client'

import styles from './Header.module.scss';
import { FC } from 'react';
import HeaderLogo from '../HeaderLogo';
import HeaderNav from '../HeaderNav';
import HeaderBurgerMenu from '../HeaderBurgerMenu';
import { useState, useEffect } from 'react';

const Header: FC<{ padding: string, color?: string }> = ({ padding, color }) => {
    const [menuActive, setMenuActive] = useState(false);
    const burgerMenuClasses = menuActive ? `${styles.root} ${styles._noScroll}` : styles.root;

    useEffect(() => {
        const bodyClassList = document.body.classList;
        bodyClassList.remove('_noScroll');

        menuActive ? bodyClassList.add('_noScroll') : bodyClassList.remove('_noScroll');

        return () => {
            bodyClassList.remove('_noScroll');
        };
    }, [menuActive]);

    return (
        <div className={burgerMenuClasses} style={{padding: padding}}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <HeaderLogo />
                    <HeaderNav color={color} active={menuActive} />
                    <HeaderBurgerMenu active={menuActive} onClick={() => setMenuActive(!menuActive)} />
                </div>
            </div>
        </div>
    );
};

export default Header;