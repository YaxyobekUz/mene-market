import React, { useState } from "react";
import { Link } from "react-router-dom";

// helpers
import {
  formatDate,
  formatTime,
  getElement,
  errorNotification,
  successNotification,
  checkInputValueByLength,
} from "../helpers/helpers";

// axios
import axiosConfig from "../api/axios/axios";

// components
import CopyBtn from "../components/CopyBtn";
import EmptyData from "../components/EmptyData";
import ConfirmationModal from "../components/ConfirmationModal";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addUserAppealData } from "../store/slices/userDataSlice";

// images
import plus from "../assets/images/svg/plus-icon.svg";
import arrowLeft from "../assets/images/svg/arrow-left.svg";

const Appeals = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const userData = useSelector((store) => store.userData);
  const [appealNameValue, setAppealNameValue] = useState(null);
  const [openCreateNewAppealModal, setOpenCreateNewAppealModal] =
    useState(false);

  // close create new appeal modal
  const closeCreateNewAppealModal = () => {
    if (!loader) setOpenCreateNewAppealModal(false);
  };

  // create new appeal
  const createNewAppeal = (e) => {
    if (userData.appealsData.length < 10) {
      // form inputs
      const elAppealNameInput = getElement(e, ".js-appeal-name-input");

      // check input value
      const checkedAppealNameValue = checkInputValueByLength(
        elAppealNameInput,
        appealNameValue,
        0,
        64
      );

      // send a request
      if (!loader && checkedAppealNameValue) {
        setLoader(true);

        // date & time
        const year = date.getFullYear();
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const month = String(date.getMonth()).padStart(2, "0");
        const minute = String(date.getMinutes()).padStart(2, "0");

        const formData = {
          name: appealNameValue,
          userId: userData.userData.userId,
          createdDate: `${year}-${month}-${day}T${hour}:${minute}`,
        };

        axiosConfig
          .post("/Chat", formData)
          .then((res) => {
            if (res.status === 200) {
              // close modal
              closeCreateNewAppealModal();

              // add appeal data to store
              dispatch(addUserAppealData(res.data));

              // notification
              successNotification("Murojaat muvaffaqiyatli yaratildi");
            } else errorNotification();
          })
          .catch(() => errorNotification.offline())
          .finally(() => setLoader(false));
      }
    } else {
      errorNotification("Murojaatlar soni maksimal miqdoriga yetib bo'ldi");
    }
  };

  return (
    <div>
      {/* header */}
      <div className="admin-page-header">
        {/* back */}
        <Link to="/admin/dashboard">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            className="w-6 h-6"
            alt="arrow left icon"
          />
        </Link>

        {/* title */}
        <h1>Murojaatlar</h1>
      </div>

      {/* body */}
      <div className="admin-page-body px-0">
        {/* content header header */}
        <div className="flex-center-between gap-5 px-6 mb-6 max-1024:p-5 max-540:flex-col max-540:items-start max-450:px-4 max-450:mb-5">
          <h2 className="text-medium-18 max-450:text-regular-16 max-450:font-medium">
            <span>Murojaatlar </span>
            <span className="text-primary-gray-500">
              ({userData.appealsData.length})
            </span>
          </h2>

          {/* create new appeal btn */}
          <button
            disabled={userData.appealsData.length === 10}
            onClick={() => setOpenCreateNewAppealModal(true)}
            className="flex-center gap-2.5 py-2 px-3.5 border border-white rounded-lg text-regular-16 max-375:w-full max-375:justify-center"
          >
            <span>Yangi murojaat yaratish</span>

            {/* btn icon */}
            <img
              src={plus}
              width={24}
              height={24}
              alt="plus icon"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* appeals list */}
        <ul>
          {userData.appealsData.length > 0 ? (
            userData.appealsData.map((appeal, index) => (
              <li
                key={appeal.chatId}
                className="flex-center relative transition-colors even:bg-white/5 hover:bg-white/10"
              >
                <Link
                  to={"/admin/dashboard/appeals/appeal/" + appeal.chatId}
                  className="flex-center gap-6 w-full py-2.5 px-6 max-1024:px-5 max-1024:gap-5 max-450:gap-4 max-450:px-4"
                >
                  {/* appeal number */}
                  <span className="inline-block w-6 shrink-0 text-regular-16 text-end">
                    {index + 1}.
                  </span>

                  {/* appeal info */}
                  <div className="space-y-1.5">
                    <h3 className="text-regular-16 line-clamp-1">
                      {appeal.name}
                    </h3>

                    {/* date & time */}
                    <div className="flex-center gap-3.5 text-regular-14 text-primary-gray-500">
                      <span className="text-inherit">
                        {formatDate(appeal.createdDate)}
                      </span>
                      <span className="text-inherit">-</span>
                      <span className="text-inherit">
                        {formatTime(appeal.createdDate)}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <EmptyData
              contentSmall={true}
              title="Murojaatlar mavjud emas!"
              description="Ushbu sahifada hech qanday murojaat mavjud emas."
              className="px-6 max-1024:px-5 max-450:px-4"
            />
          )}
        </ul>
      </div>

      {/* create appeal modal */}
      {openCreateNewAppealModal && (
        <ConfirmationModal
          loader={loader}
          submitBtnText="Yaratish"
          onSubmit={createNewAppeal}
          title="Yangi murojaat yaratish"
          closeModal={closeCreateNewAppealModal}
          info="Siz yaratgan murojaatlar soni 10 dan oshmasligi zarur!"
        >
          {/* name */}
          <label>
            <span>Murojaat nomi</span>
            <input
              autoFocus
              type="text"
              maxLength={64}
              name="appeal name"
              placeholder="Murojaat nomi"
              className="js-appeal-name-input"
              onChange={(e) => {
                const value = e.target.value.trim().slice(0, 64);
                setAppealNameValue(value);
              }}
            />
          </label>

          {/* appeal name examples */}
          <div className="space-y-2.5">
            <strong className="text-regular-16 font-medium">
              Murojaat nomi uchun misollar
            </strong>

            {/* btns */}
            <div className="flex flex-wrap gap-3">
              <CopyBtn
                iconSize={16}
                text="Mahsulotlar bo'yicha"
                className="flex-center gap-2 py-1 px-2.5 border border-gray-500 rounded-full"
              >
                <span className="text-regular-16">Mahsulotlar bo'yicha</span>
              </CopyBtn>

              <CopyBtn
                iconSize={16}
                text="Ilova ishlashiga oid"
                className="flex-center gap-2 py-1 px-2.5 border border-gray-500 rounded-full"
              >
                <span className="text-regular-16">Ilova ishlashiga oid</span>
              </CopyBtn>

              <CopyBtn
                iconSize={16}
                text="Mahsulot yetkazish muammosi"
                className="flex-center gap-2 py-1 px-2.5 border border-gray-500 rounded-full"
              >
                <span className="text-regular-16">
                  Mahsulot yetkazish muammosi
                </span>
              </CopyBtn>

              <CopyBtn
                iconSize={16}
                text="Telegram bot yuzasidan"
                className="flex-center gap-2 py-1 px-2.5 border border-gray-500 rounded-full"
              >
                <span className="text-regular-16">Telegram bot yuzasidan</span>
              </CopyBtn>

              <CopyBtn
                iconSize={16}
                text="Boshqa savol"
                className="flex-center gap-2 py-1 px-2.5 border border-gray-500 rounded-full"
              >
                <span className="text-regular-16">Boshqa savol</span>
              </CopyBtn>
            </div>
          </div>
        </ConfirmationModal>
      )}
    </div>
  );
};

export default Appeals;
