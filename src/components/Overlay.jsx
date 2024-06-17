import React from "react";

const Overlay = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute inset-0 z-0 w-full h-full bg-primary-black-800/30 backdrop-filter backdrop-blur"
  ></div>
);

export default Overlay;
