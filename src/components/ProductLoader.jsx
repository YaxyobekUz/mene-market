import React from "react";

// antd
import { Skeleton } from "antd";

const ProductLoader = () => {
  return (
    <li className="flex flex-col gap-4 w-full bg-primary-gray-50 rounded-3xl">
      {/* image  */}
      <Skeleton.Image
        active
        className="!w-full !h-auto aspect-square !rounded-20"
      />

      {/* body */}
      <div className="flex flex-col gap-4 h-full p-5 pt-0">
        {/* main content */}
        <div className="flex flex-col gap-3 grow">
          {/* title */}
          <Skeleton.Input active className="!w-full !h-[22px] !rounded-2xl" />

          {/* stars */}
          <Skeleton.Input active className="!w-1/3 !h-[22px] !rounded-2xl" />

          {/* price */}
          <Skeleton.Input active className="!w-full !h-[22px] !rounded-2xl" />
        </div>

        {/* btn */}
        <Skeleton.Button
          active
          className="!w-32 !h-[42px] aspect-square !rounded-2xl"
        />
      </div>
    </li>
  );
};

export default ProductLoader;
