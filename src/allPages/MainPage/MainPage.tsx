'use client';
import HeaderSection from '@/containers/HeaderSection';
import styles from './MainPage.module.scss';
import Advantages from '@/components/Advantages';
import AboutAuthor from '@/containers/AboutAuthor';
import LevelsProgram from '@/containers/LevelsProgram';
import AfterCourse from '@/components/AfterCourse';
import Education from '@/components/Education';
import Testimonials from '@/components/Testimonials';
import Tariffs from '@/containers/Tariffs';
import HaveAQuestion from '@/components/HaveAQuestion';
import FeedbackForm from '@/containers/FeedbackForm';
import Footer from '@/components/Footer';
import ModalForm from '@/components/ModalForm';

const MainPage = () => {

    return (
        <div className={styles.root}>
            <HeaderSection />
            <main>
                <Advantages />
                <AboutAuthor />
                <LevelsProgram />
                <AfterCourse />
                <Education />
                <Testimonials />
                <Tariffs />
                <HaveAQuestion />
                <FeedbackForm />
            </main>
            <Footer />
            <ModalForm />
        </div>
    );
}

export default MainPage;