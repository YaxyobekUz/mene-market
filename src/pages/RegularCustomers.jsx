import React from "react";
import { Link } from "react-router-dom";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
const RegularCustomers = () => {
  return (
    <div className="w-full">
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
        <h1>Doimiy mijozlar</h1>
      </div>

      <div className="w-full admin_page-body">
        <div className="flex-center-between gap-5 mb-6">
          <p className="text-medium-18">Promokodlar</p>
          <div className="flex gap-2.5">
            <button className="text-secondary-green-500 text-regular-13 p-0.5 rounded-sm focus:outline-secondary-green-500/50">
              Promo-kod yaratish
            </button>
            <button className="text-primary-skyblue-500 text-regular-13 p-0.5 rounded-sm focus:outline-primary-skyblue-500/50">
              Yuborish
            </button>
          </div>
        </div>

        <table className="block">
          <thead>
            <tr>
              <th className="w-1/6">Promocode</th>
              <th className="w-1/6">Tashrif</th>
              <th className="w-1/6">O’rnatishlar</th>
              <th className="w-1/6">Ko’rishlar soni</th>
              <th className="w-1/6">Buyurtma</th>
              <th className="w-1/6">Holati</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-skyblue">Muzlatilgan</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-danger">To'xtatilgan</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">mene-market</td>
              <td className="w-1/6">99</td>
              <td className="w-1/6">81</td>
              <td className="w-1/6">654</td>
              <td className="w-1/6">78</td>
              <td className="w-1/6">
                <div className="btn-danger">To'xtatilgan</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegularCustomers;
