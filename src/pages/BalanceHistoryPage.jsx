import React from "react";
import { Link } from "react-router-dom";
import BalanceHistory from "../components/BalanceHistory";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
const BalanceHistoryPage = () => {
  return (
    <>
      <div className="admin_page-header">
        <Link to="/admin/dashboard">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            alt="arrow left icon image"
            className="w-6 h-6"
          />
        </Link>
        <h1>Balans tarixi</h1>
      </div>

      <BalanceHistory />
    </>
  );
};

export default BalanceHistoryPage;
