import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const AuthRoot = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return !isLoggedIn && <Outlet />;
};

export default AuthRoot;
