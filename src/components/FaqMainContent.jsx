import React from 'react';

// images
import truckIcon from '../assets/images/svg/truck-icon.svg';
import paymentCardIcon from '../assets/images/svg/payment-card-icon.svg';
import messageQuestionIcon from '../assets/images/svg/message-question-icon.svg';

const FaqMainContent = () => {
    return (
        <ul className='faq_list'>
            <li className="faq_list_item">
                <div className="faq_list_item-img_wrapper">
                    <img width={24} height={24} src={truckIcon} alt="truck icon" className="faq_list_item-img" />
                </div>
                <h3 className="faq_list_item-title">Tezkor yetkazib berish xizmati</h3>
                <p>Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi.</p>
            </li>

            <li className="faq_list_item">
                <div className="faq_list_item-img_wrapper">
                    <img width={24} height={24} src={paymentCardIcon} alt="payment card icon" className="faq_list_item-img" />
                </div>
                <h3 className="faq_list_item-title">To'lovni istalgan usulda amalga oshirish</h3>
                <p>Buyurtmani oldindan click, payme yoki buyurtmani qo'lingizga olganingizdan keyin amalga oshiring.</p>
            </li>

            <li className="faq_list_item">
                <div className="faq_list_item-img_wrapper">
                    <img width={24} height={24} src={messageQuestionIcon} alt="message question icon" className="faq_list_item-img" />
                </div>
                <h3 className="faq_list_item-title">Bepul qo'llab-quvvatlash markazi</h3>
                <p>Dam olish kunlarisiz qo'llab quvvatlash bo'limi mavjud.
                </p>
                <a href="tel:+998998765432" target='_blank'>+998 99 876 54 32</a>
            </li>

            <li className="faq_list_item">
                <div className="faq_list_item-img_wrapper">
                    <img width={24} height={24} src={truckIcon} alt="truck icon" className="faq_list_item-img" />
                </div>
                <h3 className="faq_list_item-title">Mijozlarni rag'batlantirish tizimi</h3>
                <p>Doimiy mijozlarimiz uchun sovg'alar va bonuslar taqdim etib boramiz.</p>
            </li>
        </ul>
    )
};

export default FaqMainContent;