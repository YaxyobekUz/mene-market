import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const { userData } = useSelector((store) => store.userData);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <h1 className="text-semibold-20">Login & parol</h1>
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">E-pochta</span>
            <input
              type="email"
              placeholder="E-pochta"
              defaultValue={userData && userData.email}
              required
            />
            <span className="hidden text-regular-14 text-primary-red-500 italic !mt-2">
              E-pochta formatini to 'g' ri kiriting
            </span>
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

          <button className="btn-primary_linear-blue px-10 py-3 rounded-lg max-640:px-6 max-640:py-2">
            <span className="text-regular-16">O’zgarishlarni saqlash</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
