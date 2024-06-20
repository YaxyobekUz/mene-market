import React, { useState } from "react";

// antd
import { Tooltip } from "antd";

// helpers
import { successNotification } from "../helpers/helpers";

const CopyBtn = ({
  text,
  tooltip,
  timeout,
  iconSize,
  children,
  className,
  darkTheme,
  notification,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    if (!isCopied) {
      setIsCopied(true);
      navigator.clipboard.writeText(text ? text : "Hech narsa nusxa olinmadi!");
      setTimeout(() => setIsCopied(false), timeout ? timeout : 1500);

      // show toast notification
      if (notification) {
        if (typeof notification === "string") {
          successNotification(notification);
        } else {
          successNotification("Buferga nusxa olindi");
        }
      }
    }
  };

  return (
    <Tooltip
      color={darkTheme && "blue"}
      title={tooltip ? (!isCopied ? tooltip : "Buferga nusxa olindi!") : false}
    >
      <button
        onClick={copy}
        disabled={isCopied}
        className={`${className} transition-opacity disabled:opacity-70`}
      >
        {/* icon wrapper */}
        <div>
          {!isCopied ? (
            // copy icon
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width={iconSize ? iconSize : 24}
              height={iconSize ? iconSize : 24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={darkTheme ? "#ffffff" : "#13181F"}
              />
              <path
                d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={darkTheme ? "#ffffff" : "#13181F"}
              />
            </svg>
          ) : (
            // copy icon succes
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width={iconSize ? iconSize : 24}
              height={iconSize ? iconSize : 24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={darkTheme ? "#ffffff" : "#13181F"}
              />
              <path
                d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={darkTheme ? "#ffffff" : "#13181F"}
              />
              <path
                d="M6.08008 15L8.03008 16.95L11.9201 13.05"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={darkTheme ? "#ffffff" : "#13181F"}
              />
            </svg>
          )}
        </div>

        {/* children */}
        {children}
      </button>
    </Tooltip>
  );
};

export default CopyBtn;
