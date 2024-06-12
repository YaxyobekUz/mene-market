import React from "react";
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

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery } = useParams();
  const authData = useSelector((store) => store.authData);
  const pathArr = location.pathname.split("/").filter((item) => item !== "");

  const searchProducts = (event) => {
    event.preventDefault();
    const searchInput = getElement(event, ".js-search-input");
    const searchValue = searchInput.value.trim().split("/").join("");
    if (searchValue.length > 0) navigate(`/search/${searchValue}`);
  };

  return (
    <header className="sticky top-0 z-10 bg-white py-6 mb-12 shadow-md max-540:mb-10 max-768:py-5 max-640:py-4 max-490:py-3">
      <div className="container">
        <div className="flex-center-between gap-5">
          {/* logo */}
          <Link title="mene market logo" to="/">
            <img
              width={96}
              height={48}
              src={logoImg}
              className="w-24 h-12"
              alt="mene market logo"
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

          {/* header actions wrapper */}
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

            {/*  responsive search form modal button */}
            <button className="hidden max-768:flex-center space-x-1">
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
            {authData.data.isLoggedIn ? (
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
      </div>
    </header>
  );
};

export default Header;
