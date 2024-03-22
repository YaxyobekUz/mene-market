import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userDataSlice, { setUserData } from "../store/slices/userDataSlice";

const Profile = () => {
  const { userData } = useSelector((store) => store.userData);

  if (!userData) {
    return null;
  }

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
            className="placeholder-shown: invalid:border-primary-red-500 invalid:!outline-primary-red-500"
            defaultValue={userData.firstName}
            type="text"
            placeholder="Ism"
            required
          />
          <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
            Ismingizni kiriting
          </span>
        </label>

        <label className="block space-y-3">
          <span className="text-regular-13 text-[#C4C5C4]">Familiya</span>
          <input
            defaultValue={userData.lastName}
            type="text"
            placeholder="Familiya(Ixtiyoriy)"
            required
          />
        </label>

        <button
          disabled={false}
          className="btn-primary_linear-blue px-10 py-3 rounded-lg"
        >
          <span className="text-regular-16">O’zgarishlarni saqlash</span>
        </button>
      </form>
    </div>
  );
};

export default Profile;
