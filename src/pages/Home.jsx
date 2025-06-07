import React, { useContext, useState } from "react";
import Search from "../Components/Search";
import Toady from "../Components/Toady";
import ShowPerdata from "../Components/ShowPerdata";
import CreateCrad from "../Components/CreateCrad";
import { dataContext } from "../context/Wrapper";
import Navbar from "../Components/Navbar";
import Loader from "./Loader";

const Home = () => {
  const [isloader, setisloader , ] = useState(false);

  let { userdata, setuserdata , isloading } = useContext(dataContext);

  return (
    <div className="h-screen w-full">
      {isloading ? (
       ""
      ) : (
        <div>
          <Navbar />
          <Search />
          <Toady />
          <ShowPerdata />
          <CreateCrad />
        </div>
      )}
    </div>
  );
};

export default Home;
