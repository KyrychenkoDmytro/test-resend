'use client';
import styles from './FourthLevel.module.scss';
import Footer from '@/components/Footer';
import EducationProcess from '../PageComponents/EducationProcess';
import PriceAndRegistrationForm from '../PageComponents/EducationProcess/PriceAndRegistrationForm';
import HeaderPageSection from '../PageComponents/HeaderPageSection';
import Note from '../PageComponents/Note';
import PageProgram from '../PageComponents/PageProgram';
import HaveAQuestion from '@/components/HaveAQuestion';
import page4Data from './page4Data.json';
import ModalForm from '@/components/ModalForm';

const FourthLevel = () => {
    const pageData = page4Data;

    return (
        <div className={styles.root}>
            <HeaderPageSection color={pageData.color} header={pageData.header} />
            <main>
                <Note color={pageData.color} fill1={pageData.note.fill1} fill2={pageData.note.fill2} text={pageData.note.text} />
                <PageProgram color={pageData.color} blocks={pageData.program.blocks} stroke={pageData.program.stroke} />
                <EducationProcess color={pageData.color} blocks={pageData.educationProcess.blocks} />
                <PriceAndRegistrationForm
                    color={pageData.color}
                    price={pageData.priceAndRegistrationForm.price}
                    valid_until={pageData.priceAndRegistrationForm.valid_until}
                    additional_information={pageData.priceAndRegistrationForm.additional_information}
                />
                <HaveAQuestion color={pageData.color} />
            </main>
            <Footer color={pageData.color} />
            <ModalForm />
        </div>
    );
}

export default FourthLevel;