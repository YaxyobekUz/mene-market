import React, { useEffect, useRef, useState } from "react";

// images
import crossIcon from "../assets/images/svg/cross-icon.svg";
import searchIcon from "../assets/images/svg/search-icon-white.svg";

const SearchForm = ({ onSubmit, onChange, className }) => {
  const searchInputRef = useRef(null);
  const [inputIsChanged, setInputIsChanged] = useState(false);

  // focus on input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        searchInputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form
      title="search"
      aria-label="search"
      className={`admin-page-search-form ${className ? className : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
    >
      <label className="admin-page-search-form-label">
        <input
          type="search"
          name="search"
          autoComplete="off"
          ref={searchInputRef}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setInputIsChanged(true);
            } else {
              setInputIsChanged(false);
            }

            if (onChange) {
              onChange(e.target.value);
            }
          }}
          placeholder="Qidirish"
          className="js-search-input admin-page-search-form-input"
        />

        {/* virtual placeholder */}
        <div
          className={`${
            inputIsChanged ? "hidden" : ""
          } admin-page-search-form-virtual-placeholder`}
        >
          Ctrl + /
        </div>
      </label>

      {/* clear btn */}
      <button
        title="clear"
        type="button"
        aria-label="clear button"
        onClick={() => {
          onChange && onChange("");
          setInputIsChanged(false);
          searchInputRef.current.value = "";
        }}
        className={`${
          !inputIsChanged ? "hidden" : ""
        } admin-page-search-form-btn`}
      >
        <img
          width={24}
          height={24}
          src={crossIcon}
          alt="cross icon"
          className="admin-page-search-form-btn-icon"
        />
      </button>

      {/* submit btn */}
      <button
        title="submit"
        aria-label="submit button"
        className="admin-page-search-form-btn"
      >
        <img
          width={24}
          height={24}
          src={searchIcon}
          alt="search icon"
          className="admin-page-search-form-btn-icon"
        />
      </button>
    </form>
  );
};

export default SearchForm;
