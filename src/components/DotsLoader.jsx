import React from "react";

// styles
import "../css/loader.css";

const DotsLoader = ({ className }) => {
  return (
    <div className={`${className} dots-wrapper`}>
      <div className="dot dot-0"></div>
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
    </div>
  );
};

export default DotsLoader;
