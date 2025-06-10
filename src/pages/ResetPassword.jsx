import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase.config";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState(null);

  const handleresetpassword = async (email) => {
    seterror(null)
    if (email.length > 0) {
        setloader(true)
      try {
        await sendPasswordResetEmail(auth, email);
        // alert("Password reset email sent! Check your inbox.");
        seterror("Link sent")
        setloader(false)
        setemail("")
      } catch (error) {
        console.error("Error sending reset email:", error.message);
        // alert("Failed to send reset email: " + error.message);
        seterror("Something went wrong")
        setloader(false)
      }
    }else{
        seterror("Please enter a email")
    }
  };

  return (
    <div className="w-full py-5">
      <div className=" pb-4 ml-1 flex items-center gap-6">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-3xl"
        ></i>
        <h1 className="text-center text-2xl font-semibold ">
          Reset your password
        </h1>
      </div>
      <div className="w-full flex flex-col items-end mt-6 relative ">
        <input
          required
          onChange={(e) => setemail(e.target.value)}
          value={email}
          className="w-full py-4 px-2 outline-none border-b-2 border-slate-800  "
          type="email"
          name=""
          id=""
          placeholder="Enter email"
        />
       {error ?  <h4 className="text-start mt-2 text-md text-red-500 font-mono">{error}</h4> : ""}
        {!loader  ? <button
          onClick={() => handleresetpassword(email)}
          className="w-full bg-blue-800 text-white py-2 border-none rounded mt-4"
        >
          Send link
        </button> : <button
        
          className="w-full bg-blue-800 text-white py-2 border-none rounded mt-4 flex items-center justify-center"
        >
         <span className="h-4 w-4 rounded-full border-2 border-t-transparent animate-spin"></span>
        </button>}
      </div>
    </div>
  );
};

export default ResetPassword;
