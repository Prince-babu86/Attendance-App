import React, { useContext } from "react";
import { dataContext, useAuth } from "../context/Wrapper";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

const Profile = () => {
  // let { userdata, setuserdata } = useContext(dataContext);

  const navigate = useNavigate();

  const addAccount = () => {
    navigate("/signup");
  };

  const { userdata, setuserdata, isloading, setisloading } = useAuth();

  const handleLogOut = async () => {
    try {
      await signOut(auth);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {userdata && !isloading ? (
        <div className="w-full py-3">
          <div className="top-prf flex items-center justify-between">
            <i className="ri-arrow-left-line text-3xl"></i>
            <h4 className="text-2xl font-semibold font-mono">My Profile</h4>
            <i className="ri-settings-line text-3xl"></i>
          </div>
          <div className="profile-center flex mt-3 px-3 w-full  shadow-slate-700 rounded-2xl py-3">
            <img
              className="w-24 h-24 rounded-full object-cover object-top"
              src={
                userdata.image
                  ? userdata.image
                  : "https://i.pinimg.com/736x/37/57/5a/37575a213755cad83bd408908623ba22.jpg"
              }
              alt=""
            />
            <div className="flex flex-col items-start ml-5 mt-2">
              <h1 className="text-md font-semibold leading-5 ">
                {userdata.name}
              </h1>
              <h4 className="text-md">@{userdata.username}</h4>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-2 text-sm">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="bottom flex flex-col px-1 mt-3 gap-5">
            <div className="prf-item cursor-pointer relative flex items-center w-full justify-between">
              <div className="flex items-center gap-4">
                <i className="ri-heart-3-line text-3xl"></i>
                <h4 className="text-xl text-gray-700">Favourites</h4>
              </div>
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>

            <div className="prf-item cursor-pointer relative flex items-center w-full justify-between">
              <div className="flex items-center gap-4">
                <i className="ri-global-line text-3xl"></i>
                <h4 className="text-xl text-gray-700">Language</h4>
              </div>
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>

            <div className="prf-item cursor-pointer relative flex items-center w-full justify-between">
              <div className="flex items-center gap-4">
                <i className="ri-calendar-line text-3xl"></i>
                <h4 className="text-xl text-gray-700">Attendace</h4>
              </div>
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>

            <div className="prf-item cursor-pointer relative flex items-center w-full justify-between">
              <div className="flex items-center gap-4">
                <i className="ri-time-line text-3xl"></i>
                <h4 className="text-xl text-gray-700">History</h4>
              </div>
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>

            <div
              onClick={addAccount}
              className="prf-item cursor-pointer relative flex items-center w-full justify-between"
            >
              <div className="flex items-center gap-4">
                <i className="ri-add-line text-3xl "></i>
                <h4 className="text-xl text-gray-700">Add Account</h4>
              </div>
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>

            <div
              onClick={handleLogOut}
              className="prf-item cursor-pointer relative flex items-center w-full justify-between"
            >
              <div className="flex items-center gap-4">
                <i className="ri-arrow-left-box-line text-3xl text-red-500"></i>
                <h4 className="text-xl text-gray-700">Logout</h4>
              </div>
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Profile;
