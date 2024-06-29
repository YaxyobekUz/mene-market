import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// antd
import { Tooltip } from "antd";

// data
import { imageBaseUrl } from "../data/data";

// axios
import axiosConfig from "../api/axios/axios";

// components
import NewsModal from "../components/NewsModal";
import DotsLoader from "../components/DotsLoader";

// helpers
import { errorNotification } from "../helpers/helpers";

// redux
import {
  setImageViewerModalData,
  setOpenImageViewerModal,
} from "../store/slices/imageViewerModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setNewsData } from "../store/slices/newsDataSlice";

// images
import info from "../assets/images/svg/info.svg";
import star from "../assets/images/svg/star.svg";
import crown from "../assets/images/svg/crown.svg";
import newsIcon from "../assets/images/svg/news.svg";
import donate from "../assets/images/svg/donate.svg";
import reload from "../assets/images/svg/reload.svg";
import profile from "../assets/images/other/user.jpg";
import message from "../assets/images/svg/message.svg";
import walletFill from "../assets/images/svg/wallet-fill.svg";
import profileFill from "../assets/images/svg/profile-fill.svg";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [newness, setNewness] = useState(null);
  const closeNewsModal = () => setOpenNewsModal(false);
  const newsData = useSelector((store) => store.newsData);
  const [openNewsModal, setOpenNewsModal] = useState(false);
  const { userData } = useSelector((store) => store.userData);

  // get news
  const getNews = () => {
    setLoader(true);

    // send a request
    axiosConfig
      .get("/News")
      .then((res) => {
        if (res.status === 200) {
          setNews(res.data.slice(0, 4));
          dispatch(setNewsData(res.data));
        }
      })
      .finally(() => setLoader(false));
  };

  // set news data
  useEffect(() => {
    if (newsData.data.length > 0) {
      setNews(newsData.data);
      setTimeout(() => setLoader(false), 200);
    } else {
      getNews();
    }
  }, []);

  // open user profile image modal
  const openImageViewerModal = () => {
    dispatch(
      setImageViewerModalData({
        images: [userData.image ? imageBaseUrl + userData.image : profile],
        alt: "user profile image",
      })
    );

    dispatch(setOpenImageViewerModal(true));
  };

  return (
    <>
      <div className="space-y-5">
        {/* content top */}
        <div className="grid grid-cols-2 gap-5 max-768:grid-cols-1 max-450:gap-4">
          {/* child 1 (user data) */}
          <div className="flex flex-col justify-between gap-6 bg-jellyfish bg-primary-black-800 bg-cover bg-center p-5 rounded-20 max-768:h-96 max-450:h-[392px] max-450:p-4">
            <div className="space-y-3">
              {/* user profile image */}
              <img
                alt="user profile image"
                title="user profile image"
                onClick={openImageViewerModal}
                src={userData.image ? imageBaseUrl + userData.image : profile}
                className="w-16 h-16 rounded-full bg-primary-gray-500 max-450:w-14 max-450:h-14"
              />

              {/* user name */}
              <h1 className="text-white text-bold-28 font-semibold capitalize line-clamp-1">
                {userData.firstName}{" "}
                {userData.lastName &&
                  userData.lastName !== "" &&
                  userData.lastName}
              </h1>

              {/* description */}
              <p className="text-regular-14 text-primary-gray-500">
                Xush kelibsiz!
              </p>
            </div>

            {/* user balance */}
            <div className="w-full bg-linear-gradient_black-800 p-5 rounded-xl max-450:p-4">
              <ul className="space-y-3">
                <li className="space-y-1 max-450:space-y-0">
                  <h3 className="text-medium-18 max-450:text-base max-450:font-normal">
                    Balans
                  </h3>
                  <p className="text-primary-gray-500 max-450:text-base">
                    0 so'm
                  </p>
                </li>

                <li className="space-y-1 max-450:space-y-0">
                  <h3 className="text-medium-18 max-450:text-base max-450:font-normal">
                    Taxminiy balans
                  </h3>
                  <p className="text-primary-gray-500 max-450:text-base">
                    0 so'm
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* child 2 (statistics) */}
          <section className="flex flex-col justify-between gap-5 bg-linear-gradient_black-800 p-5 rounded-20 max-1240:p-5 max-450:p-4">
            {/* section header */}
            <div className="flex-center-between">
              <h2 className="text-medium-18 max-450:text-center">
                Oqim statistikasi
              </h2>

              {/* info icon */}
              <Tooltip title="O'rtacha sotib olish mahsulotni sotib olganlar va oqim orqali kirganlarni hisobga olgan holatda hisoblanadi!">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="10"
                    cx="12"
                    cy="12"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 17V11"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    r="1"
                    cx="1"
                    cy="1"
                    fill="#fff"
                    transform="matrix(1 0 0 -1 11 9)"
                  />
                </svg>
              </Tooltip>
            </div>

            {/* circle */}
            <div className="flex-center justify-center relative shrink-0 w-40 h-40 max-1240:w-36 max-1240:h-36">
              <div className="flex-center flex-col gap-1 z-10  text-center">
                <span className="text-regular-14 text-primary-gray-500]">
                  O'rtacha
                </span>

                <span className="text-[50px] leading-none font-semibold text-white max-1240:text-4xl">
                  0.0
                </span>

                <span className="text-regular-14 text-primary-gray-500 max-1240:max-w-[100px]">
                  Sotib olish
                </span>
              </div>

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
            </div>

            {/* statistics */}
            <div className="w-full bg-linear-gradient_black-800 p-5 rounded-xl max-450:p-4">
              <ul className="space-y-3">
                <li className="space-y-1 max-450:space-y-0">
                  <h3 className="text-medium-18 max-450:text-base max-450:font-normal">
                    Sotib olganlar
                  </h3>
                  <p className="text-primary-gray-500 max-450:text-base">
                    0 kishi
                  </p>
                </li>

                <li className="space-y-1 max-450:space-y-0">
                  <h3 className="text-medium-18 max-450:text-base max-450:font-normal">
                    Havola orqali kirganlar
                  </h3>
                  <p className="text-primary-gray-500 max-450:text-base">
                    0 kishi
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* pages link */}
        <ul className="grid grid-cols-4 gap-5 max-860:grid-cols-3 max-640:grid-cols-2 max-440:gap-4">
          <li>
            <Link
              to="/admin/dashboard/appeals"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={message}
                alt="message icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Murojaatlar
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/competitions"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={star}
                alt="star icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Konkurslar
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/balance-history"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={walletFill}
                alt="wallet icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Balans tarixi
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/donation-box"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={donate}
                alt="donate icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Hayriya qutisi
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/about"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={info}
                alt="info icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Dastur haqida
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/advertising-posts"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={crown}
                alt="crown icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Reklama postlari
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/news"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={newsIcon}
                alt="news icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Barcha yangiliklar
              </h3>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard/profile"
              className="flex-center justify-center flex-col gap-3 min-h-[140px] bg-linear-gradient_black-800 rounded-20 p-1.5"
            >
              {/* img */}
              <img
                width={40}
                height={40}
                src={profileFill}
                alt="profile icon"
                className="w-10 h-10 max-450:w-8 max-450:h-8"
              />

              {/* title */}
              <h3 className="text-white text-medium-18 text-center max-450:text-base">
                Profil
              </h3>
            </Link>
          </li>
        </ul>

        {/* news section */}
        <section className="bg-linear-gradient_black-800 space-y-5 p-5 rounded-20 max-450:p-4 max-450:space-y-4">
          {/* section title */}
          <h2 className="text-medium-18 text-white max-450:text-base">
            So'nggi yangiliklar
          </h2>

          {/* news */}
          {!loader ? (
            news.length > 0 && (
              <ul className="space-y-4">
                {news.map((newness) => {
                  return (
                    <li
                      onClick={() => {
                        setNewness(newness);
                        setOpenNewsModal(true);
                      }}
                      key={newness.id}
                      className="flex-center gap-3 w-full bg-linear-gradient_black-800 p-4 rounded-2xl cursor-pointer"
                    >
                      {/* image */}
                      <img
                        width={96}
                        height={96}
                        alt="newness image"
                        src={imageBaseUrl + newness.imageFilePath}
                        className="w-24 h-24 shrink-0 aspect-square object-cover bg-primary-black-800 rounded-lg max-450:hidden"
                      />

                      {/* title, description */}
                      <div className="space-y-2">
                        {/* title */}
                        <h2 className="text-regular-16 line-clamp-2">
                          {newness.name}
                        </h2>

                        {/* description */}
                        <p className="text-regular-14 text-primary-gray-500 line-clamp-3">
                          {newness.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )
          ) : (
            <DotsLoader className="h-6 py-7" />
          )}

          {/* reload news data */}
          {!loader && news.length === 0 && (
            <div className="flex justify-center w-full">
              <button
                onClick={() => {
                  const isOnline = navigator.onLine;
                  if (isOnline) getNews();
                  else errorNotification("Internet aloqasi mavjud emas!");
                }}
                className="p-4"
              >
                <img
                  width={24}
                  height={24}
                  src={reload}
                  alt="reload icon"
                  className="w-6 h-6"
                />
              </button>
            </div>
          )}
        </section>
      </div>

      {/* news modal */}
      {openNewsModal && (
        <NewsModal newness={newness} closeModal={closeNewsModal} />
      )}
    </>
  );
};

export default Dashboard;
