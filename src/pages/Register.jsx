import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// axios & jwy
import axios from "axios";

// toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// images
import logo from "../assets/images/other/logo.png";
import chair from "../assets/images/other/chair.png";
import { isLoggedIn } from "../js/auth";
const Register = () => {
  const setNavigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState(true);
  const [loader, setLoader] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const addUser = (event) => {
    // get element
    const getElement = (name) => {
      return event.target.querySelector(name);
    };

    // input pattern
    const inputPattern = (pattern, input, className) => {
      if (pattern.test(input.value)) {
        input.classList.remove(className);
        return true;
      } else {
        input.classList.add(className);
        input.focus();
        return false;
      }
    };

    // patterns
    const defaultPattern = /^(?=.*[a-zA-Z0-9]).{1,}$/;
    const usernamePattern = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=(?:.*[0-9]){4})(?=(?:.*[a-zA-Z]){4})[a-zA-Z0-9]{8,}$/;

    // form elements
    const elUserNameInput = getElement(".js-username-input");
    const elNameInput = getElement(".js-name-input");
    const elEmailInput = getElement(".js-email-input");
    const elPasswordInput = getElement(".js-password-input");
    const elSubmitBtn = getElement(".js-submit-btn");

    // password
    const password = inputPattern(
      passwordPattern,
      elPasswordInput,
      "is-invalid"
    );
    // email
    const email = inputPattern(emailPattern, elEmailInput, "is-invalid");
    // username
    const userName = inputPattern(
      usernamePattern,
      elUserNameInput,
      "is-invalid"
    );
    // name
    const name = inputPattern(defaultPattern, elNameInput, "is-invalid");

    // check form elements value and loader
    if (!loader && email && password && userName && name) {
      // add loader
      setLoader(true);

      // data
      axios
        .post("https://menemarcket.azurewebsites.net/api/Accaunt/Register", {
          firstName: elNameInput.value,
          lastName: "string",
          email: elEmailInput.value,
          password: elPasswordInput.value,
          balance: 0,
          isArchived: true,
          role: 0,
        })
        .then((response) => {
          if (response.status === 200) {
            // notification
            toast.success("Muvaffaqiyatli", {
              position: "bottom-right",
              autoClose: 2500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "light",
            });

            // navigate
            setTimeout(() => {
              setNavigate("/auth/login");
            }, 1000);

            console.log(response);
          }
        })
        .catch((error) => {
          // error notification
          toast.error("Xatolik yuz berdi", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
          });
          console.log(error);
        })
        .finally(() => setLoader(false));
    }
  };
  return (
    <div className="flex-center justify-center grow container !px-0 max-w-[1480px] h-full">
      <div className="grid grid-cols-2 h-screen w-full max-768:grid-cols-1">
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
            <h1 className="mb-6">Ro'yxatdan o'tish</h1>
            <p className="text-regular-16 text-primary-gray-500 mb-8">
              Allaqachon akkuntingiz bormi?{" "}
              <Link to="/auth/login" className="text-primary-blue-700 mb-8">
                Kirish
              </Link>
            </p>

            {/* form */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                addUser(event);
              }}
              className="register-form"
            >
              <input
                type="text"
                className="register-form_input js-name-input"
                placeholder="Ismingiz"
              />
              <span className="hidden text-regular-14 text-primary-red-500 italic !mt-1.5">
                Ismingizni kiriting
              </span>
              <input
                type="text"
                className="register-form_input js-username-input"
                placeholder="Foydalanuvchi nomi"
              />
              <span className="hidden text-regular-14 text-primary-red-500 italic !mt-1.5">
                Foydalanuvchi nomini a-z, 0-9 va - belgilaridan yaratishingiz
                mumkin.
              </span>
              <input
                type="email"
                className="register-form_input js-email-input"
                placeholder="E-pochta manzilingiz"
              />
              <span className="hidden text-regular-14 text-primary-red-500 italic !mt-1.5">
                E-pochta formatini to'g'ri kiriting
              </span>
              <div className="login-form_password-input-wrapper">
                <input
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

              {/* agree */}
              <label className="register-form_privacy-policy-wrapper">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setIsAgree(true);
                    } else {
                      setIsAgree(false);
                    }
                  }}
                  type="checkbox"
                  className="register-form_input-checkbox js-checkbox-input"
                />
                <span className="register-form_privacy-policy-wrapper_text">
                  <span>Men </span>
                  <Link to="/public-offer#maxfiylik-siyosati">
                    Maxfiylik siyosati{" "}
                  </Link>
                  <span>va </span>
                  <Link to="/public-offer#foydalanish-shartlari">
                    Foydalanish shartlari
                  </Link>
                  <span> ga roziman</span>
                </span>
              </label>
              <button
                disabled={loader || !isAgree}
                className={`${
                  loader || !isAgree ? "opacity-70" : "opacity-100"
                } register-form_submit-btn js-submit-btn transition-colors`}
              >
                {!loader ? "Ro'yxatdan o'tish" : "Ro'yxatdan o'tilmoqda..."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
