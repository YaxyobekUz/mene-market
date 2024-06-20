import React from "react";
import { Link } from "react-router-dom";

// antd
import "../css/antd.css";
import { Dropdown } from "antd";

// redux
import { useSelector } from "react-redux";

// components
import CopyBtn from "../components/CopyBtn";

// images
import trash from "../assets/images/svg/trash.svg";
import eyeIcon from "../assets/images/svg/eye-white.svg";
import dotsIcon from "../assets/images/svg/dots-vertical.svg";
import searchIcon from "../assets/images/svg/search-icon-white.svg";
import statisticsIcon from "../assets/images/svg/statistics-solid.svg";

const Flow = () => {
  const userData = useSelector((store) => store.userData);
  return (
    <div className="admin-page-body space-y-7">
      {/* page header */}
      <div className="flex-center-between gap-5 max-640:flex-col max-640:items-start">
        <h1 className="text-medium-18">Oqim</h1>

        <form
          title="search"
          aria-label="search"
          className="admin-page-search-input-wrapper"
        >
          <input
            type="search"
            name="search"
            placeholder="Qidirish"
            className="admin_page-body_input"
          />

          {/* submit btn */}
          <button title="submit" aria-label="search form submit button">
            <img
              width={24}
              height={24}
              src={searchIcon}
              alt="search icon"
              className="w-6 h-6"
            />
          </button>
        </form>
      </div>

      {/* page body (main content) */}
      <section className="w-full space-y-5">
        <h2 className="text-lg font-medium text-primary-gray-500">Havolalar</h2>

        {/* divider */}
        <div className="divider"></div>

        {/* offer links list */}
        <ul>
          {userData.offerLinksData.map((offerLink) => {
            return (
              <li
                key={offerLink.offerLinkId}
                className="flex-center-between gap-4 py-3.5 border-b border-primary-gray-500 last:border-b-0 max-450:gap-3"
              >
                {/* offer link title */}
                <h3 className="grow text-regular-16 line-clamp-1">
                  {offerLink.name} Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Ipsam perspiciatis hic quam cumque atque
                  eum, neque sit nobis inventore aperiam saepe? Impedit ipsam
                  amet totam, minus culpa dolore voluptates laudantium.
                </h3>

                {/* content actions */}
                <div className="flex-center gap-5 shrink-0 max-640:gap-4 max-450:gap-3">
                  {/* copy btn */}
                  <CopyBtn
                    darkTheme={true}
                    className="flex-center gap-2 max-1240:hidden"
                    text={
                      "https://mene-market.netlify.app/flow/product/" +
                      offerLink.offerLinkId
                    }
                  >
                    <span className="text-regular-16">
                      Havoladan buferga nusxa olish
                    </span>
                  </CopyBtn>

                  {/* product link */}
                  <Link
                    className="flex-center gap-2 max-768:hidden"
                    to={"/products/product/" + offerLink.productId}
                  >
                    <img
                      src={eyeIcon}
                      width={24}
                      height={24}
                      alt="product link icon"
                      className="w-6 h-6"
                    />

                    <span className="text-regular-16">Mahsulotni ko'rish</span>
                  </Link>

                  {/* statistics link */}
                  <Link
                    className="flex-center gap-2 max-540:hidden"
                    to={"/admin/statistics/flow/" + offerLink.offerLinkId}
                  >
                    <img
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      src={statisticsIcon}
                      alt="statistics icon"
                    />

                    <span className="text-regular-16">Statistika</span>
                  </Link>

                  {/* delete offer link btn */}
                  <button
                    title="delete link"
                    aria-label="delete button"
                    className="btn-danger p-1.5"
                  >
                    <img
                      width={24}
                      height={24}
                      src={trash}
                      alt="delete icon"
                      className="w-6 h-6"
                    />
                  </button>

                  {/* responsive mobile kebab btn */}
                  <Dropdown
                    trigger={["click"]}
                    className="hidden max-1240:block"
                    menu={{
                      items: [
                        {
                          key: 0,
                          label: (
                            <CopyBtn
                              timeout={0}
                              darkTheme={true}
                              className="flex-center gap-2 p-2"
                              notification="Havola buferga nusxa olindi!"
                              text={
                                "https://mene-market.netlify.app/flow/product/" +
                                offerLink.offerLinkId
                              }
                            >
                              <span className="text-regular-16">
                                Havoldan buferga nusxa olish
                              </span>
                            </CopyBtn>
                          ),
                        },
                        {
                          key: 1,
                          label: (
                            <Link
                              className="hidden gap-2 p-2 max-768:flex-center"
                              to={"/products/product/" + offerLink.productId}
                            >
                              <img
                                src={eyeIcon}
                                width={24}
                                height={24}
                                alt="product link icon"
                                className="w-6 h-6"
                              />

                              <span className="text-regular-16">
                                Mahsulotni ko'rish
                              </span>
                            </Link>
                          ),
                        },
                        {
                          key: 3,
                          label: (
                            <Link
                              className="hidden gap-2 p-2 max-540:flex-center"
                              to={
                                "/admin/statistics/flow/" +
                                offerLink.offerLinkId
                              }
                            >
                              <img
                                width={24}
                                height={24}
                                className="w-6 h-6"
                                src={statisticsIcon}
                                alt="statistics icon"
                              />

                              <span className="text-regular-16">
                                Statistika
                              </span>
                            </Link>
                          ),
                        },
                      ],
                    }}
                  >
                    <button className="p-1.5 rounded-full transition-colors duration-300 active:bg-white/20">
                      <img
                        width={24}
                        height={24}
                        src={dotsIcon}
                        className="w-6 h-6"
                        alt="dots vertical icon"
                      />
                    </button>
                  </Dropdown>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Flow;
