import React from "react";

const Profile = () => {
  return (
    <form className="space-y-10">
      <div className="space-y-6">
        <h2 className="text-semibold-20">Shaxsiy ma’lumotlar</h2>
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Ism</span>
            <input type="text" placeholder="Ism" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">
              Familiya (Ixtiyoriy)
            </span>
            <input type="text" placeholder="Familiya" />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">
              Telefon raqam
            </span>
            <input type="tel" placeholder="Telefon raqam" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">E-pochta</span>
            <input type="email" placeholder="E-pochta" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Viloyat</span>
            <input type="text" placeholder="Viloyat" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Tuman</span>
            <input type="text" placeholder="Tuman" required />
          </label>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-semibold-20">Parol</h2>
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Eski parol</span>
            <input type="text" placeholder="Eski parol" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Yangi parol</span>
            <input type="text" placeholder="Yangi parol" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">
              Yangi parolni takrorlang
            </span>
            <input
              type="text"
              placeholder="Yangi parolni takrorlang"
              required
            />
          </label>

          <button className="btn-primary_linear-blue px-10 py-3 rounded-lg">
            <span className="text-regular-16">
              O’zgarishlarni saqlash
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
