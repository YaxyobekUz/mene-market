import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// axios
import axiosConfig from "../api/axios/axios";

// helpers
import {
  getElement,
  errorNotification,
  successNotification,
  checkInputValueByRegex,
} from "../helpers/helpers";
import { emailRegex, passwordRegex } from "../helpers/regexes";

// images
import eye from "../assets/images/svg/eye.svg";
import eyeSlash from "../assets/images/svg/eye-slash.svg";
import DotsLoader from "../components/DotsLoader";

const Register = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [passwordInput, setPasswordInput] = useState(true);

  const register = (e) => {
    e.preventDefault();

    // form elements
    const elNameInput = getElement(e, ".js-name-input");
    const elEmailInput = getElement(e, ".js-email-input");
    const elSurnameInput = getElement(e, ".js-surname-input");
    const elPasswordInput = getElement(e, ".js-password-input");

    const password = checkInputValueByRegex(elPasswordInput, passwordRegex);
    const email = checkInputValueByRegex(elEmailInput, emailRegex);
    const name = checkInputValueByRegex(elNameInput);

    // check form elements value
    if (!loader && isAgree && email && password && name) {
      // set loader
      setLoader(true);

      const formData = {
        role: 2,
        balance: 0,
        image: null,
        userChats: [],
        offerLinks: [],
        productsSold: 0,
        isArchived: false,
        phoneNumber: null,
        balanceHistorys: [],
        email: elEmailInput.value.trim(),
        firstName: elNameInput.value.trim(),
        password: elPasswordInput.value.trim(),
        lastName:
          elSurnameInput.value.trim().length > 0
            ? elSurnameInput.value.trim()
            : null,
      };

      axiosConfig
        .post("/Accaunt/Register", formData)
        .then((res) => {
          if (res.status === 200) {
            navigate("/auth/login");
            successNotification("Muvaffaqiyatli ro'yxatdan o'tdingiz");
          } else {
            errorNotification("Nimadir xato ketdi");
          }
        })
        .catch(() => errorNotification.offline())
        .finally(() => setLoader(false));
    }
  };

  return (
    <div className="flex justify-center px-16 py-8 h-screen overflow-y-auto w-full max-1024:px-5 max-860:py-10 max-768:h-auto max-768:overflow-y-visible scroll_hidden">
      <div className="max-w-[456px] w-full my-auto">
        {/* title */}
        <h1 className="mb-6">Ro'yxatdan o'tish </h1>

        {/* description */}
        <p className="text-regular-16 text-primary-gray-500 mb-8">
          <span>Allaqachon akkuntingiz bormi? </span>
          <Link to="/auth/login" className="text-primary-blue-700 mb-8">
            Kirish
          </Link>
        </p>

        {/* register form */}
        <form onSubmit={register} className="auth-form">
          {/* name */}
          <input
            autoFocus
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Ismingiz"
            className="auth-form-input js-name-input"
          />

          {/* surname */}
          <input
            type="text"
            name="surname"
            autoComplete="off"
            className="auth-form-input js-surname-input"
            placeholder="Familiyangiz (Ixtiyoriy)"
          />

          {/* email */}
          <input
            name="email"
            type="email"
            disabled={loader}
            autoComplete="off"
            placeholder="E-pochta manzilingiz"
            className="auth-form-input js-email-input"
          />

          {/* password */}
          <div className="flex flex-col relative">
            <input
              name="password"
              disabled={loader}
              autoComplete="off"
              placeholder="Parol"
              type={`${passwordInput ? "password" : "text"}`}
              className="auth-form-input js-password-input pr-10"
            />

            {/* set toggle password input */}
            <button
              type="button"
              onClick={() => setPasswordInput(!passwordInput)}
              className="absolute top-2 right-0"
            >
              {passwordInput ? (
                <img
                  src={eye}
                  width={24}
                  height={24}
                  alt="eye icon"
                  className="w-6 h-6"
                />
              ) : (
                <img
                  width={24}
                  height={24}
                  src={eyeSlash}
                  alt="eye slash icon"
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>

          {/* agree */}
          <label className="flex-center gap-3 text-regular-16 text-primary-gray-500">
            <input
              type="checkbox"
              autoComplete="off"
              disabled={loader}
              onChange={(e) => {
                if (!loader) {
                  e.target.checked ? setIsAgree(true) : setIsAgree(false);
                }
              }}
              className="js-checkbox-input w-5 h-5"
            />

            {/* checkbox wrapper */}
            <div className="!text-base">
              <span>Men </span>
              <Link className="!text-base text-primary-black-800 font-medium">
                Maxfiylik siyosati{" "}
              </Link>
              <span>va </span>
              <Link className="!text-base text-primary-black-800 font-medium">
                Foydalanish shartlari{" "}
              </Link>
              <span>ga roziman.</span>
            </div>
          </label>

          {/* submit button */}
          <button
            disabled={loader || !isAgree}
            className={`${
              loader || !isAgree ? "opacity-70" : "opacity-100"
            } flex-center justify-center py-2.5 text-white text-regular-16 w-full rounded-lg bg-primary-black-800 transition-opacity`}
          >
            {!loader ? <span>Ro'yxatdan o'tish</span> : <DotsLoader />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
