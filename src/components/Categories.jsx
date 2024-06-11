import React from "react";
import { Link } from "react-router-dom";

// data
import { productTypesData } from "../data/data";

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="mb-6">Kategoriya</h2>

        {/* main content */}
        <ul className="flex gap-8 overflow-auto scroll_hidden max-768:gap-6 max-640:gap-5 max-375:gap-4">
          {productTypesData.map((item, index) => (
            <li key={index}>
              <Link
                to={`/products/${item.value}`}
                className="flex-center flex-col gap-2 w-36 group max-450:w-32"
              >
                <span
                  className="w-32 h-32 rounded-full p-4"
                  style={{ backgroundColor: item.backgroundColor.light }}
                >
                  <span
                    style={{ backgroundColor: item.backgroundColor.normal }}
                    className="flex-center justify-center relative w-24 h-24 rounded-full text-center"
                  >
                    <img
                      width={64}
                      height={64}
                      alt={item.image.alt}
                      src={item.image.src}
                      className="absolute w-[72px] h-[72px] object-cover object-center transition-transform duration-300 group-hover:scale-110 max-450:w-14 max-450:h-14"
                    />
                  </span>
                </span>

                {/* title */}
                <h3 className="text-regular-16 font-medium text-center">
                  {item.label}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
