import React from "react";

// images
import search from "../assets/images/svg/search-icon-white.svg";
import trash from "../assets/images/svg/trash.svg";
import copy from "../assets/images/svg/copy.svg";
const Flow = () => {
  return (
    <div className="w-full">
      <div className="admin_page-body">
        {/* contenyt header */}
        <div className="flex-center-between mb-6">
          <h1 className="text-medium-18">Havolalar</h1>
          <div className="admin_page-body_input-wrapper">
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
        </div>

        {/* main content */}
        <table className="block">
          <thead>
            <tr>
              <th className="w-1/6 !px-2">Havola nomi</th>
              <th className="w-1/6 !px-2">Havola</th>
              <th className="w-1/6 !px-2">Mahsulot nomi</th>
              <th className="w-[12%] !px-2">Yaratilgan sana</th>
              <th className="w-[20%] !px-2">Lorem, ipsum</th>
              <th className="w-1/6 !px-2">Holati</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/6 !px-2">Choper</td>
              <td className="w-1/6 !px-2">
                <button
                  title="copy"
                  className="flex-center rounded-sm group focus:outline-none"
                >
                  <span className="inline-block">
                    <span className="inline-block group-focus:underline">
                      https://
                    </span>
                    <span className="inline-block group-focus:underline">
                      menemarket/
                    </span>
                    <span className="inline-block group-focus:underline">
                      oqim/
                    </span>
                    <span className="inline-block group-focus:underline">
                      5345345
                    </span>
                  </span>
                  <img
                    width={24}
                    height={24}
                    src={copy}
                    alt="copy"
                    className="shrink-0 w-6 h-6"
                  />
                </button>
              </td>
              <td className="w-1/6 !px-2">Ko’p nasatkali choper</td>
              <td className="w-[12%] !px-2">12/01/24</td>
              <td className="w-[20%] !px-2">
                <label className="flex-center gap-2">
                  <input type="checkbox" className="peer hidden w-0 h-0" />

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-6 h-6 stroke-white peer-checked:stroke-primary-blue-700 peer-checked:fill-white"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>So'rovlarni hududsiz qabul qilish</span>
                </label>
              </td>
              <td className="flex gap-4 w-1/6 !px-2">
                <div title="active" className="btn-success">
                  100%
                </div>
                <button
                  aria-label="delete"
                  title="delete"
                  className="btn-danger !p-[9px]"
                >
                  <img
                    width={24}
                    height={24}
                    src={trash}
                    alt="delete"
                    className="w-6 h-6"
                  />
                </button>
              </td>
            </tr>

            <tr>
              <td className="w-1/6 !px-2">Choper</td>
              <td className="w-1/6 !px-2">
                <button
                  title="copy"
                  className="flex-center rounded-sm group focus:outline-none"
                >
                  <span className="inline-block">
                    <span className="inline-block group-focus:underline">
                      https://
                    </span>
                    <span className="inline-block group-focus:underline">
                      menemarket/
                    </span>
                    <span className="inline-block group-focus:underline">
                      oqim/
                    </span>
                    <span className="inline-block group-focus:underline">
                      5345345
                    </span>
                  </span>
                  <img
                    width={24}
                    height={24}
                    src={copy}
                    alt="copy"
                    className="shrink-0 w-6 h-6"
                  />
                </button>
              </td>
              <td className="w-1/6 !px-2">Ko’p nasatkali choper</td>
              <td className="w-[12%] !px-2">12/01/24</td>
              <td className="w-[20%] !px-2">
                <label className="flex-center gap-2">
                  <input type="checkbox" className="peer hidden w-0 h-0" />

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-6 h-6 stroke-white peer-checked:stroke-primary-blue-700 peer-checked:fill-white"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>So'rovlarni hududsiz qabul qilish</span>
                </label>
              </td>
              <td className="flex gap-4 w-1/6 !px-2">
                <div title="active" className="btn-success">
                  100%
                </div>
                <button
                  aria-label="delete"
                  title="delete"
                  className="btn-danger !p-[9px]"
                >
                  <img
                    width={24}
                    height={24}
                    src={trash}
                    alt="delete"
                    className="w-6 h-6"
                  />
                </button>
              </td>
            </tr>

            <tr>
              <td className="w-1/6 !px-2">Choper</td>
              <td className="w-1/6 !px-2">
                <button
                  title="copy"
                  className="flex-center rounded-sm group focus:outline-none"
                >
                  <span className="inline-block">
                    <span className="inline-block group-focus:underline">
                      https://
                    </span>
                    <span className="inline-block group-focus:underline">
                      menemarket/
                    </span>
                    <span className="inline-block group-focus:underline">
                      oqim/
                    </span>
                    <span className="inline-block group-focus:underline">
                      5345345
                    </span>
                  </span>
                  <img
                    width={24}
                    height={24}
                    src={copy}
                    alt="copy"
                    className="shrink-0 w-6 h-6"
                  />
                </button>
              </td>
              <td className="w-1/6 !px-2">Ko’p nasatkali choper</td>
              <td className="w-[12%] !px-2">12/01/24</td>
              <td className="w-[20%] !px-2">
                <label className="flex-center gap-2">
                  <input type="checkbox" className="peer hidden w-0 h-0" />

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-6 h-6 stroke-white peer-checked:stroke-primary-blue-700 peer-checked:fill-white"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>So'rovlarni hududsiz qabul qilish</span>
                </label>
              </td>
              <td className="flex gap-4 w-1/6 !px-2">
                <div title="active" className="btn-success">
                  100%
                </div>
                <button
                  aria-label="delete"
                  title="delete"
                  className="btn-danger !p-[9px]"
                >
                  <img
                    width={24}
                    height={24}
                    src={trash}
                    alt="delete"
                    className="w-6 h-6"
                  />
                </button>
              </td>
            </tr>

            <tr>
              <td className="w-1/6 !px-2">Choper</td>
              <td className="w-1/6 !px-2">
                <button
                  title="copy"
                  className="flex-center rounded-sm group focus:outline-none"
                >
                  <span className="inline-block">
                    <span className="inline-block group-focus:underline">
                      https://
                    </span>
                    <span className="inline-block group-focus:underline">
                      menemarket/
                    </span>
                    <span className="inline-block group-focus:underline">
                      oqim/
                    </span>
                    <span className="inline-block group-focus:underline">
                      5345345
                    </span>
                  </span>
                  <img
                    width={24}
                    height={24}
                    src={copy}
                    alt="copy"
                    className="shrink-0 w-6 h-6"
                  />
                </button>
              </td>
              <td className="w-1/6 !px-2">Ko’p nasatkali choper</td>
              <td className="w-[12%] !px-2">12/01/24</td>
              <td className="w-[20%] !px-2">
                <label className="flex-center gap-2">
                  <input type="checkbox" className="peer hidden w-0 h-0" />

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-6 h-6 stroke-white peer-checked:stroke-primary-blue-700 peer-checked:fill-white"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>So'rovlarni hududsiz qabul qilish</span>
                </label>
              </td>
              <td className="flex gap-4 w-1/6 !px-2">
                <div title="active" className="btn-success">
                  100%
                </div>
                <button
                  aria-label="delete"
                  title="delete"
                  className="btn-danger !p-[9px]"
                >
                  <img
                    width={24}
                    height={24}
                    src={trash}
                    alt="delete"
                    className="w-6 h-6"
                  />
                </button>
              </td>
            </tr>

            <tr>
              <td className="w-1/6 !px-2">Choper</td>
              <td className="w-1/6 !px-2">
                <button
                  title="copy"
                  className="flex-center rounded-sm group focus:outline-none"
                >
                  <span className="inline-block">
                    <span className="inline-block group-focus:underline">
                      https://
                    </span>
                    <span className="inline-block group-focus:underline">
                      menemarket/
                    </span>
                    <span className="inline-block group-focus:underline">
                      oqim/
                    </span>
                    <span className="inline-block group-focus:underline">
                      5345345
                    </span>
                  </span>
                  <img
                    width={24}
                    height={24}
                    src={copy}
                    alt="copy"
                    className="shrink-0 w-6 h-6"
                  />
                </button>
              </td>
              <td className="w-1/6 !px-2">Ko’p nasatkali choper</td>
              <td className="w-[12%] !px-2">12/01/24</td>
              <td className="w-[20%] !px-2">
                <label className="flex-center gap-2">
                  <input type="checkbox" className="peer hidden w-0 h-0" />

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-6 h-6 stroke-white peer-checked:stroke-primary-blue-700 peer-checked:fill-white"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>So'rovlarni hududsiz qabul qilish</span>
                </label>
              </td>
              <td className="flex gap-4 w-1/6 !px-2">
                <div title="active" className="btn-success">
                  100%
                </div>
                <button
                  aria-label="delete"
                  title="delete"
                  className="btn-danger !p-[9px]"
                >
                  <img
                    width={24}
                    height={24}
                    src={trash}
                    alt="delete"
                    className="w-6 h-6"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Flow;
