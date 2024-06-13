import React, { useState } from "react";

// axios & redux
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import userDataSlice, { setUserData } from "../store/slices/userDataSlice";

// helpers
import { getElement } from "../helpers/helpers";
import { defaultRegex } from "../helpers/regexes";

const Profile = () => {
  const [changeUserData, setChangeUserData] = useState(false);
  const { userData } = useSelector((store) => store.userData);

  const formatInputValues = (input) => {
    const value = input.value;
    const words = value.trim().split(/\s+/);
    const filteredWords = words.filter((word) => word !== "");
    const formattedText = filteredWords.join(" ");
    input.value = formattedText;
  };

  // change user data
  const onSubmit = (e) => {
    const nameInput = getElement(e, ".js-name-input");
    const surnameInput = getElement(e, ".js-surname-input");

    // format input values
    formatInputValues(nameInput);
    formatInputValues(surnameInput);

    // check input values
    const validateSurnameInput = validateInput(
      defaultRegex,
      surnameInput,
      "is-invalid"
    );
    const validateNameInput = validateInput(
      defaultRegex,
      nameInput,
      "is-invalid"
    );

    if (validateSurnameInput || validateNameInput) {
      axios.put(
        "/api/User",
        {},
        {
          header: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
    }
  };

  return (
    <div className="space-y-6">
      <h1>Profil</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        className="space-y-6"
      >
        <label className="block space-y-3">
          <span className="text-regular-13 text-[#C4C5C4]">Ism</span>
          <input
            className="js-name-input"
            type="text"
            placeholder="Ism"
            defaultValue={userData ? userData.firstName : ""}
          />
          <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
            Ismingizni kiriting
          </span>
        </label>

        <label className="block space-y-3">
          <span className="text-regular-13 text-[#C4C5C4]">Familiya</span>
          <input
            className="js-surname-input"
            type="text"
            placeholder="Familiya(Ixtiyoriy)"
            defaultValue={userData ? userData.lastName : ""}
          />
          <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
            Familiyangizni kiriting
          </span>
        </label>

        <button
          disabled={!changeUserData}
          className="btn-primary_linear-blue px-10 py-3 rounded-lg max-640:px-6 max-640:py-2"
        >
          <span className="text-regular-16">O’zgarishlarni saqlash</span>
        </button>
      </form>
    </div>
  );
};

export default Profile;
