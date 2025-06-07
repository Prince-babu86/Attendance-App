import React, { useContext, useEffect, useState } from "react";
// import {} from "../";
import { dataContext, useAuth } from "../context/Wrapper";
import { Navigate } from "react-router-dom";
import Loader from "../pages/Loader";

const ProtectedRoute = ({ children }) => {
  const { userdata, isloading } = useAuth();

  if (isloading) return <Loader />;
  if (!userdata) return <Navigate to={`/login`} />;
  return children;
};

export default ProtectedRoute;
