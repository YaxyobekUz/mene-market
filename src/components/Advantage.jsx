import React from "react";

// images
import truckIcon from "../assets/images/svg/truck-icon.svg";
import paymentCardIcon from "../assets/images/svg/payment-card-icon.svg";
import messageQuestionIcon from "../assets/images/svg/message-question-icon.svg";

const Advantage = () => {
  return (
    <ul className="grid-4 gap-6">
      {/* 0 */}
      <li className="flex-start flex-col gap-3 relative overflow-hidden min-h-[252px] bg-primary-blue-50/30 p-6 rounded-20 text-regular-13 group">
        {/* image, image wrapper  */}
        <div className="bg-linear-gradient_blue-500 p-3 rounded-2xl">
          <img
            width={24}
            height={24}
            src={truckIcon}
            alt="truck icon"
            className="w-6 h-6"
          />
        </div>

        {/* title */}
        <h3 className="text-medium-18">Tezkor yetkazib berish xizmati</h3>

        {/* description */}
        <p className="text-primary-gray-500">
          Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida
          yetqazib beriladi.
        </p>

        {/* shape */}
        <div className="absolute -z-10 top-7 left-7 w-10 h-10 bg-primary-blue-50 rounded-full transition-transform ease-linear duration-300 group-hover:scale-[20]"></div>
      </li>

      {/* 1 */}
      <li className="flex-start flex-col gap-3 relative overflow-hidden min-h-[252px] bg-primary-blue-50/30 p-6 rounded-20 text-regular-13 group">
        {/* image, image wrapper  */}
        <div className="bg-linear-gradient_blue-500 p-3 rounded-2xl">
          <img
            width={24}
            height={24}
            src={paymentCardIcon}
            alt="payment card icon"
            className="w-6 h-6"
          />
        </div>

        {/* title */}
        <h3 className="text-medium-18">
          To'lovni istalgan usulda amalga oshirish
        </h3>

        {/* description */}
        <p className="text-primary-gray-500">
          Buyurtmani oldindan click, payme yoki buyurtmani qo'lingizga
          olganingizdan keyin amalga oshiring.
        </p>

        {/* shape */}
        <div className="absolute -z-10 top-7 left-7 w-10 h-10 bg-primary-blue-50 rounded-full transition-transform ease-linear duration-300 group-hover:scale-[20]"></div>
      </li>

      {/* 2 */}
      <li className="flex-start flex-col gap-3 relative overflow-hidden min-h-[252px] bg-primary-blue-50/30 p-6 rounded-20 text-regular-13 group">
        {/* image, image wrapper  */}
        <div className="bg-linear-gradient_blue-500 p-3 rounded-2xl">
          <img
            width={24}
            height={24}
            src={messageQuestionIcon}
            alt="message question icon"
            className="w-6 h-6"
          />
        </div>

        {/* title */}
        <h3 className="text-medium-18">Bepul qo'llab-quvvatlash markazi</h3>

        {/* description */}
        <p className="text-primary-gray-500">
          Dam olish kunlarisiz qo'llab quvvatlash bo'limi mavjud.
        </p>

        {/* link */}
        <a href="tel:+998998765432" target="_blank">
          +998 (99)-876-5432
        </a>

        {/* shape */}
        <div className="absolute -z-10 top-7 left-7 w-10 h-10 bg-primary-blue-50 rounded-full transition-transform ease-linear duration-300 group-hover:scale-[20]"></div>
      </li>

      {/* 3 */}
      <li className="flex-start flex-col gap-3 relative overflow-hidden min-h-[252px] bg-primary-blue-50/30 p-6 rounded-20 text-regular-13 group">
        {/* image, image wrapper  */}
        <div className="bg-linear-gradient_blue-500 p-3 rounded-2xl">
          <img
            width={24}
            height={24}
            src={truckIcon}
            alt="truck icon"
            className="w-6 h-6"
          />
        </div>

        {/* title */}
        <h3 className="text-medium-18">Mijozlarni rag'batlantirish tizimi</h3>

        {/* description */}
        <p className="text-primary-gray-500">
          Doimiy mijozlarimiz uchun sovg'alar va bonuslar taqdim etib boramiz.
        </p>

        {/* shape */}
        <div className="absolute -z-10 top-7 left-7 w-10 h-10 bg-primary-blue-50 rounded-full transition-transform ease-linear duration-300 group-hover:scale-[20]"></div>
      </li>
    </ul>
  );
};

export default Advantage;
