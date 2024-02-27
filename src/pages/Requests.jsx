import React from "react";
import { Link } from "react-router-dom";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
import search from "../assets/images/svg/search-icon-white.svg";
const Requests = () => {
  return (
    <div className="w-full">
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
        <h1>So'rovlar</h1>
      </div>

      <div className="w-full admin_page-body">
        <div className="admin_page-body_input-wrapper mb-6">
          <input
            placeholder="Qidirish"
            type="text"
            className="admin_page-body_input"
          />
          <img
            width={24}
            height={24}
            src={search}
            alt="search icon"
            className="w-6 h-6"
          />
        </div>

        <table className="block">
          <thead>
            <tr>
              <th className="w-1/6">Mahsulot</th>
              <th className="w-1/6">Buyurtmachi</th>
              <th className="w-1/6">Manzil</th>
              <th className="w-1/6">Sana</th>
              <th className="w-1/6">Oqim</th>
              <th className="w-1/6">Holati</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-skyblue">Muzlatilgan</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-danger">To'xtatilgan</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <div className="btn-success">Aktiv</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/6">Airpods Max</td>
              <td className="w-1/6">Lorem ipsum</td>
              <td className="w-1/6">
                <address>Lorem ipsum</address>
              </td>
              <td className="w-1/6">14/12/23</td>
              <td className="w-1/6">Lorem ipsum</td>
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

export default Requests;