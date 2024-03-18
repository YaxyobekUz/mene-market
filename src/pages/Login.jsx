import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// axios & jwt
import axios from "axios";
import { useJwt } from "react-jwt";

// redux
import { useDispatch } from "react-redux";
import { loggedIn } from "../store/slices/productBasketSlice";

// toast
import { toast } from "react-toastify";

// images
import logo from "../assets/images/other/logo.png";
import chair from "../assets/images/other/chair.png";
import { configureLoggedIn, isLoggedIn } from "../js/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState(true);
  const [logginCount, setLogginCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const login = (event) => {
    event.preventDefault();

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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=(?:.*[0-9]){4})(?=(?:.*[a-zA-Z]){4})[a-zA-Z0-9]{8,}$/;

    // form elements
    const elEmailInput = getElement(".js-email-input");
    const elPasswordInput = getElement(".js-password-input");

    // check form elements value
    // password
    const password = inputPattern(
      passwordPattern,
      elPasswordInput,
      "is-invalid"
    );
    // email
    const email = inputPattern(emailPattern, elEmailInput, "is-invalid");

    // login
    if (!loading && email && password) {
      setLoading(true);
      axios
        .post("https://menemarcket.azurewebsites.net/api/Accaunt/Login", {
          email: elEmailInput.value,
          password: elPasswordInput.value,
        })
        .then((response) => {
          if (response.status === 200) {
            // notification
            toast.success("Akkauntga kirildi", {
              position: "bottom-right",
              autoClose: 3500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "light",
            });

            dispatch(loggedIn());

            // set user data to localstorage
            const token = response.data.token;
            localStorage.setItem(
              "user",
              JSON.stringify({
                token: token,
                ...JSON.parse(response.config.data),
              })
            );
            navigate("/");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("E-pochta yoki parol noto'g'ri", {
            position: "bottom-right",
            autoClose: 3500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
          });
        })
        .finally(() => setLoading(false));
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
                Akkauntingiz yo'qmi?{" "}
                <Link
                  to="/auth/register"
                  className="text-primary-blue-700 mb-8"
                >
                  Ro'yxatdan o'tish
                </Link>
              </p>

              {/* form */}
              <form
                onSubmit={(event) => {
                  login(event);
                }}
                className="login-form"
              >
                <input
                  type="text"
                  className="login-form_input js-email-input"
                  placeholder="E-pochta yoki foydalanuvchi nomi"
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

                {/* sub content */}
                <div className="login-form_sub-content">
                  <label className="login-form_sub-content_input-wrapper">
                    <input
                      type="checkbox"
                      className="login-form_input-checkbox"
                    />
                    <span className="login-form_sub-content_input-label">
                      Meni eslab qol
                    </span>
                  </label>
                  <Link to="/">Parolni unutdingizmi?</Link>
                </div>
                <button
                  disabled={loading}
                  className="login-form_submit-btn transition-opacity disabled:opacity-70"
                >
                  {!loading ? "Kirish" : "Akkauntga kirilmoqda..."}
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
