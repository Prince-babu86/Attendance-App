import React, { useContext, useEffect, useState } from "react";
import MainRoutes from "./routes/mainRoutes";
import Navbar from "./Components/Navbar";
import Menubar from "./Components/Menubar";
import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from "./context/Wrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  let location = useLocation();

  let { userdata, setuserdata } = useContext(dataContext);

  let renderroutes =
    location.pathname === "/signup" || location.pathname === "/login";

  const navigate = useNavigate();

  return (
    <div className="  w-screen ">
      {renderroutes ? (
        ""
      ) : (
        <div>
          <Menubar />
        </div>
      )}
      <div className="px-2">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
