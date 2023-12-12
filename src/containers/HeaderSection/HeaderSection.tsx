import Header from '@/components/Header';
import styles from './HeaderSection.module.scss';
import Link from 'next/link';

const HeaderSection = () => {
    const headerPadding = '30px 0';

    return (
        <div className={styles.root}>
            <Header padding={headerPadding}/>
            <div className="container">
                <div className={styles.subtitle}>Онлайн-програма Галини Воропаєвої</div>
                <h2 className={styles.title}>Усвідомлене управління</h2>
                <p className={styles.content}><span>4-х рівнева програма</span> для розвитку управлінської компетенції та розробки власної системи, яка працюватиме на вас та вашу команду</p>
                <Link href='/#tariffs' className={styles.link}><button className={styles.button}>Приєднатися до програми</button></Link>
                <p className={styles.info}><span>Поетапний професійний та особистісний розвиток</span> - найкраще рішення для тих, хто хоче отримувати задоволення від управління та налаштований добиватися результатів у найскладніший для нас час</p>
            </div>
        </div>
    );
}

export default HeaderSection;