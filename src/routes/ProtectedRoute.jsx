import React, { useContext } from "react";
// import {} from "../";
import { dataContext } from "../context/Wrapper";
import { Navigate } from "react-router-dom";
import Loader from "../pages/Loader";

const ProtectedRoute = () => {
  let { userdata, setuserdata , isloading } = useContext(dataContext);

  
  if (isloading) return <Loader/>
  return userdata ? <Navigate to={`/`} replace></Navigate> : <Navigate to={`/login`} replace></Navigate>
};

export default ProtectedRoute;
