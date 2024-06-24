import React from "react";

const ConnectWithTelegram = () => {
  return (
    <div className="space-y-6 max-450:space-y-5">
      <h1 className="text-semibold-20">Telegram bilan bog'lash</h1>

      <form className="profile-page-from">
        {/* telegram id number */}
        <label>
          <span>Telegram id raqamingiz</span>
          <input
            type="text"
            maxLength={32}
            autoComplete="off"
            placeholder="Id raqam"
            name="telegram id number"
          />
        </label>

        {/* submit btn */}
        <button>Biriktirish</button>
      </form>
    </div>
  );
};

export default ConnectWithTelegram;
