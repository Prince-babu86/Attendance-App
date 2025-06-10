import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Create from "../pages/Createuser";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Calender from "../pages/Calender";
import AllUsers from "../pages/AllUsers";
import AdminLogin from "../admin/AdminLogin";
import AdminSignUp from "../admin/AdminSignUp";
import UserAttendance from "../pages/UserAttendance";
import ResetPassword from "../pages/ResetPassword";

const mainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Calender"
          element={
            <ProtectedRoute>
              <Calender />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <AllUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-signup"
          element={
            <ProtectedRoute>
              <AdminSignUp />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-attendance"
          element={
            <ProtectedRoute>
              <UserAttendance />
            </ProtectedRoute>
          }
        />

        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default mainRoutes;
