import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// helpers
import { getElement } from "../helpers/helpers";

// images
import logoImg from "../assets/images/other/logo.png";
import userIcon from "../assets/images/svg/user-icon.svg";
import searchIcon from "../assets/images/svg/search-icon.svg";
import supportIcon from "../assets/images/svg/support-icon.svg";
import arrowLeft from "../assets/images/svg/arrow-left-solid.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery } = useParams();
  const mobileSearchInputRef = useRef(null);
  const authData = useSelector((store) => store.authData);
  const [openSearchForm, setOpenSearchForm] = useState(false);
  const pathArr = location.pathname.split("/").filter((item) => item !== "");

  // search products
  const searchProducts = (event) => {
    event.preventDefault();
    const searchInput = getElement(event, ".js-search-input");
    const searchValue = searchInput.value.trim().split("/").join("");
    if (searchValue.length > 0) navigate(`/search/${searchValue}`);
  };

  return (
    <header className="sticky top-0 z-10 bg-white mb-12 shadow-md max-540:mb-10">
      <div className="relative py-6 max-768:py-5 max-640:py-4 max-490:py-3">
        <div className="container">
          {/* header content */}
          <div className="flex-center-between gap-5">
            {/* logo */}
            <Link title="mene market logo" to="/">
              <img
                width={96}
                height={48}
                src={logoImg}
                alt="mene market logo"
                className="w-24 h-12 max-640:w-[78px] max-640:h-10 max-375:w-[70px] max-375:h-9"
              />
            </Link>

            {/* search form wrapper */}
            <div className="relative w-full max-w-sm max-768:hidden">
              <form
                title="search"
                onSubmit={searchProducts}
                className="flex-center justify-center flex-col relative border-black"
              >
                {/* search input */}
                <input
                  type="search"
                  placeholder="Qidirish"
                  className="js-search-input rounded-3xl py-3 pr-14 border border-primary-black-800 px-6 text-medium-18 bg-transparent"
                  defaultValue={
                    pathArr.length === 2 && pathArr[0] === "search"
                      ? searchQuery
                      : ""
                  }
                />

                {/* search form submit button  */}
                <button className="absolute right-5">
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

            {/* header action */}
            <div className="flex-center space-x-6 max-540:space-x-5 max-375:space-x-4">
              {/* contact page link */}
              <Link to="/contact" className="flex-center space-x-1">
                <img
                  width={24}
                  height={24}
                  src={supportIcon}
                  alt="support icon"
                  className="w-6 h-6 max-768:block"
                />

                <span className="max-860:hidden max-768:block max-640:hidden">
                  Aloqa
                </span>
              </Link>

              {/*  responsive search button */}
              <button
                title="Open search form"
                aria-label="Open search form"
                className="hidden max-768:flex-center space-x-1"
                onClick={() => {
                  setOpenSearchForm(true);
                  mobileSearchInputRef.current.focus();
                  mobileSearchInputRef.current.value = "";
                }}
              >
                <img
                  width={24}
                  height={24}
                  src={searchIcon}
                  alt="search icon"
                  className="w-6 h-6"
                />
                <span className="max-640:hidden">Qidirish</span>
              </button>

              {/* login link */}
              {authData.loggedIn ? (
                <Link to="/admin/dashboard" className="flex-center space-x-1">
                  <img
                    width={24}
                    height={24}
                    src={userIcon}
                    alt="user icon"
                    className="w-6 h-6"
                  />
                  <span className="max-450:hidden">Profil</span>
                </Link>
              ) : (
                <Link to="/auth/login" className="flex-center space-x-1">
                  <img
                    width={24}
                    height={24}
                    src={userIcon}
                    alt="user icon"
                    className="w-6 h-6"
                  />
                  <span className="max-450:hidden">Kirish</span>
                </Link>
              )}
            </div>
          </div>

          {/* mobile search form */}
          <div
            className={`${
              openSearchForm ? "translate-y-0" : "-translate-y-full"
            } absolute top-0 inset-x-0 w-full h-full bg-white transition-transform`}
          >
            <div className="container h-full">
              <div className="flex-center justify-center gap-4 w-full h-full">
                {/* back to homepage */}
                <button
                  title="Back to homepage"
                  aria-label="Back to homepage"
                  className="inline-block shrink-0 py-1.5"
                  onClick={() => {
                    setOpenSearchForm(false);
                    if (pathArr.length === 2 && pathArr[0] === "search") {
                      navigate("/");
                    }
                  }}
                >
                  <img
                    width={24}
                    height={24}
                    src={arrowLeft}
                    className="w-6 h-6"
                    alt="arrow left icon"
                  />
                </button>

                {/* form */}
                <form
                  title="search"
                  onSubmit={searchProducts}
                  className="flex-center justify-center flex-col relative w-full border-black"
                >
                  {/* search input */}
                  <input
                    type="search"
                    placeholder="Qidirish"
                    ref={mobileSearchInputRef}
                    className="js-search-input bg-transparent rounded-3xl py-2 pl-4 pr-12 border border-primary-black-800 text-base"
                    defaultValue={
                      pathArr.length === 2 && pathArr[0] === "search"
                        ? searchQuery
                        : ""
                    }
                  />

                  {/* search form submit button  */}
                  <button className="absolute right-4">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
