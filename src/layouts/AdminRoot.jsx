import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminRoot = () => {
  return (
    <div className="admin flex w-full items-start bg-radial-gradient_blue-500 text-white">
      <Sidebar />
      <div className="grow pt-6 pb-12">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminRoot;
