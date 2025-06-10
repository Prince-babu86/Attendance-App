import React from "react";
import { useAuth } from "../context/Wrapper";

const MyAttendance = () => {
  let { userdata } = useAuth();

  const renderAttendance = userdata.attendance.map((att, id) => {
    return (
      <div
        key={id}
        className="flex items-center justify-between w-full bg-slate-200 py-4 px-3 rounded-2xl  "
      >
        <div>
          <h4 className="text-2xl text-gray-600 font-mono font-semibold">
            {att.date}
          </h4>
          <h4 className="text-md text-pink-500">{att.day}</h4>
        </div>
        <button
          className={`h-16 w-16 rounded-full ${
            att.present === true ? "bg-green-500" : "bg-red-500"
          } text-2xl flex items-center justify-center text-white`}
        >
          {userdata.attendance &&
          userdata.attendance.length > 0 &&
          att.present === true
            ? "P"
            : "A"}
        </button>
      </div>
    );
  });

  return (
    <div className="w-full p-2">
      <div className="att-card py-4  w-full  rounded-2xl  flex flex-col gap-3">
        <h1 className="text-center text-3xl uppercase text-blue-500 mb-2">
          My Attendance
        </h1>
        {renderAttendance}
      </div>
    </div>
  );
};

export default MyAttendance;
