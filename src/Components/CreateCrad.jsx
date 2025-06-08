import React from "react";
import { NavLink } from "react-router-dom";

const CreateCrad = () => {
  return (
    <div className="w-full px-4 mt-4  rounded-2xl shadow-2xl shadow-slate-500 bg-white py-4">
      <div className="flex items-center justify-between">
        <div className="cret-item-crete flex w-full">
          <div className="flex items-center flex-col border-r-2 pr-4  ">
            <i className="ri-calendar-check-line text-3xl text-slate-800"></i>
            <h4 className="text-sm font-semibold text-gray-800">Ask Leave</h4>
          </div>

          <div className="flex items-center flex-col border-r-2 px-4 gap-2 ">
            <i  className="ri-list-view text-3xl text-slate-800"></i>
            <h4 className="text-sm font-semibold text-gray-800">Attendance</h4>
          </div>

          <div className="flex items-center flex-col  pl-4  gap-2">
            <i className="ri-discuss-fill text-3xl text-slate-800"></i>
            <h4 className="text-sm font-semibold text-gray-800">Add update</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCrad;
