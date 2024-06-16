import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// axios
import axiosConfig from "../api/axios/axios";

// components
import DotsLoader from "../components/DotsLoader";

// redux
import { useDispatch } from "react-redux";
import { setAuthData, setLoggedIn } from "../store/slices/authDataSlice";

// helpers
import {
  checkInputValueByRegex,
  errorNotification,
  getElement,
  successNotification,
} from "../helpers/helpers";
import { emailRegex, passwordRegex } from "../helpers/regexes";

// images
import eye from "../assets/images/svg/eye.svg";
import eyeSlash from "../assets/images/svg/eye-slash.svg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [passwordInput, setPasswordInput] = useState(true);

  const login = (event) => {
    event.preventDefault();

    // form elements
    const elEmailInput = getElement(event, ".js-email-input");
    const elPasswordInput = getElement(event, ".js-password-input");

    const password = checkInputValueByRegex(elPasswordInput, passwordRegex);
    const email = checkInputValueByRegex(elEmailInput, emailRegex);

    // login
    if (!loader && email && password) {
      // set loader
      setLoader(true);

      // form data
      const formData = {
        email: elEmailInput.value.trim(),
        password: elPasswordInput.value.trim(),
      };

      // login
      axiosConfig
        .post("/Accaunt/Login", formData)
        .then((res) => {
          if (res.status === 200) {
            navigate("/");
            const authData = { ...res.data, ...formData };
            dispatch(setLoggedIn(true));
            dispatch(setAuthData(authData));
            successNotification("Akkauntga kirildi");
            localStorage.setItem("auth", JSON.stringify(authData));
          } else {
            errorNotification();
          }
        })
        .catch(() => errorNotification.offline("E-pochta yoki parol noto'g'ri"))
        .finally(() => setLoader(false));
    }
  };

  return (
    <div className="flex justify-center px-16 py-8 h-screen overflow-y-auto w-full max-1024:px-5 max-860:py-10 max-768:h-auto max-768:overflow-y-visible scroll_hidden">
      <div className="max-w-[456px] w-full my-auto">
        {/* title */}
        <h1 className="mb-6">Kirish</h1>

        {/* description */}
        <p className="text-regular-16 text-primary-gray-500 mb-8">
          <span>Akkauntingiz yo'qmi? </span>

          <Link to="/auth/signup" className="text-primary-blue-700 mb-8">
            Ro'yxatdan o'tish
          </Link>
        </p>

        {/* login form */}
        <form onSubmit={login} className="auth-form">
          {/* email */}
          <input
            name="email"
            type="email"
            disabled={loader}
            placeholder="E-pochta"
            className="auth-form-input js-email-input"
          />

          {/* password */}
          <div className="flex flex-col relative">
            <input
              name="password"
              disabled={loader}
              autoComplete="off"
              placeholder="Parol"
              className="auth-form-input js-password-input pr-10"
              type={`${passwordInput ? "password" : "text"}`}
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

          {/* forgot password */}
          <Link to="/" className="inline-block">
            Parolni unutdingizmi?
          </Link>

          <button
            disabled={loader}
            className="flex-center justify-center py-2.5 text-white text-regular-16 w-full rounded-lg bg-primary-black-800 transition-opacity disabled:opacity-70"
          >
            {!loader ? <span>Kirish</span> : <DotsLoader />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
