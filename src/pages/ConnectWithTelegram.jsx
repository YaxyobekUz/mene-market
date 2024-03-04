import React from "react";

const ConnectWithTelegram = () => {
  return (
    <form>
      <div className="space-y-6">
        <h2 className="text-semibold-20">Telegram bilan bog'lash</h2>
        <div className="space-y-6">
          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Telegram id raqamingiz</span>
            <input type="text" placeholder="Id raqam" required />
          </label>

          <label className="block space-y-3">
            <span className="text-regular-13 text-[#C4C5C4]">Telegram foydalanuvchi nomi (Ixtiyoriy)</span>
            <input type="text" placeholder="Foydalanuvchi nomi" />
          </label>

          <button className="btn-primary_linear-blue px-10 py-3 rounded-lg">
            <span className="text-regular-16">Biriktirish</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConnectWithTelegram;
