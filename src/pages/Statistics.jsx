import React, { useState } from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// helpers
import { search } from "../helpers/helpers.js";

// components
import SearchForm from "../components/SearchForm";
import EmptyData from "../components/EmptyData.jsx";

// images
import flowIcon from "../assets/images/svg/flow.svg";

const Statistics = () => {
  const userData = useSelector((store) => store.userData);
  const offerLinksData = userData.offerLinksData;
  const [offerLinks, setOfferLinks] = useState(offerLinksData);

  // calculate offer link clients statistics by status type
  const offerLinkClientsStatistics = (clients) => {
    if (clients.length > 0) {
      const statusCount = {};
      clients.forEach((client) => {
        const status = client.statusType;
        statusCount[`status ${status}`] =
          (statusCount[`status ${status}`] || 0) + 1;
      });
      return statusCount;
    } else {
      return 0;
    }
  };

  // search offer links
  const searchOfferLinks = (value) => {
    if (value.length > 0) {
      const searchedOfferLinks = search(offerLinksData, "name", value);
      setOfferLinks(searchedOfferLinks);
    } else if (
      value.length === 0 &&
      offerLinks.length !== offerLinksData.length
    ) {
      setOfferLinks(offerLinksData);
    }
  };

  return (
    <div className="w-full">
      <div className="admin-page-body px-0">
        {/* page header */}
        <div className="container">
          <div className="flex-center-between gap-5 mb-6 max-640:flex-col max-640:items-start">
            <h1 className="text-medium-18">Oqimlar statistikasi</h1>

            {/* search form */}
            <SearchForm
              onChange={searchOfferLinks}
              className="max-w-md max-640:max-w-full"
            />
          </div>
        </div>

        {/* page body (main content) */}
        {/* offer links statistics */}
        <div className="overflow-x-auto scroll_gray">
          {offerLinks.length > 0 ? (
            <table>
              {/* table header */}
              <thead>
                <tr>
                  <th className="w-[23%] text-start">Oqim</th>
                  <th className="w-[10%]">Buyurtmalar</th>
                  <th className="w-[10%]">Qabul qilindi</th>
                  <th className="w-[10%]">Yetkazilmoqda</th>
                  <th className="w-[10%]">Yetkazildi</th>
                  <th className="w-[10%]">Qaytib Keldi</th>
                  <th className="w-[10%]">Kutilmoqda</th>
                  <th className="w-[10%]">Arxivlandi</th>
                  <th className="w-[7%]">Ba'tafsil</th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {offerLinks.map((offerLink) => {
                  const statistics = offerLinkClientsStatistics(
                    offerLink.clients
                  );
                  return (
                    <tr key={offerLink.offerLinkId}>
                      <td className="!justify-normal !max-w-[23%] w-full !text-start">
                        <span className="line-clamp-2">{offerLink.name}</span>
                      </td>
                      <td className="w-[10%]">{offerLink.clients.length}</td>
                      <td className="w-[10%]">{statistics["status 0"] || 0}</td>
                      <td className="w-[10%]">{statistics["status 1"] || 0}</td>
                      <td className="w-[10%]">{statistics["status 2"] || 0}</td>
                      <td className="w-[10%]">{statistics["status 3"] || 0}</td>
                      <td className="w-[10%]">{statistics["status 4"] || 0}</td>
                      <td className="w-[10%]">{statistics["status 5"] || 0}</td>
                      <td className="w-[7%]">
                        <Link
                          className="p-4"
                          title="statistics"
                          aria-label="statistics"
                          to={"/admin/statistics/flow/" + offerLink.offerLinkId}
                        >
                          <img
                            width={16}
                            height={16}
                            src={flowIcon}
                            alt="offer link icon"
                            className="w-4 h-4"
                          />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : offerLinksData.length > 0 ? (
            <EmptyData
              contentSmall={true}
              className="container"
              title="Hech qanday oqim topilmadi!"
              description="Qidiruv natijasiga ko'ra hech qanday oqim topilmadi."
            />
          ) : (
            <EmptyData
              contentSmall={true}
              className="container space-y-2"
              title="Hech qanday oqim mavjud emas"
              description="Ushbu sahifada hech qanday oqim statistikasi mavjud emas."
            >
              <p className="text-base font-normal opacity-80">
                Siz yaratgan oqimlar statistikasi bu yerda ko'rinadi. <br />
                Siz hech qanday oqim yaratmagansiz. Oqim yaratmoqchi bo'lsangiz{" "}
                <Link
                  to="/admin/market"
                  className="text-primary-skyblue-500 font-medium underline"
                >
                  Market
                </Link>{" "}
                sahifasiga tashrif buyuring!
              </p>
            </EmptyData>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
