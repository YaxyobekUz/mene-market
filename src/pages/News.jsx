import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
import { useDispatch, useSelector } from "react-redux";
import { setNewsData } from "../store/slices/newsDataSlice";

// images
import reload from "../assets/images/svg/reload.svg";
import arrowLeft from "../assets/images/svg/arrow-left.svg";

const News = () => {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [newness, setNewness] = useState(null);
  const closeNewsModal = () => setOpenNewsModal(false);
  const newsData = useSelector((store) => store.newsData);
  const [openNewsModal, setOpenNewsModal] = useState(false);

  // get news
  const getNews = () => {
    setLoader(true);

    // send a request
    axiosConfig
      .get("/News")
      .then((res) => {
        if (res.status === 200) {
          setNews(res.data);
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
        <h1>Barcha yangiliklar</h1>
      </div>

      {/* main */}
      <div className="w-full bg-linear-gradient_black-800 backdrop-blur-120 rounded-20 p-5 max-450:p-4 max-450:rounded-lg">
        <h2 className="mb-5 text-medium-18 text-primary-gray-50 max-450:mb-4">
          Yangiliklar
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
      </div>

      {/* news modal */}
      {openNewsModal && (
        <NewsModal newness={newness} closeModal={closeNewsModal} />
      )}
    </>
  );
};

export default News;
