import React from "react";
import { Link } from "react-router-dom";

// helpers
import { formatNumber } from "../helpers/helpers";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";

const DonationBox = () => {
  return (
    <>
      {/* page header */}
      <div className="admin-page-header">
        <Link to="/admin/dashboard">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            alt="arrow left icon image"
            className="w-6 h-6"
          />
        </Link>
        <h1>Hayriya Qutisi</h1>
      </div>

      {/* main */}
      <div className="admin-page-body">
        {/* content header */}
        <div className="flex-center-between mb-6 max-1024:mb-6 max-450:mb-4">
          <h2 className="text-medium-18 max-450:text-base">O'tkazmalar</h2>

          {/* donation box value */}
          <p className="max-450:text-base">{formatNumber(0)} so'm</p>
        </div>

        {/* donation box users list  */}
        <ul className="space-y-6 mb-6">
          <li className="flex-center-between gap-5">
            <div className="space-y-3">
              <h3 className="text-regular-16 line-clamp-1">
                <span>Foydalanuvchi </span>
                {/* user id */}
                <span className="text-primary-gray-500 font-normal">
                  #80b41b91-d67c-49cb-9119-16b647dea128
                </span>
              </h3>

              {/* item id */}
              <p className="text-regular-14 text-[#A0AEC0]">
                #832b41b91-d67c-49cb-9119-16b647dea128
              </p>
            </div>

            {/* donation price */}
            <p className="text-regular-14 text-[#C4C5C4] whitespace-nowrap">
              {formatNumber(125000)} so'm
            </p>
          </li>
        </ul>

        {/* information */}
        <div className="flex-start gap-2 border border-white rounded-lg p-4">
          {/* info icon */}
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className="w-4 h-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00065 1.33333C4.32732 1.33333 1.33398 4.32666 1.33398 8C1.33398 11.6733 4.32732 14.6667 8.00065 14.6667C11.674 14.6667 14.6673 11.6733 14.6673 8C14.6673 4.32666 11.674 1.33333 8.00065 1.33333ZM7.50065 5.33333C7.50065 5.05999 7.72732 4.83333 8.00065 4.83333C8.27398 4.83333 8.50065 5.05999 8.50065 5.33333V8.66666C8.50065 8.94 8.27398 9.16666 8.00065 9.16666C7.72732 9.16666 7.50065 8.94 7.50065 8.66666V5.33333ZM8.61398 10.92C8.58065 11.0067 8.53398 11.0733 8.47398 11.14C8.40732 11.2 8.33398 11.2467 8.25398 11.28C8.17398 11.3133 8.08732 11.3333 8.00065 11.3333C7.91398 11.3333 7.82732 11.3133 7.74732 11.28C7.66732 11.2467 7.59398 11.2 7.52732 11.14C7.46732 11.0733 7.42065 11.0067 7.38732 10.92C7.35398 10.84 7.33398 10.7533 7.33398 10.6667C7.33398 10.58 7.35398 10.4933 7.38732 10.4133C7.42065 10.3333 7.46732 10.26 7.52732 10.1933C7.59398 10.1333 7.66732 10.0867 7.74732 10.0533C7.90732 9.98666 8.09398 9.98666 8.25398 10.0533C8.33398 10.0867 8.40732 10.1333 8.47398 10.1933C8.53398 10.26 8.58065 10.3333 8.61398 10.4133C8.64732 10.4933 8.66732 10.58 8.66732 10.6667C8.66732 10.7533 8.64732 10.84 8.61398 10.92Z"
              fill="white"
            />
          </svg>

          {/* description */}
          <div className="text-regular-14 space-y-3.5">
            <p>Assalomu alaykum, hurmatli jamoamiz administratorlari.</p>
            <p>
              Ushbu sahifada hayriya ishlari uchun to'plangan mablag'larni
              kuzatishingiz mumkin. Sahifada hozircha umumiy to'plangan
              mablag'ni va hayriya funksiyasi yoqilgan oqimlar ro'yxatini
              ko'rishingiz mumkin.
            </p>
            <p>
              Yig'ilgan mablag' bolalar yoki qariyalar uylari hisob raqamiga
              yoki og'ir kasallikka uchragan lekin davolanishga sharoiti yo'q
              bo'lgan vatandoshlarimiz karta raqamlariga yo'naltiriladi.
              Mablag'ni topshirish vaqtida mene-market.uz saytida ish olib
              boruvchi istalgan administrator ishtirok etishi mumkin.
            </p>
            <p>
              Ushbu sahifa keyinchalik yangiliklar ko'rinishidabarcha hayriyalar
              haqida malumotlar chop etiladi.
            </p>
            <p>
              Eslatma: Hayriya qutisiga mablag' ajratish uchun Market sahifasiga
              tashrif buyuring va oqim yaratish oynasida hayriya summasini
              kiriting va tizim aynan shu oqim sotilgan har bir buyurtmasidan
              kiritilgan hayriya summasini ushlab qoladi.
            </p>
            <p>
              Hayriya dasturida ishtirok etmagan bo'lsangiz albatta siz ham
              ishtirok etib hissangizni qoshing, hattoki 500 so'm ham ko'pchilik
              yordami kimningdir hayotini saqlab qolishi yoki yaxshilikka
              o'zgartirishi mumkin.
              <strong className="inline font-semibold"> Biz birgalikda katta kuchmiz!</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationBox;
