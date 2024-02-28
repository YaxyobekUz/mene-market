import React from "react";
import { Link } from "react-router-dom";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
import iconSuccess from "../assets/images/svg/icon-success.svg";
import iconDanger from "../assets/images/svg/icon-danger.svg";
const BalanceHistory = () => {
  return (
    <div>
      <div className="admin_page-header">
        <Link to="/admin">
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
      <div className="admin_page-body">
        <ul className="space-y-6">
          <li className="space-y-4">
            <h3 className="text-regular-13 text-primary-gray-500">Bugun</h3>
            <ul className="space-y-4">
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconDanger}
                    alt="arrow bottom"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-primary-red-500">-923</p>
              </li>
            </ul>
          </li>

          <li className="space-y-4">
            <h3 className="text-regular-13 text-primary-gray-500">Bugun</h3>
            <ul className="space-y-4">
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconDanger}
                    alt="arrow bottom"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-primary-red-500">-923</p>
              </li>

              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
            </ul>
          </li>

          <li className="space-y-4">
            <h3 className="text-regular-13 text-primary-gray-500">Kecha</h3>
            <ul className="space-y-4">
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
              <li className="flex-center-between gap-5">
                <div className="flex-center gap-4">
                  <img
                    width={36}
                    height={36}
                    src={iconSuccess}
                    alt="arrow top"
                    className="w-9 h-9"
                  />
                  <div>
                    <h4 className="text-regular-16">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="text-regular-14 text-[#C4C5C4]">
                      26-03-2024, 13 : 45
                    </p>
                  </div>
                </div>
                <p className="text-regular-14 text-secondary-green-500">+123</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BalanceHistory;
