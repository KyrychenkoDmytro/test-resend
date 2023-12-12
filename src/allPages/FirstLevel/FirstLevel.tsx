'use client';
import styles from './FirstLevel.module.scss';
import Footer from '@/components/Footer';
import EducationProcess from '../PageComponents/EducationProcess';
import PriceAndRegistrationForm from '../PageComponents/EducationProcess/PriceAndRegistrationForm';
import HeaderPageSection from '../PageComponents/HeaderPageSection';
import Note from '../PageComponents/Note';
import PageProgram from '../PageComponents/PageProgram';
import Results from './Results';
import SuitableFor from './SuitableFor';
import HaveAQuestion from '@/components/HaveAQuestion';
import page1Data from './page1Data.json';
import ModalForm from '@/components/ModalForm';

const FirstLevel = () => {
    const pageData = page1Data;

    return (
        <div className={styles.root}>
            <HeaderPageSection color={pageData.color} header={pageData.header} />
            <main>
                <Note color={pageData.color} fill1={pageData.note.fill1} fill2={pageData.note.fill2} text={pageData.note.text}/>
                <SuitableFor />
                <PageProgram color={pageData.color} blocks={pageData.program.blocks} stroke={pageData.program.stroke} />
                <Results />
                <EducationProcess color={pageData.color} blocks={pageData.educationProcess.blocks} />
                <PriceAndRegistrationForm
                    color={pageData.color}
                    price={pageData.priceAndRegistrationForm.price}
                    valid_until={pageData.priceAndRegistrationForm.valid_until}
                />
                <HaveAQuestion color={pageData.color} />
            </main>
            <Footer color={pageData.color} />
            <ModalForm />
        </div>
    );
}

export default FirstLevel;