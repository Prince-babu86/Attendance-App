import React, { useContext, useState } from "react";
import Search from "../Components/Search";
import Toady from "../Components/Toady";
import ShowPerdata from "../Components/ShowPerdata";
import CreateCrad from "../Components/CreateCrad";
import { dataContext, useAuth } from "../context/Wrapper";
import Navbar from "../Components/Navbar";
import Loader from "./Loader";
import TakeAttendance from "../Components/TakeAttendance";

const Home = () => {
  let { userdata, setuserdata, isloading } = useAuth();

  return (
    <div className="min-h-screen w-full pb-20">
      <div>
        <Navbar />
        {userdata.role === "Admin" && userdata.isAdmin ? (
          <TakeAttendance />
        ) : (
          ""
        )}
        <Search />

        <Toady />
        <ShowPerdata />
        <CreateCrad />
      </div>
    </div>
  );
};

export default Home;
