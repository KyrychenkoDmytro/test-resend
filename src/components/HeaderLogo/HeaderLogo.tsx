import styles from './HeaderLogo.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const HeaderLogo = () => {

    return (
        <div className={styles.root}>
            <Link href='/'><Image src='./icons/logo.svg' alt='logo' width={168} height={32} /></Link>
        </div>
    );
}

export default HeaderLogo;