'use client';

import styles from './Corporate.module.scss';
import Link from 'next/link';

const Corporate = () => {

    return (
        <div className={styles.root}>
           <h2>Corporate</h2>
           <Link href='/'><button>Go to Main Page</button></Link>
        </div>
    );
}

export default Corporate;