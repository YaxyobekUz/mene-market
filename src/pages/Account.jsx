import React from "react";

const Account = () => {
  return (
    <div className="opacity-30 space-y-6 max-450:space-y-5">
      {/* title */}
      <h1 className="text-semibold-20">Login & parol</h1>

      {/* form */}
      <form className="profile-page-from">
        {/* email */}
        <label>
          <span>E-pochta</span>
          <input
            type="email"
            name="user email"
            placeholder="E-pochta"
            className="js-email-input"
          />
        </label>

        {/* password */}
        <label>
          <span>Parol</span>
          <input
            type="password"
            name="password"
            placeholder="Parol"
            className="js-password-input"
          />
        </label>

        {/* submit btn  */}
        <button>O'zgartirish</button>
      </form>
    </div>
  );
};

export default Account;
