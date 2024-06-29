import React from "react";

// components
import EmptyData from "./EmptyData";

// redux
import { useSelector } from "react-redux";

// helpers
import { formatDate, formatNumber, formatTime } from "../helpers/helpers";

// images
import iconSuccess from "../assets/images/svg/icon-success.svg";

const BalanceHistory = () => {
  const { userData } = useSelector((store) => store.userData);

  return (
    <div className="admin-page-body !px-0 py-6 max-1024:py-5 max-450:py-4">
      {/* content title */}
      <h2 className="text-medium-18 px-6 max-1024:px-5 max-640:text-base max-450:px-4 max-375:text-regular-14 mb-5">
        Tranzaktsiyalaringiz
      </h2>

      {/* list */}
      {userData.balanceHistorys && userData.balanceHistorys.length > 0 ? (
        <ul>
          {userData.balanceHistorys.map((item) => (
            <li
              key={item.id}
              className="flex-center-between gap-5 py-2 px-6 transition-colors even:bg-white/5 hover:bg-white/10 max-1024:px-5 max-540:flex-col max-540:items-start max-450:px-4"
            >
              <div className="flex-center gap-4">
                <img
                  width={36}
                  height={36}
                  src={iconSuccess}
                  alt="arrow top"
                  className="w-9 h-9 max-450:w-8 max-450:h-8"
                />

                {/* information */}
                <div className="space-y-1.5">
                  <h4 className="text-regular-16 line-clamp-1 max-450:text-regular-14 max-450:mb-1">
                    #{item.id}
                  </h4>

                  {/* time */}
                  <div className="flex-center gap-3.5 text-regular-14 text-primary-gray-500">
                    <span className="text-inherit">
                      {formatDate(item.transactionDate)}
                    </span>
                    <span className="text-inherit">-</span>
                    <span className="text-inherit">
                      {formatTime(item.transactionDate)}
                    </span>
                  </div>
                </div>
              </div>

              {/* price */}
              <p className="text-regular-14 text-secondary-green-500">
                <span>{formatNumber(item.amount)}</span>
                <span> so'm</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyData
          contentSmall={true}
          className="px-6 max-1024:px-5 max-450:px-4"
          title="Hech qanday tranzaksiya aniqlanmadi!"
          description="Siz hali hech qanday tranzaksiya amalga oshirmadingiz."
        />
      )}
    </div>
  );
};

export default BalanceHistory;
