import React, { useState } from "react";
import { Link } from "react-router-dom";

// helpers
import {
  search,
  errorNotification,
  successNotification,
} from "../helpers/helpers";

// antd
import "../css/antd.css";
import { Dropdown } from "antd";

// axios
import axiosConfig from "../api/axios/axios";

// components
import CopyBtn from "../components/CopyBtn";
import EmptyData from "../components/EmptyData";
import SearchForm from "../components/SearchForm";
import ConfirmationModal from "../components/ConfirmationModal";

// redux
import { useDispatch, useSelector } from "react-redux";
import { deleteUserOfferLinkData } from "../store/slices/userDataSlice";

// images
import trash from "../assets/images/svg/trash.svg";
import eyeIcon from "../assets/images/svg/eye-white.svg";
import dotsIcon from "../assets/images/svg/dots-vertical.svg";
import statisticsIcon from "../assets/images/svg/statistics-solid.svg";

const Flow = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [offerLink, setOfferLink] = useState(null);
  const userData = useSelector((store) => store.userData);
  const offerLinksData = userData.offerLinksData;
  const [offerLinks, setOfferLinks] = useState(offerLinksData);
  const [openDeleteOfferLinkModal, setOpenDeleteOfferLinkModal] =
    useState(false);

  // delete offer link modal
  const closeDeleteOfferLinkModal = () => {
    if (!loader) {
      setOfferLink(null);
      setOpenDeleteOfferLinkModal(false);
    }
  };

  // search offer links
  const searchOfferLinks = (value) => {
    if (value.length > 0) {
      const searchedOfferLinks = search(offerLinksData, "name", value);
      setOfferLinks(searchedOfferLinks);
    } else if (
      value.length === 0 &&
      offerLinks.length !== offerLinksData.length
    ) {
      setOfferLinks(offerLinksData);
    }
  };

  // delete offer link
  const deleteOfferLink = () => {
    setLoader(true);
    if (!loader) {
      axiosConfig
        .delete("/OfferLink?id=" + offerLink.offerLinkId)
        .then((res) => {
          if (res.status === 200) {
            // delete offer link data
            dispatch(deleteUserOfferLinkData(res.data.offerLinkId));

            const findOfferLink = offerLinks.find(
              (offerLink) => offerLink.offerLinkId === res.data.offerLinkId
            );

            if (findOfferLink) {
              setOfferLinks(
                offerLinks.filter(
                  (offerLink) => offerLink.offerLinkId !== res.data.offerLinkId
                )
              );
            }

            // close modal
            setOfferLink(null);
            setOpenDeleteOfferLinkModal(false);

            // notification
            successNotification("Oqim muvaffaqiyatli o'chirildi");
          } else errorNotification();
        })
        .catch(() => errorNotification.offline())
        .finally(() => setLoader(false));
    }
  };

  return (
    <>
      {/* page content */}
      <div className="admin-page-body space-y-7 px-0">
        {/* page header */}
        <div className="container">
          <div className="flex-center-between gap-5 max-640:flex-col max-640:items-start">
            <h1 className="text-medium-18">Oqim</h1>

            {/* search form */}
            <SearchForm
              onChange={searchOfferLinks}
              className="max-w-md max-640:max-w-full"
            />
          </div>
        </div>

        {/* page body (main content) */}
        <section className="w-full space-y-5">
          <div className="container space-y-5">
            <h2 className="text-lg font-medium text-primary-gray-500">
              Havolalar ({offerLinksData.length})
            </h2>

            {/* divider */}
            <div className="divider"></div>
          </div>

          {/* offer links list */}
          {offerLinks.length > 0 ? (
            <ul>
              {offerLinks.map((offerLink) => {
                return (
                  <li
                    key={offerLink.offerLinkId}
                    className="flex-center-between gap-4 py-3.5 px-5 transition-colors even:bg-white/5 hover:bg-white/10 max-450:px-4"
                  >
                    {/* offer link title */}
                    <h3 className="grow text-regular-16 line-clamp-1">
                      {offerLink.name}
                    </h3>

                    {/* content actions */}
                    <div className="flex-center gap-5 shrink-0 max-640:gap-4 max-450:gap-3">
                      {/* copy btn */}
                      <CopyBtn
                        darkTheme={true}
                        className="flex-center gap-2 max-1240:hidden"
                        text={
                          "https://mene-market.netlify.app/flow/" +
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

                        <span className="text-regular-16">
                          Mahsulotni ko'rish
                        </span>
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
                        onClick={() => {
                          setOfferLink(offerLink);
                          setOpenDeleteOfferLinkModal(true);
                        }}
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
                                  notification="Havoladan buferga nusxa olindi"
                                  text={
                                    "https://mene-market.netlify.app/flow/" +
                                    offerLink.offerLinkId
                                  }
                                >
                                  <span className="text-regular-16">
                                    Havoladan buferga nusxa olish
                                  </span>
                                </CopyBtn>
                              ),
                            },
                            {
                              key: 1,
                              label: (
                                <Link
                                  className="hidden gap-2 p-2 max-768:flex-center"
                                  to={
                                    "/products/product/" + offerLink.productId
                                  }
                                >
                                  <img
                                    width={24}
                                    height={24}
                                    src={eyeIcon}
                                    className="w-6 h-6"
                                    alt="product link icon"
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
          ) : offerLinksData.length > 0 ? (
            <EmptyData
              contentSmall={true}
              className="container"
              title="Hech qanday oqim topilmadi!"
              description="Qidiruv natijasiga ko'ra hech qanday oqim topilmadi."
            />
          ) : (
            <EmptyData
              contentSmall={true}
              className="container space-y-2"
              title="Hech qanday oqim mavjud emas"
              description="Ushbu sahifada hech qanday oqim mavjud emas."
            >
              <p className="text-base font-normal opacity-80">
                Siz hali hech qanday oqim yaratmadingiz. Oqim yaratmoqchi
                bo'lsangiz{" "}
                <Link
                  to="/admin/market"
                  className="text-primary-skyblue-500 font-medium underline"
                >
                  Market
                </Link>{" "}
                sahifasiga tashrif buyuring!
              </p>
            </EmptyData>
          )}
        </section>
      </div>

      {/* delete offer link modal */}
      {openDeleteOfferLinkModal && (
        <ConfirmationModal
          loader={loader}
          title="Oqimni o'chirish"
          submitBtnText="O'chirish"
          onSubmit={deleteOfferLink}
          closeModal={closeDeleteOfferLinkModal}
        >
          <div className="flex items-start flex-wrap gap-x-1.5 gap-y-1">
            <span>Haqiqatdan ham ushbu</span>
            <span className="font-semibold line-clamp-1">
              "{offerLink.name}"
            </span>
            <span>nomli</span>
            <span>oqimni</span>
            <span>o'chirmoqchimisiz?</span>
          </div>
        </ConfirmationModal>
      )}
    </>
  );
};

export default Flow;
