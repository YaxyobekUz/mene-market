import React from 'react';
import FaqMainContent from './FaqMainContent';

const Faq = () => {
    return (
        <section className='pt-11 pb-[152px] max-640:pb-24 max-540:pb-14'>
            <div className="container">
                <h2 className="mb-6">Mene Market qulayliklari</h2>
                <FaqMainContent />
            </div>
        </section>
    )
};

export default Faq;