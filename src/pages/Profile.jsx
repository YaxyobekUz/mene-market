import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userDataSlice, { setUserData } from "../store/slices/userDataSlice";

const Profile = () => {
  const { userData } = useSelector((store) => store.userData);

  if (!userData) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className="space-y-10"
    >
      <div className="space-y-6">
        <h2 className="text-semibold-20">Shaxsiy ma’lumotlar</h2>
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Ism</span>
            <input
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

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">
              Telefon raqam
            </span>
            <input
              disabled
              className="disabled:opacity-50"
              type="tel"
              placeholder="Telefon raqam"
              required
            />
            <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
              Iltimos faqat raqam va + belgilaridan foydalaning
            </span>
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">E-pochta</span>
            <input
              type="email"
              placeholder="E-pochta"
              defaultValue={userData.email}
              required
            />
            <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
              E-pochta formatini to 'g' ri kiriting
            </span>
          </label>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-semibold-20">Parol</h2>
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Eski parol</span>
            <div className="w-full">
              <input
                name="password"
                defaultValue={userData.password}
                type="password"
                placeholder="Eski parol"
                required
              />
              <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
                Parol kamida 4 ta son va 4 ta harfdan iborat bo 'lishi kerak
              </span>
            </div>
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Yangi parol</span>
            <input
              type="password"
              name="password"
              placeholder="Yangi parol"
              required
            />
            <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
              Parollar mos kelmadi
            </span>
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">
              Yangi parolni takrorlang
            </span>
            <input
              type="password"
              name="password"
              placeholder="Yangi parolni takrorlang"
              required
            />
            <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
              Parollar mos kelmadi
            </span>
          </label>

          <button className="btn-primary_linear-blue px-10 py-3 rounded-lg">
            <span className="text-regular-16">O’zgarishlarni saqlash</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
