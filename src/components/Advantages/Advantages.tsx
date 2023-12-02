import Advantage from './Advantage';
import styles from './Advantages.module.scss';


const Advantages = () => {
    const blocks = [
        {
            "text": "Кожен рівень складається з кількох модулів, об'єднаних спільною темою.",
            "color": "#C2A4E8"
        },
        {
            "text": "Складність роботи зростає з кожним рівнем, як і глибина розуміння сучасного управління.",
            "color": "#C2A4E8"
        },
        {
            "text": "Кожен рівень можна проходити окремо, в залежності від актуальної управлінської потреби.",
            "color": "#C2A4E8"
        },
    ];

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.wrapper}>
                    {blocks?.map((block, index) => (
                        <Advantage {...block} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Advantages;