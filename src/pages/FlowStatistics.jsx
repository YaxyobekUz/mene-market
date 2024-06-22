import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// chart
import { ResponsivePie } from "@nivo/pie";

// components
import CopyBtn from "../components/CopyBtn";

// helpers
import { formatNumber, offerLinkClientsStatistics } from "../helpers/helpers";

// images
import eyeIcon from "../assets/images/svg/eye-white.svg";
import arrowLeft from "../assets/images/svg/arrow-left.svg";
import moneyIcon from "../assets/images/svg/money-send.svg";
import DotsLoader from "../components/DotsLoader";

const FlowStatistics = () => {
  const { flowId } = useParams();
  const [loader, setLoader] = useState(true);
  const [offerLink, setOfferLink] = useState(null);
  const userData = useSelector((store) => store.userData);
  const [offerLinkStatisticsData, setOfferLinkStatisticsData] = useState([
    {
      id: "Qabul qilindi",
      label: "Qabul qilindi",
      value: 0,
    },
    {
      id: "Yetkazilmoqda",
      label: "Yetkazilmoqda",
      value: 0,
    },
    {
      id: "Yetkazildi",
      label: "Yetkazildi",
      value: 0,
    },
    {
      id: "Qaytib keldi",
      label: "Qaytib Keldi",
      value: 0,
    },
    {
      id: "Kutilmoqda",
      label: "Kutilmoqda",
      value: 0,
    },
    {
      id: "Arxivlandi",
      label: "Arxivlandi",
      value: 0,
    },
  ]);

  // set offer link data
  useEffect(() => {
    setLoader(true);

    // find offer link
    const findOfferLink = userData.offerLinksData.find((offerLink) => {
      return offerLink.offerLinkId === flowId;
    });

    if (findOfferLink) {
      setOfferLink(findOfferLink);

      // set offer link statistics data
      const statisticsObj = offerLinkClientsStatistics(findOfferLink.clients);

      setOfferLinkStatisticsData([
        {
          id: "Qabul qilindi",
          label: "Qabul qilindi",
          value: statisticsObj["status 0"] || 0,
        },
        {
          id: "Yetkazilmoqda",
          label: "Yetkazilmoqda",
          value: statisticsObj["status 1"] || 0,
        },
        {
          id: "Yetkazildi",
          label: "Yetkazildi",
          value: statisticsObj["status 2"] || 0,
        },
        {
          id: "Qaytib keldi",
          label: "Qaytib Keldi",
          value: statisticsObj["status 3"] || 0,
        },
        {
          id: "Kutilmoqda",
          label: "Kutilmoqda",
          value: statisticsObj["status 4"] || 0,
        },
        {
          id: "Arxivlandi",
          label: "Arxivlandi",
          value: statisticsObj["status 5"] || 0,
        },
      ]);
    }

    setTimeout(() => setLoader(false), 500);
  }, [flowId]);

  return (
    <div>
      {/* page header */}
      <div className="admin-page-header">
        <Link title="back" aria-label="back" to="/admin/statistics">
          <img width={24} height={24} src={arrowLeft} alt="arrow left icon" />
        </Link>

        {/* page title */}
        <h1>Oqim statistikasi</h1>
      </div>

      {/* page body */}
      <section className="admin-page-body">
        {!loader ? (
          <div className="space-y-5">
            {/* section header */}
            <div className="bg-white/5 p-5 rounded-lg">
              <div className="flex-center-between gap-1 max-768:flex-col max-768:items-start max-768:gap-4">
                <h2 className="grow text-medium-18 line-clamp-1 max-1024:text-regular-16 max-640:line-clamp-3">
                  {offerLink.name}
                </h2>

                {/* header actions */}
                <div className="flex-center gap-3 shrink-0 max-768:justify-between max-768:w-full max-640:flex-col max-640:items-start">
                  {/* copy btn */}
                  <CopyBtn
                    darkTheme={true}
                    className="flex-center gap-2"
                    notification="Havoladan buferga nusxa olindi"
                    text={
                      "https://mene-market.netlify.app/flow/" +
                      offerLink.offerLinkId
                    }
                  >
                    <span className="text-regular-16 text-start">
                      Havoladan buferga nusxa olish
                    </span>
                  </CopyBtn>

                  {/* product link */}
                  <Link
                    className="flex-center gap-2"
                    to={"/products/product/" + offerLink.productId}
                  >
                    <img
                      src={eyeIcon}
                      width={24}
                      height={24}
                      alt="product link icon"
                      className="w-6 h-6"
                    />

                    <span className="text-regular-16">Mahsulotni ko'rish</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* section main content (statistics) */}
            <div className="grid grid-cols-2 gap-6 max-768:grid-cols-1">
              {/* pie chart wrapper */}
              <div className="flex-center justify-center w-full h-full">
                <div className="pie-chart w-full h-[440px] max-768:w-3/4 max-768:h-auto max-768:aspect-square max-450:w-full">
                  <ResponsivePie
                    padAngle={1}
                    borderWidth={0}
                    cornerRadius={6}
                    innerRadius={0.3}
                    activeOuterRadiusOffset={8}
                    enableArcLinkLabels={false}
                    data={offerLinkStatisticsData}
                    margin={{ top: 12, right: 12, bottom: 12, left: 12 }}
                  />
                </div>
              </div>

              {/* arc link labels wrapper */}
              <div className="flex flex-col justify-center bg-white/5 p-5 rounded-lg">
                {/* orders count */}
                <strong className="flex-center-between gap-3 bg-white/5 py-5 px-3.5 rounded-t-lg max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                  <span className="font-medium">Jami buyurtmalar</span>

                  {/* count */}
                  <span className="text-regular-16 max-450:text-end">
                    {formatNumber(offerLink.clients.length)} ta
                  </span>
                </strong>

                {/* line */}
                <div className="divider max-450:mb-4"></div>

                {/* arc link labels */}
                <ul>
                  <li className="flex-center-between gap-3 py-5 px-3.5 rounded-lg even:bg-white/5 max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                    {/* arc link label */}
                    <div className="flex-center gap-3">
                      <span className="inline-block w-6 h-6 bg-[#e8c1a0] rounded-full"></span>
                      <span className="text-regular-16">Qabul qilindi</span>
                    </div>

                    {/* count */}
                    <span className="text-regular-16 max-450:text-end">
                      {formatNumber(offerLinkStatisticsData[0].value)} ta
                    </span>
                  </li>

                  <li className="flex-center-between gap-3 py-5 px-3.5 rounded-lg even:bg-white/5 max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                    {/* arc link label */}
                    <div className="flex-center gap-3">
                      <span className="inline-block w-6 h-6 bg-[#f47560] rounded-full"></span>
                      <span className="text-regular-16">Yetkazilmoqda</span>
                    </div>

                    {/* count */}
                    <span className="text-regular-16 max-450:text-end">
                      {formatNumber(offerLinkStatisticsData[1].value)} ta
                    </span>
                  </li>

                  <li className="flex-center-between gap-3 py-5 px-3.5 rounded-lg even:bg-white/5 max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                    {/* arc link label */}
                    <div className="flex-center gap-3">
                      <span className="inline-block w-6 h-6 bg-[#f1e15b] rounded-full"></span>
                      <span className="text-regular-16">Yetkazildi</span>
                    </div>

                    {/* count */}
                    <span className="text-regular-16 max-450:text-end">
                      {formatNumber(offerLinkStatisticsData[2].value)} ta
                    </span>
                  </li>

                  <li className="flex-center-between gap-3 py-5 px-3.5 rounded-lg even:bg-white/5 max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                    {/* arc link label */}
                    <div className="flex-center gap-3">
                      <span className="inline-block w-6 h-6 bg-[#e8a838] rounded-full"></span>
                      <span className="text-regular-16">Qaytib Keldi</span>
                    </div>

                    {/* count */}
                    <span className="text-regular-16 max-450:text-end">
                      {formatNumber(offerLinkStatisticsData[3].value)} ta
                    </span>
                  </li>

                  <li className="flex-center-between gap-3 py-5 px-3.5 rounded-lg even:bg-white/5 max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                    {/* arc link label */}
                    <div className="flex-center gap-3">
                      <span className="inline-block w-6 h-6 bg-[#61cdbb] rounded-full"></span>
                      <span className="text-regular-16">Kutilmoqda</span>
                    </div>

                    {/* count */}
                    <span className="text-regular-16 max-450:text-end">
                      {formatNumber(offerLinkStatisticsData[4].value)} ta
                    </span>
                  </li>

                  <li className="flex-center-between gap-3 py-5 px-3.5 rounded-lg even:bg-white/5 max-450:flex-col max-450:gap-2 max-450:items-stretch max-450:p-2.5">
                    {/* arc link label */}
                    <div className="flex-center gap-3">
                      <span className="inline-block w-6 h-6 bg-[#97e3d5] rounded-full"></span>
                      <span className="text-regular-16">Arxivlandi</span>
                    </div>

                    {/* count */}
                    <span className="text-regular-16 max-450:text-end">
                      {formatNumber(offerLinkStatisticsData[5].value)} ta
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* section footer */}
            <div className="bg-white/5 p-5 rounded-lg">
              <div className="flex-center-between gap-1 max-768:flex-col max-768:items-start max-768:gap-4">
                {/* copy btn */}
                <CopyBtn
                  darkTheme={true}
                  text={offerLink.offerLinkId}
                  className="flex-center gap-2"
                  notification="Oqim ID sidan buferga nusxa olindi"
                >
                  <span className="text-regular-16 text-start">
                    Oqim ID sidan buferga nusxa olish
                  </span>
                </CopyBtn>

                {/* offer link donate price */}
                {offerLink.allowDonation && (
                  <div className="flex-center gap-2">
                    <img
                      width={24}
                      height={24}
                      src={moneyIcon}
                      alt="product link icon"
                      className="w-7 h-6 shrink-0"
                    />

                    <span className="text-regular-16">
                      <span>Hayriya uchun ajratilingan narx: </span>
                      <span>{formatNumber(offerLink.donationPrice)}</span>
                      <span> so'm</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <DotsLoader className="py-96" />
        )}
      </section>
    </div>
  );
};

export default FlowStatistics;
