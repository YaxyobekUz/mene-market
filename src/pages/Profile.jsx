import React, { useState } from "react";

// helpers
import {
  getElement,
  errorNotification,
  successNotification,
  checkInputValueByLength,
} from "../helpers/helpers";

// data
import { imageBaseUrl } from "../data/data";

// axios
import axiosConfig from "../api/axios/axios";

// components
import CopyBtn from "../components/CopyBtn";
import DotsLoader from "../components/DotsLoader";

// redux
import {
  setImageViewerModalData,
  setOpenImageViewerModal,
} from "../store/slices/imageViewerModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/slices/userDataSlice";

// images
import userIcon from "../assets/images/other/user.jpg";
import cameraIcon from "../assets/images/svg/camera.svg";

const Profile = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const userData = useSelector((store) => store.userData);
  const [userProfileImageBase64Code, setUserProfileImageBase64Code] =
    useState(null);

  // open user profile image modal
  const openImageViewerModal = () => {
    dispatch(
      setImageViewerModalData({
        images: [
          userData.userData.image
            ? imageBaseUrl + userData.userData.image
            : userIcon,
        ],
        alt: "user profile image",
      })
    );

    dispatch(setOpenImageViewerModal(true));
  };

  // select user profile image base64 encoded
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfileImageBase64Code(reader.result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  // change user data
  const changeUserData = (e) => {
    e.preventDefault();

    // inputs
    const firstNameInput = getElement(e, ".js-first-name-input");
    const lastNameInput = getElement(e, ".js-last-name-input");

    // check input values
    const firstName = checkInputValueByLength(
      firstNameInput,
      firstNameInput.value
    );

    if (!loader && firstName) {
      setLoader(true);
      const userCurrentData = userData.userData;

      // form data
      const formData = {
        user: {
          role: userCurrentData.role,
          image: userCurrentData.image,
          email: userCurrentData.email,
          userId: userCurrentData.userId,
          balance: userCurrentData.balance,
          password: userCurrentData.password,
          userChats: userCurrentData.userChats,
          lastName: lastNameInput.value.trim(),
          firstName: firstNameInput.value.trim(),
          isArchived: userCurrentData.isArchived,
          phoneNumber: userCurrentData.phoneNumber,
          productsSold: userCurrentData.productsSold,
          balanceHistorys: userCurrentData.balanceHistorys,
        },
        bytes: userProfileImageBase64Code,
      };

      // send a reuqest
      axiosConfig
        .put("/User", formData)
        .then((res) => {
          if (res.status === 200) {
            dispatch(setUserData(res.data));
            successNotification("Ma'lumotlar muvaffaqiyatli o'zgartirildi");
          } else errorNotification();
        })
        .catch(() => errorNotification.offline())
        .finally(() => setLoader(false));
    }
  };

  return (
    <div className="space-y-6">
      {/* profile section */}
      <div className="space-y-5 max-450:space-y-4">
        {/* title wrapper */}
        <div className="flex-center-between gap-5">
          <h1>Profil</h1>

          {/* actions */}
          <div className="flex-center gap-3.5 shrink-0">
            {/* set user profile image */}
            <label
              className="p-2 cursor-pointer"
              title="add user profile image"
              aria-label="add user profile image"
            >
              <img
                width={24}
                height={24}
                src={cameraIcon}
                alt="camera icon"
                className="w-6 h-6"
              />

              {/* file input */}
              <input
                type="file"
                name="image"
                disabled={loader}
                className="hidden"
                onChange={handleImageSelect}
                accept="image/png, image/jpeg"
              />
            </label>

            {/* copy user id btn */}
            <CopyBtn
              darkTheme={true}
              text={userData.userData.userId}
              className="flex-center gap-2 p-2"
              notification="Foydalanuvchi ID si buferga nusxa olindi"
            />
          </div>
        </div>

        {/* profile */}
        <div className="flex-center gap-3.5 bg-white/5 p-5 rounded-lg max-450:gap-4 max-450:p-4">
          <img
            width={64}
            height={64}
            alt="user profile image"
            onClick={openImageViewerModal}
            className="w-16 h-16 bg-primary-gray-500 rounded-full max-450:w-14 max-450:h-14"
            src={
              userData.userData.image
                ? imageBaseUrl + userData.userData.image
                : userIcon
            }
          />

          {/* user full name */}
          <div className="space-y-2.5 max-450:space-y-1">
            <h3 className="text-medium-18 line-clamp-1 max-450:text-regular-16 max-450:font-medium">
              {userData.userData.firstName}{" "}
              {userData.userData.lastName ? userData.userData.lastName : ""}
            </h3>

            <p className="text-regular-16 text-primary-gray-500">
              Foydalanuvchi
            </p>
          </div>
        </div>
      </div>

      {/* change user data */}
      <section className="space-y-5 max-450:space-y-4">
        <h2 className="text-medium-18 max-450:text-regular-16">
          Ma'lumotlarni o'zgartirish
        </h2>

        {/* form */}
        <form onSubmit={changeUserData} className="profile-page-from">
          {/* first name */}
          <label>
            <span>Ism</span>

            <input
              type="text"
              maxLength={64}
              disabled={loader}
              name="first name"
              placeholder="Ism"
              className="js-first-name-input"
              defaultValue={userData.userData.firstName}
            />
          </label>

          {/* last name */}
          <label>
            <span>Familiya</span>

            <input
              type="text"
              maxLength={64}
              name="last name"
              disabled={loader}
              placeholder="Familiya"
              className="js-last-name-input"
              defaultValue={
                userData.userData.lastName ? userData.userData.lastName : ""
              }
            />
          </label>

          {/* submit btn */}
          <button disabled={loader}>
            {!loader ? "O'zgartirish" : <DotsLoader />}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Profile;
