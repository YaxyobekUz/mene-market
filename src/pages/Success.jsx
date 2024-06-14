import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// antd
import { Skeleton } from "antd";

// redux
import { useSelector } from "react-redux";

// helpers
import { successNotification } from "../helpers/helpers";

// images
import packageBox from "../assets/images/svg/package-box.svg";
import successImg from "../assets/images/svg/inbox-success.svg";

const Success = () => {
  const [loader, setLoader] = useState(true);
  const [request, setRequest] = useState(null);
  const productRequestsData = useSelector((store) => store.productRequestsData);

  // set request data
  useEffect(() => {
    if (productRequestsData.requests.length > 0) {
      const requestData =
        productRequestsData.requests[productRequestsData.requests.length - 1];
      setRequest(requestData);
    }
    setTimeout(() => setLoader(false), 500);
  }, []);

  return (
    <div className="max-540:pb-24">
      <div className="container">
        {!loader ? (
          request ? (
            <div className="flex justify-center flex-col gap-5">
              {/* inbox success image */}
              <img
                width={96}
                height={96}
                src={successImg}
                alt="inbox success image"
                className="w-24 h-24 max-640:h-20 max-640:w-20 max-375:w-16 max-375:h-16"
              />

              {/* title */}
              <h1>Arizangiz qabul qilindi!</h1>

              {/* description */}
              <p className="max-w-3xl">
                Ba'tafsil ma'lumot uchun operatorlarimiz qisqa vaqt ichida siz
                bilan bog'lanishadi. Siz kiritgan telefon raqami faol holatda
                bo'lib turishini so'rab qolamiz!
              </p>

              {/* buttons */}
              <div className="flex items-center flex-wrap gap-4">
                <Link className="main-btn" to={-1}>
                  Ortga qaytish
                </Link>

                {/* product link */}
                <Link
                  className="main-btn"
                  to={`/products/product/${request.productId}`}
                >
                  Mahsulotni ko'rish
                </Link>

                {/* request id */}
                <button
                  className="main-btn"
                  onClick={(e) => {
                    e.target.disabled = true;
                    navigator.clipboard.writeText(request.id);
                    successNotification("Ariza raqami nusxalandi");
                    setTimeout(() => (e.target.disabled = false), 1500);
                  }}
                >
                  Ariza raqamini nusxalash
                </button>

                {/* products link */}
                <Link className="main-btn" to="/products">
                  Boshqa mahsulotlar
                </Link>
              </div>

              {/* request body */}
              <div className="w-full">
                <ul className="w-full space-y-5">
                  <li className="flex-end w-full gap-2">
                    <h3 className="text-lg whitespace-nowrap">Mijoz</h3>
                    <div className="grow min-w-[40px] border-b-2 border-dotted border-primary-black-800/50 mb-2"></div>
                    <p className="text-regular-16 line-clamp-1 capitalize">
                      {request.userName}
                    </p>
                  </li>

                  {/* user phone number  */}
                  <li className="flex-end w-full gap-2">
                    <h3 className="text-lg whitespace-nowrap">Telefon raqam</h3>
                    <div className="grow min-w-[40px] border-b-2 border-dotted border-primary-black-800/50 mb-2"></div>
                    <button
                      onClick={(e) => {
                        e.target.disabled = true;
                        successNotification("Telefon raqami nusxalandi");
                        setTimeout(() => (e.target.disabled = false), 1500);
                        navigator.clipboard.writeText(request.userPhoneNumber);
                      }}
                      className="text-regular-16 line-clamp-1 transition-opacity duration-300 disabled:opacity-50"
                    >
                      {request.userPhoneNumber}
                    </button>
                  </li>

                  {/* user address */}
                  <li className="flex-end w-full gap-2">
                    <h3 className="text-lg whitespace-nowrap">Manzil</h3>
                    <div className="grow min-w-[40px] border-b-2 border-dotted border-primary-black-800/50 mb-2"></div>
                    <p className="text-regular-16 line-clamp-1">
                      {request.userRegion}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex-center gap-4">
              <img
                width={72}
                height={72}
                src={packageBox}
                alt="package box"
                className="w-[72px] h-[72px]"
              />
              <div className="space-y-1">
                <h1 className="text-2xl">Ma'lumotlar mavjud emas!</h1>
                <p className="opacity-80">
                  Sahifada hech qanday arzia ma'lumotlari mavjud emas!
                </p>
              </div>
            </div>
          )
        ) : (
          <div className="flex justify-center flex-col gap-5">
            {/* inbox success image */}
            <Skeleton.Image
              active
              className="!w-24 !h-24 max-640:!h-20 max-640:!w-20 max-375:!w-16 max-375:!h-16"
            />

            {/* title */}
            <Skeleton.Input active className="!w-2/3 !h-10 max-640:!h-8" />

            {/* description */}
            <div className="flex flex-col gap-1">
              <Skeleton.Input active className="!w-3/4 !h-5 max-640:!w-full" />
              <Skeleton.Input active className="!w-2/3 !h-5 max-640:!w-3/4 " />
            </div>

            {/* buttons */}
            <div className="flex items-center flex-wrap gap-4">
              <Skeleton.Button
                active
                className="!w-40 !h-[46px] !rounded-full"
              />
              <Skeleton.Button
                active
                className="!w-52 !h-[46px] !rounded-full"
              />
              <Skeleton.Button
                active
                className="!w-64 !h-[46px] !rounded-full"
              />
              <Skeleton.Button
                active
                className="!w-56 !h-[46px] !rounded-full"
              />
            </div>

            {/* request body */}
            <div className="w-full">
              <ul className="w-full space-y-5">
                <li className="flex-end w-full gap-2">
                  <Skeleton.Input active className="!w-40 !h-7 !min-w-0" />
                  <Skeleton.Input
                    active
                    className="grow !min-w-[40px] !h-1 mb-0.5"
                  />
                  <Skeleton.Input active className="!w-40 !h-6 !min-w-0" />
                </li>
                <li className="flex-end w-full gap-2">
                  <Skeleton.Input active className="!w-40 !h-7 !min-w-0" />
                  <Skeleton.Input
                    active
                    className="grow !min-w-[40px] !h-1 mb-0.5"
                  />
                  <Skeleton.Input active className="!w-40 !h-6 !min-w-0" />
                </li>
                <li className="flex-end w-full gap-2">
                  <Skeleton.Input active className="!w-40 !h-7 !min-w-0" />
                  <Skeleton.Input
                    active
                    className="grow !min-w-[40px] !h-1 mb-0.5"
                  />
                  <Skeleton.Input active className="!w-40 !h-6 !min-w-0" />
                </li>
                <li className="flex-end w-full gap-2">
                  <Skeleton.Input active className="!w-40 !h-7 !min-w-0" />
                  <Skeleton.Input
                    active
                    className="grow !min-w-[40px] !h-1 mb-0.5"
                  />
                  <Skeleton.Input active className="!w-40 !h-6 !min-w-0" />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
