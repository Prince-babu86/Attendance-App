import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });


  const [isloader, setisloader] = useState(false)
   const navigate = useNavigate()
  

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setisloader(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userdata.email,
        userdata.password
      );
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("User data:", userData);
      } else {
        console.log("No additional user data found.");
      }
      setisloader(false)
      setuserdata({
        email:"",
        password:""
      })
      navigate("/")
    } catch (error) {
      console.log(error);
      setisloader(false)
    }
  };

  return (
    <div className="w-full  ">
      <i className="ri-arrow-left-line absolute top-4 text-3xl"></i>
      <div className="w-full py-10 mt-20">
        <h1 className="text-center text-2xl font-semibold font-mono">
          Login your account
        </h1>
        <form
          onSubmit={handleOnSubmit}
          className="w-full mt-5 flex flex-col gap-4"
          action=""
        >
          <div className="w-full input flex flex-col items-start gap-1">
            <h4 className="text-sm ml-1 font-semibold font-mono">Email</h4>
            <input
              onChange={handleOnChange}
              value={userdata.email}
              name="email"
              className="w-full py-2.5 px-2 outline-none border-gray-700 border-2 rounded-md"
              type="text "
              placeholder="Enter a email"
            />
          </div>
          <div className="w-full input flex flex-col items-start gap-1">
            <h4 className="text-sm ml-1 font-semibold font-mono">Password</h4>
            <input
              onChange={handleOnChange}
              value={userdata.password}
              name="password"
              className="w-full py-2.5 px-2 outline-none border-gray-700 border-2 rounded-md"
              type="text "
              placeholder="Enter a Password"
            />
          </div>

          <div className="w-full input flex  items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <input className="ml-1" type="checkbox" />
              <h4 className="text-sm">Save password</h4>
            </div>
            <h4 className="text-sm ml-2 font-semibold ">Forgot Password? </h4>
          </div>

           {isloader ? (
            <button className="w-full bg-blue-500 text-white py-3 rounded-md text-md font-semibold flex items-center justify-center ">
              <span className="h-5 w-5 rounded-full border-4 border-t-transparent animate-spin"></span>
            </button>
          ) : (
            <button className="w-full bg-blue-500 text-white py-3 rounded-md text-md font-semibold ">
             Login
            </button>
          )}
        </form>

        <div className="w-full mt-5">
          <h4 className="text-center text-xl">OR</h4>
          <div className="other-lg flex items-center justify-center mt-4 gap-4">
            <div className="h-16 w-16 bg-white shadow-2xl shadow-slate-500 flex items-center justify-center rounded-full">
              <img
                className="w-10"
                src="https://i.pinimg.com/736x/c8/b8/12/c8b8129127bada9fa699aeba388b3b2b.jpg"
                alt=""
              />
            </div>
            <div className="h-16 w-16 bg-white shadow-2xl shadow-slate-500 flex items-center justify-center rounded-full">
              <img
                className="w-10"
                src="https://i.pinimg.com/736x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg"
                alt=""
              />
            </div>
            <div className="h-16 w-16 bg-white shadow-2xl shadow-slate-500 flex items-center justify-center rounded-full">
              <img
                className="w-10"
                src="https://i.pinimg.com/736x/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.jpg"
                alt=""
              />
            </div>
          </div>
          <h4 className="text-center mt-8 text-gray-500 text-sm">
            Not have a account ?{" "}
            <NavLink
              to={`/signup`}
              className="text-sm text-gray-800 font-semibold"
            >
              Sign up
            </NavLink>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
