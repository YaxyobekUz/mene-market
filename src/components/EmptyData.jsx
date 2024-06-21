import React from "react";

// images
import packageBox from "../assets/images/svg/package-box.svg";

const EmptyData = ({
  title,
  children,
  className,
  description,
  contentSmall,
}) => {
  return (
    <div className={className}>
      {/* main content */}
      <div className="flex-center gap-4">
        {/* package box */}
        <img
          width={80}
          height={80}
          src={packageBox}
          alt="package box"
          className={
            !contentSmall ? "w-20 h-20 max-450:w-16 max-450:h-16" : "w-16 h-16"
          }
        />

        {/* title and description */}
        <div className="space-y-0.5">
          {/* title */}
          <h2
            className={
              !contentSmall
                ? "text-xl max-450:text-lg leading-6 max-450:font-medium"
                : "text-lg leading-6 font-medium"
            }
          >
            {title ? title : "Ma'lumotlar mavjud emas!"}
          </h2>

          {/* description */}
          <p
            className={`opacity-80 ${
              !contentSmall
                ? "text-lg leading-6 font-medium max-450:text-base max-450:leading-5 max-450:font-normal"
                : "text-base leading-5 font-normal"
            }`}
          >
            {description
              ? description
              : "Ushbu sahifada hech qanday ma'lumot mavjud emas."}
          </p>
        </div>
      </div>

      {/* children */}
      {children}
    </div>
  );
};

export default EmptyData;
