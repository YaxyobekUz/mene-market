import React from "react";
import { Link } from "react-router-dom";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
import arrowRight from "../assets/images/svg/arrow-right.svg";
import crown from "../assets/images/svg/crown-icon.svg";
import market from "../assets/images/svg/market-icon.svg";
const Competitions = () => {
  return (
    <div>
      <div className="admin_page-header">
        <Link to="/admin">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            alt="arrow left icon image"
            className="w-6 h-6"
          />
        </Link>
        <h1>Konkurslar</h1>
      </div>

      <ul className="space-y-6">
        <li className="flex gap-6 bg-linear-gradient_black-800 backdrop-filter backdrop-blur-120 rounded-20 p-6">
          <img
            width={440}
            height={248}
            src="https://t4.ftcdn.net/jpg/02/51/83/99/360_F_251839941_KgSySeO2fl7FLz1CFbjdv2l6HCqwdTCo.jpg"
            alt="competition image"
            className="w-[440px] h-auto bg-primary-black-800 rounded-lg object-cover object-center"
          />

          <div className="">
            <h3 className="text-[29px] leading-8 font-semibold mb-4">
              Elektron pichoq chaxi
            </h3>
            <p className="text-primary-gray-500 mb-2">
              29.11.2023 - 29.12.2023
            </p>
            <p className="max-w-lg text-regular-14 text-primary-gray-500 mb-4 line-clamp-3">
              Konkursda yutuqli o'rinlar 5 ta va umumiy mablag' 15,000,000 so'm.
              Konkurs g'oliblari kamida 500 ta maxsulot sotganlar ichidan
              olinadi. Konkursda yutuqli o'rinlar 5 ta va umumiy mablag'
              15,000,000 so'm.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={crown}
                  alt="crown icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">10ta</p>
              </div>
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={market}
                  alt="market icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">Mene Market</p>
              </div>
            </div>
            <Link to="#" className="btn-primary_linear-blue rounded-full px-4">
              <span className="text-regular-14">Batafsil</span>
              <img
                width={24}
                height={24}
                src={arrowRight}
                alt="arrow right icon"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </li>

        <li className="flex gap-6 bg-linear-gradient_black-800 backdrop-filter backdrop-blur-120 rounded-20 p-6">
          <img
            width={440}
            height={248}
            src="https://t4.ftcdn.net/jpg/02/51/83/99/360_F_251839941_KgSySeO2fl7FLz1CFbjdv2l6HCqwdTCo.jpg"
            alt="competition image"
            className="w-[440px] h-auto bg-primary-black-800 rounded-lg object-cover object-center"
          />

          <div className="">
            <h3 className="text-[29px] leading-8 font-semibold mb-4">
              Elektron pichoq chaxi
            </h3>
            <p className="text-primary-gray-500 mb-2">
              29.11.2023 - 29.12.2023
            </p>
            <p className="max-w-lg text-regular-14 text-primary-gray-500 mb-4 line-clamp-3">
              Konkursda yutuqli o'rinlar 5 ta va umumiy mablag' 15,000,000 so'm.
              Konkurs g'oliblari kamida 500 ta maxsulot sotganlar ichidan
              olinadi. Konkursda yutuqli o'rinlar 5 ta va umumiy mablag'
              15,000,000 so'm.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={crown}
                  alt="crown icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">10ta</p>
              </div>
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={market}
                  alt="market icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">Mene Market</p>
              </div>
            </div>
            <Link to="#" className="btn-primary_linear-blue rounded-full px-4">
              <span className="text-regular-14">Batafsil</span>
              <img
                width={24}
                height={24}
                src={arrowRight}
                alt="arrow right icon"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </li>

        <li className="flex gap-6 bg-linear-gradient_black-800 backdrop-filter backdrop-blur-120 rounded-20 p-6">
          <img
            width={440}
            height={248}
            src="https://t4.ftcdn.net/jpg/02/51/83/99/360_F_251839941_KgSySeO2fl7FLz1CFbjdv2l6HCqwdTCo.jpg"
            alt="competition image"
            className="w-[440px] h-auto bg-primary-black-800 rounded-lg object-cover object-center"
          />

          <div className="">
            <h3 className="text-[29px] leading-8 font-semibold mb-4">
              Elektron pichoq chaxi
            </h3>
            <p className="text-primary-gray-500 mb-2">
              29.11.2023 - 29.12.2023
            </p>
            <p className="max-w-lg text-regular-14 text-primary-gray-500 mb-4 line-clamp-3">
              Konkursda yutuqli o'rinlar 5 ta va umumiy mablag' 15,000,000 so'm.
              Konkurs g'oliblari kamida 500 ta maxsulot sotganlar ichidan
              olinadi. Konkursda yutuqli o'rinlar 5 ta va umumiy mablag'
              15,000,000 so'm.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={crown}
                  alt="crown icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">10ta</p>
              </div>
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={market}
                  alt="market icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">Mene Market</p>
              </div>
            </div>
            <Link to="#" className="btn-primary_linear-blue rounded-full px-4">
              <span className="text-regular-14">Batafsil</span>
              <img
                width={24}
                height={24}
                src={arrowRight}
                alt="arrow right icon"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </li>

        <li className="flex gap-6 bg-linear-gradient_black-800 backdrop-filter backdrop-blur-120 rounded-20 p-6">
          <img
            width={440}
            height={248}
            src="https://t4.ftcdn.net/jpg/02/51/83/99/360_F_251839941_KgSySeO2fl7FLz1CFbjdv2l6HCqwdTCo.jpg"
            alt="competition image"
            className="w-[440px] h-auto bg-primary-black-800 rounded-lg object-cover object-center"
          />

          <div className="">
            <h3 className="text-[29px] leading-8 font-semibold mb-4">
              Elektron pichoq chaxi
            </h3>
            <p className="text-primary-gray-500 mb-2">
              29.11.2023 - 29.12.2023
            </p>
            <p className="max-w-lg text-regular-14 text-primary-gray-500 mb-4 line-clamp-3">
              Konkursda yutuqli o'rinlar 5 ta va umumiy mablag' 15,000,000 so'm.
              Konkurs g'oliblari kamida 500 ta maxsulot sotganlar ichidan
              olinadi. Konkursda yutuqli o'rinlar 5 ta va umumiy mablag'
              15,000,000 so'm.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={crown}
                  alt="crown icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">10ta</p>
              </div>
              <div className="flex gap-2">
                <img
                  width={24}
                  height={24}
                  src={market}
                  alt="market icon"
                  className="w-6 h-6"
                />
                <p className="text-regular-16">Mene Market</p>
              </div>
            </div>
            <Link to="#" className="btn-primary_linear-blue rounded-full px-4">
              <span className="text-regular-14">Batafsil</span>
              <img
                width={24}
                height={24}
                src={arrowRight}
                alt="arrow right icon"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Competitions;
