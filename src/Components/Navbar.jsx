import React, { useContext } from "react";
import { dataContext } from "../context/Wrapper";

const Navbar = () => {

 let {userdata, setuserdata} =  useContext(dataContext)


  return (
    <div className="w-full ">
      <nav className="flex items-center justify-between w-full pt-6 px-2  ">
        <div className="left flex flex-col items-start gap-2 ">
          <h1 className="text-md font-semibold leading-3 ">
            Hello, {userdata.name}
          </h1>
          <h3 className="text-md text-pink-500">Have a nice day !</h3>
        </div>

        <div className="right flex items-start gap-5">
          <div className="  rounded-full">
            <img
            className="w-12 h-12  object-cover object-top rounded-full"
            src={userdata.image ? userdata.image : "https://i.pinimg.com/736x/37/57/5a/37575a213755cad83bd408908623ba22.jpg"}
            alt=""
          />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
