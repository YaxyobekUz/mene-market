import React, { useState } from "react";
import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { loggedIn } from "../store/slices/productBasketSlice";
import { setUserData } from "../store/slices/userDataSlice";

// auth
import { logIn } from "../api/auth/login";
import { getUserById } from "../api/auth/getUserById";
import { decodeToken } from "react-jwt";

// toast
import { toast } from "react-toastify";

// images
import logo from "../assets/images/other/logo.png";
import chair from "../assets/images/other/chair.png";

// helpers
import { emailRegex, passwordRegex } from "../js/regexes";
import { getElement, validateInput } from "../js/helpers";
const Login = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [passwordInput, setPasswordInput] = useState(true);

  const onSubmit = (e) => {
    // form elements
    const elEmailInput = getElement(e, ".js-email-input");
    const elPasswordInput = getElement(e, ".js-password-input");
    const elCheckboxInput = getElement(e, ".js-checkbox-input");

    const password = validateInput(
      passwordRegex,
      elPasswordInput,
      "is-invalid"
    );
    const email = validateInput(emailRegex, elEmailInput, "is-invalid");
    const saveDataToLocalStorage = elCheckboxInput.checked;

    // login
    if (!loader && email && password) {
      // set loader
      setLoader(true);

      // form user data
      const userData = {
        email: elEmailInput.value,
        password: elPasswordInput.value,
      };

      // log in
      logIn(userData, saveDataToLocalStorage)
        .then((response) => {
          const token = decodeToken(response.data.token);

          // set user data
          getUserById({ id: token.UserId, token: response.data.token })
            .then((response) => {
              dispatch(setUserData(response.data));
              dispatch(loggedIn());

              // success notification
              toast.success("Akkauntga kirildi");
            })
            .finally(() => setLoader(false));
        })
        .catch(() => setLoader(false));
    }
  };

  return (
    <>
      <div className="flex-center justify-center grow container !px-0 max-w-[1480px] h-full">
        <div className="grid grid-cols-2 w-full h-screen max-768:grid-cols-1">
          {/* img wrapper */}
          <div
            className="flex justify-center w-full h-full bg-center bg-cover bg-no-repeat max-768:hidden"
            style={{ backgroundImage: `url(${chair})` }}
          >
            {/* logo */}
            <Link to="/" className="mt-16">
              <img
                width={96}
                height={48}
                src={logo}
                alt="mene market logo image"
                className="w-24 h-12"
              />
            </Link>
          </div>

          {/* main content, login form */}
          <div className="flex justify-center px-16 py-8 h-screen overflow-y-auto w-full max-1024:px-5 max-860:py-10 max-768:h-auto max-768:overflow-y-visible scroll_hidden">
            <div className="max-w-[456px] w-full my-auto">
              {/* title */}
              <h1 className="mb-6">Kirish</h1>
              <p className="text-regular-16 text-primary-gray-500 mb-8">
                <span>Akkauntingiz yo'qmi? </span>
                <Link to="/auth/signup" className="text-primary-blue-700 mb-8">
                  Ro'yxatdan o'tish
                </Link>
              </p>

              {/* form */}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  onSubmit(event);
                }}
                className="login-form"
              >
                <input
                  name="email"
                  type="email"
                  className="login-form_input js-email-input"
                  placeholder="E-pochta"
                />
                <span className="hidden text-regular-14 text-primary-red-500 italic !mt-1.5">
                  E-pochta formatini to'g'ri kiriting
                </span>
                <div className="login-form_password-input-wrapper">
                  <input
                    name="password"
                    autoComplete="off"
                    type={`${passwordInput ? "password" : "text"}`}
                    className="login-form_input js-password-input"
                    placeholder="Parol"
                  />

                  <span className="hidden text-regular-14 text-primary-red-500 italic !mt-1.5">
                    Parol kamida 4ta son va 4ta harfdan iborat bo'lishi kerak
                  </span>

                  <button
                    className="login-form_password-input-wrapper-button"
                    type="button"
                    onClick={() => setPasswordInput(!passwordInput)}
                  >
                    {passwordInput ? (
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                          stroke="#949494"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="#949494"
                          strokeWidth="1.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                          stroke="#949494"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="#949494"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4 20L20 4"
                          stroke="#949494"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* sub content */}
                <div className="login-form_sub-content">
                  <label className="login-form_sub-content_input-wrapper">
                    <input
                      type="checkbox"
                      className="login-form_input-checkbox js-checkbox-input"
                    />
                    <span className="login-form_sub-content_input-label">
                      Meni eslab qol
                    </span>
                  </label>
                  <Link to="/">Parolni unutdingizmi?</Link>
                </div>
                <button
                  disabled={loader}
                  className="login-form_submit-btn transition-opacity disabled:opacity-70"
                >
                  {!loader ? "Kirish" : "Akkauntga kirilmoqda..."}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
