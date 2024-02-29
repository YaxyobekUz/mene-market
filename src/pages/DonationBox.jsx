import React from "react";
import { Link } from "react-router-dom";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
const DonationBox = () => {
  return (
    <div>
      <div className="admin_page-header">
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
      <div className="admin_page-body">
        <div className="flex-center-between mb-6">
          <h2 className="text-medium-18">O'tkazmalar</h2>
          <p>126 320 000 so’m</p>
        </div>

        <ul className="space-y-6 mb-6">
          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>

          <li className="flex-center-between gap-5">
            <div>
              <h2 className="text-regular-16">Maxfiy foydalanuvchi</h2>
              <p className="text-regular-14 text-[#A0AEC0]">#17365</p>
            </div>
            <p className="text-regular-14 text-[#C4C5C4]">15 000 so’m</p>
          </li>
        </ul>

        <div className="flex-start gap-2 border border-white rounded-lg p-4">
          <svg
          className="w-4 h-4 shrink-0"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00065 1.33333C4.32732 1.33333 1.33398 4.32666 1.33398 8C1.33398 11.6733 4.32732 14.6667 8.00065 14.6667C11.674 14.6667 14.6673 11.6733 14.6673 8C14.6673 4.32666 11.674 1.33333 8.00065 1.33333ZM7.50065 5.33333C7.50065 5.05999 7.72732 4.83333 8.00065 4.83333C8.27398 4.83333 8.50065 5.05999 8.50065 5.33333V8.66666C8.50065 8.94 8.27398 9.16666 8.00065 9.16666C7.72732 9.16666 7.50065 8.94 7.50065 8.66666V5.33333ZM8.61398 10.92C8.58065 11.0067 8.53398 11.0733 8.47398 11.14C8.40732 11.2 8.33398 11.2467 8.25398 11.28C8.17398 11.3133 8.08732 11.3333 8.00065 11.3333C7.91398 11.3333 7.82732 11.3133 7.74732 11.28C7.66732 11.2467 7.59398 11.2 7.52732 11.14C7.46732 11.0733 7.42065 11.0067 7.38732 10.92C7.35398 10.84 7.33398 10.7533 7.33398 10.6667C7.33398 10.58 7.35398 10.4933 7.38732 10.4133C7.42065 10.3333 7.46732 10.26 7.52732 10.1933C7.59398 10.1333 7.66732 10.0867 7.74732 10.0533C7.90732 9.98666 8.09398 9.98666 8.25398 10.0533C8.33398 10.0867 8.40732 10.1333 8.47398 10.1933C8.53398 10.26 8.58065 10.3333 8.61398 10.4133C8.64732 10.4933 8.66732 10.58 8.66732 10.6667C8.66732 10.7533 8.64732 10.84 8.61398 10.92Z"
              fill="white"
            />
          </svg>

          <p className="text-regular-14">
            Assalomu aleykum, hurmatli jamoamiz adminlari.
            <br />
            <br />
            Ushbu sahifada siz yani 100k.uz saytiadminlari yordamida hayriya
            ishlariuchun toplangan mablaglarni kuzatishingiz mumkin. Sahifada
            hozircha umumiy toplangan mablagniva hayriya funksiyasi yoqilgan
            oqimlarroyhatini korishingiz mumkin. <br />
            <br />
            Yig’ilgan mablag’ bolalar yoki qariyalar uylarihisob raqamiga yoki
            ogir kasalga uchraganlekin davolanishga sharoiti yoq
            vatandoshlarimizkarta raqamlariga yonaltiriladi.Mablagni topshirish
            vaqtida 100k.uz saytidaishlovchi istalgan admin ishtirok etishi
            mumkin.
            <br />
            <br />
            Ushbu sahifa keyinchalik yangiliklar ko'rinishidabarcha hayriyalar
            haqida malumotlar chop etiladi.Eslatma: Hayriya qutisiga mablag
            ajratishuchun Market bolimiga tashrif buyuring va oqim
            yaratishoynasida hayriya summasini kiriting va tizim aynan oshaoqim
            har bir sotilgan buyurtmasidan kiritilganhayriya summasi ushlab
            qoladi.
            <br />
            <br />
            Hayriya dasturida ishtirok etmagan bo'lsangizalbatta siz ham
            ishtirok etib hissangizni qoshing,hattoki 500 so'm ham kopchilik
            yordami kimnidirhayotini saqlab qolishi yoki yahshilikka
            ozgartirishi mumkin.Birgalikda biz katta kuchmiz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
