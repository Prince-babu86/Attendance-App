import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Create from "../pages/Createuser";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const mainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
       <ProtectedRoute>
        <Home/>
       </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
};

export default mainRoutes;
