import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../context/Wrapper";
import Loader from "../pages/Loader";

const Menubar = () => {
  let { userdata, setuserdata } = useContext(dataContext);
  return (
   <div>
    {userdata ?  <div className="fixed bottom-0  w-full h-5 flex justify-between items-center py-8 px-4 shadow-2xl shadow-slate-700 z-[100] bg-white">
      <div className="mn-item flex flex-col items-center">
        <NavLink to={`/`} className={(e) => e.isActive ? "ri-home-fill text-3xl text-gray-800" : "ri-home-line text-3xl text-gray-800" } ></NavLink>
      </div>

      <div className="mn-item flex flex-col items-center">
        <i className="ri-time-line text-3xl text-gray-800"></i>
      </div>

      <div className="mn-item  flex flex-col  items-center h-12 w-12 rounded-full bg-blue-400 justify-center">
        <i className="ri-add-line absolute text-3xl text-white"></i>
      </div>

      <div className="mn-item flex flex-col items-center">
        <i className="ri-calendar-line text-3xl text-gray-800"></i>
      </div>

      <NavLink to={`/profile`} className="mn-item flex flex-col items-center">
        <img
          className="h-10 w-10 rounded-full object-cover object-top"
          src={userdata.image ? userdata.image : "https://i.pinimg.com/736x/37/57/5a/37575a213755cad83bd408908623ba22.jpg"}
          alt=""
        />
      </NavLink>
    </div> : ""}
   </div>
  );
};

export default Menubar;
