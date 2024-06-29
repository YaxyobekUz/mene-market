import React from "react";
import { Link } from "react-router-dom";

// components
import BalanceHistory from "../components/BalanceHistory";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";

const BalanceHistoryPage = () => {
  return (
    <>
      <div className="admin-page-header">
        <Link to="/admin/dashboard">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            className="w-6 h-6"
            alt="arrow left icon"
          />
        </Link>

        {/* page title */}
        <h1>Balans tarixi</h1>
      </div>

      <BalanceHistory />
    </>
  );
};

export default BalanceHistoryPage;
