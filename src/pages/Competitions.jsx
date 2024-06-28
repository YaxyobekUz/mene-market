import React from "react";
import { Link } from "react-router-dom";

// images
import crown from "../assets/images/svg/crown-icon.svg";
import arrowLeft from "../assets/images/svg/arrow-left.svg";
import arrowRight from "../assets/images/svg/arrow-right.svg";

const Competitions = () => {
  return (
    <>
      {/* page header */}
      <div className="admin-page-header">
        <Link to="/admin/dashboard">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            className="w-6 h-6"
            alt="arrow left icon"
          />
        </Link>

        {/* page title */}
        <h1>Konkurslar</h1>
      </div>

      {/* main */}
      <ul className="space-y-6">
        <li className="flex gap-6 bg-linear-gradient_black-800 backdrop-blur-120 rounded-20 p-6 max-1024:gap-5 max-1024:p-5 max-768:flex-col max-450:p-4 max-450:gap-4 max-375:p-4">
          <img
            width={440}
            height={248}
            src="https://t4.ftcdn.net/jpg/02/51/83/99/360_F_251839941_KgSySeO2fl7FLz1CFbjdv2l6HCqwdTCo.jpg"
            alt="competition image"
            className="w-[440px] h-[256px] bg-primary-black-800 rounded-lg object-cover object-center max-1124:w-80 max-768:w-full max-768:h-80 max-640:h-64 max-540:h-52 max-450:h-44 max-450:rounded-md max-375:h-40"
          />

          <div>
            <h3 className="text-2xl semibold mb-4 line-clamp-2 max-450:text-semibold-20 max-450:mb-2 max-375:text-medium-18">
              Elektron pichoq chaxi
            </h3>
            
            <p className="mb-2 text-primary-gray-500 font-normal max-375:text-base">
              29.11.2023 - 29.12.2023
            </p>

            <p className="max-w-lg text-regular-14 text-primary-gray-500 mb-4 line-clamp-3">
              Konkursda yutuqli o'rinlar 5 ta va umumiy mablag' 15,000,000 so'm.
              Konkurs g'oliblari kamida 500 ta maxsulot sotganlar ichidan
              olinadi. Konkursda yutuqli o'rinlar 5 ta va umumiy mablag'
              15,000,000 so'm.
            </p>

            <div className="flex gap-2 mb-3">
              <img
                width={24}
                height={24}
                src={crown}
                alt="crown icon"
                className="w-6 h-6"
              />
              <p className="text-regular-16">10 ta</p>
            </div>

            {/* link */}
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
    </>
  );
};

export default Competitions;
