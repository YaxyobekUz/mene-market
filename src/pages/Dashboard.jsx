import React from "react";
import { Link } from "react-router-dom";

// images
import profile from "../assets/images/svg/profile.svg";
import contact from "../assets/images/svg/contact.svg";
import message from "../assets/images/svg/message.svg";
import question from "../assets/images/svg/question.svg";
import star from "../assets/images/svg/star.svg";
import walletFill from "../assets/images/svg/wallet-fill.svg";
import donate from "../assets/images/svg/donate.svg";
import info from "../assets/images/svg/info.svg";
import crown from "../assets/images/svg/crown.svg";

const Dashboard = () => {
  return (
    <div className="w-full space-y-6">
      {/* hero */}
      <div className="grid grid-cols-2 gap-6">
        {/* child 1 */}
        <div className="bg-jellyfish py-8 px-6 bg-cover bg-center rounded-20 bg-primary-black-800">
          <div className="space-y-2.5">
            {/* image */}
            <img
              onDrag={(e) => {
                console.log(e);
              }}
              src={profile}
              alt="Yaxyobek Xabibullayev"
              className="w-16 h-16 rounded-full bg-primary-gray-500"
            />
            <h1 className="text-white text-bold-28 font-semibold ">
              Yaxyobek Xabibullayev
            </h1>
            <p className="text-regular-14 text-primary-gray-500">
              Xush kelibsiz!
            </p>
          </div>
        </div>

        {/* child 2 */}
        <section className="bg-linear-gradient_black-800 py-8 px-6 rounded-20 space-y-11">
          <h2 className="text-medium-18 text-white">Oqim statistikasi</h2>
          <div className="flex-center justify-between">
            <ul className="space-y-4">
              <li className="bg-linear-gradient_black-800 max-w-[210px] w-full px-6 py-5 space-y-1.5 rounded-20">
                <h3 className="text-regular-14 text-primary-gray-500">
                  Sotib olganlar
                </h3>
                <p className="text-white">145 kishi</p>
              </li>
              <li className="bg-linear-gradient_black-800 max-w-[210px] w-full px-6 py-5 space-y-1.5 rounded-20">
                <h3 className="text-regular-14 text-primary-gray-500">
                  Havola orqali kirganlar
                </h3>
                <p className="text-white">1,465 kishi</p>
              </li>
            </ul>

            <div className="flex-center justify-center relative aspect-square w-52 h-52">
              <svg
                className="absolute w-full h-full aspect-square top-0 right-0 infinite-rotate-animation"
                width="208"
                height="208"
                viewBox="0 0 193 206"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M188.877 59.1477C192.111 57.4964 193.412 53.5237 191.558 50.4019C183.276 36.4583 171.801 24.6389 158.041 15.9396C142.425 6.06686 124.44 0.576164 105.973 0.0429122C87.5053 -0.490339 69.2343 3.95349 53.0745 12.9087C36.9147 21.8639 23.461 35.0008 14.1235 50.9427C4.78586 66.8847 -0.0919045 85.0447 0.00131101 103.52C0.0945265 121.995 5.15529 140.105 14.6533 155.951C24.1513 171.798 37.7368 184.799 53.9861 193.59C68.3041 201.337 84.2259 205.565 100.438 205.968C104.068 206.058 106.897 202.981 106.756 199.353C106.614 195.724 103.555 192.923 99.9265 192.799C86.0737 192.325 72.4862 188.65 60.243 182.026C46.068 174.357 34.2168 163.016 25.9313 149.192C17.6458 135.368 13.2311 119.57 13.1498 103.453C13.0684 87.3368 17.3235 71.495 25.4691 57.5882C33.6147 43.6814 45.3509 32.2215 59.4478 24.4094C73.5447 16.5974 89.4833 12.7209 105.593 13.1861C121.703 13.6512 137.392 18.441 151.014 27.0534C162.781 34.4921 172.631 44.546 179.821 56.3968C181.704 59.5011 185.643 60.7989 188.877 59.1477Z"
                  fill="url(#paint0_linear_124_14727)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_124_14727"
                    x1="103"
                    y1="0"
                    x2="103"
                    y2="190"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05CD99" />
                    <stop offset="1" stopColor="#05CD99" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex-center flex-col text-center gap-1">
                <span className="text-regular-14 text-primary-gray-500">
                  O'rtacha
                </span>
                <span className="text-[50px] leading-none font-bold text-white">
                  9.3
                </span>
                <span className="text-regular-14 text-primary-gray-500">
                  Sotib olish ehtimoli
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ul className="grid grid-cols-4 gap-6">
        <li>
          <Link
            to="/admin/regular-customers"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={contact}
              alt="contact icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Doimiy mijozlar</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/appeals"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={message}
              alt="message icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Murojaatlar</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/requests"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={question}
              alt="question icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">So'rovlar (0)</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/competitions"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={star}
              alt="star icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Konkurslar</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/balance-history"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={walletFill}
              alt="wallet icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Balans tarixi</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/donation-box"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={donate}
              alt="donate icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Hayriya qutisi</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/about"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={info}
              alt="info icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Dastur haqida</h3>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/advertising-posts"
            className="flex-center justify-center flex-col bg-linear-gradient_black-800 rounded-20 p-6"
          >
            <img
              width={40}
              height={40}
              src={crown}
              alt="crown icon image"
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-white text-medium-18">Reklama postlari</h3>
          </Link>
        </li>
      </ul>

      <section className="p-6 rounded-20 bg-linear-gradient_black-800">
        {/* headrer */}
        <div className="flex-center-between mb-6">
          <h2 className="text-medium-18 text-white">So'nggi yangiliklar</h2>
          <Link to="/admin/news" className="text-regular-13">
            Barchasini ko'rsatish
          </Link>
        </div>

        {/* news */}
        <ul className="dashboard_news">
          <li className="dashboard_news_item">
            <h3 className="dashboard_news_item_title">Yangilik nomi</h3>
            <p className="dashboard_news_item_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              expedita dicta, dolores doloribus qui, nemo labore culpa commodi
              totam harum, adipisci omnis. At ducimus provident totam,
              architecto non autem ratione!
            </p>
          </li>
          <li className="dashboard_news_item">
            <h3 className="dashboard_news_item_title">Yangilik nomi</h3>
            <p className="dashboard_news_item_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              expedita dicta, dolores doloribus qui, nemo labore culpa commodi
              totam harum, adipisci omnis. At ducimus provident totam,
              architecto non autem ratione!
            </p>
          </li>
          <li className="dashboard_news_item">
            <h3 className="dashboard_news_item_title">Yangilik nomi</h3>
            <p className="dashboard_news_item_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              expedita dicta, dolores doloribus qui, nemo labore culpa commodi
              totam harum, adipisci omnis. At ducimus provident totam,
              architecto non autem ratione!
            </p>
          </li>
          <li className="dashboard_news_item">
            <h3 className="dashboard_news_item_title">Yangilik nomi</h3>
            <p className="dashboard_news_item_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              expedita dicta, dolores doloribus qui, nemo labore culpa commodi
              totam harum, adipisci omnis. At ducimus provident totam,
              architecto non autem ratione!
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;