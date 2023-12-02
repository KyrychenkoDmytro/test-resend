'use client';
import styles from './MainPage.module.scss';
import FeedbackForm from '@/containers/FeedbackForm';

const MainPage = () => {

    return (
        <div className={styles.root}>
            <main>
                <FeedbackForm />
            </main>
        </div>
    );
}

export default MainPage;