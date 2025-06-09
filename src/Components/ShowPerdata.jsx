import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Wrapper";

const ShowPerdata = () => {
  let { userdata } = useAuth();

  const [percentage, setpercentage] = useState(0);
  const getPresentPercentage = (attendance) => {
    const totalDays = attendance.length;
    if (totalDays === 0) return "0%";

    const presentDays = attendance.filter((item) => item.present).length;
    const percentage = ((presentDays / totalDays) * 100);
    setpercentage(percentage);
    return percentage + "%";
  };

  useEffect(() => {
    userdata.attendance && userdata.attendance.length > 0
      ? getPresentPercentage(userdata.attendance)
      : setpercentage(0)
  });

  
  return (
    <div className="w-full mt-3 py-4 shadow-2xl shadow-slate-500 bg-white rounded-2xl px-4">
      <div className="flex items-center w-full justify-between">
        <div className="crt-item-result flex flex-col items-center justify-center gap-2">
          <div className="prec h-20 w-20 rounded-full border-4 border-blue-400 bg-white flex items-center justify-center text-xl font-semibold ">
            {percentage}%
          </div>
          <h4 className="text-sm font-semibold">Attendance</h4>
        </div>

        <div className="crt-item-result flex flex-col items-center justify-center gap-2">
          <div className="prec h-20 w-20 rounded-full border-4 border-pink-400 bg-white flex items-center justify-center text-2xl">
            36%
          </div>
          <h4 className="text-sm font-semibold">Leave token</h4>
        </div>

        <div className="crt-item-result flex flex-col items-center justify-center gap-2">
          <div className="prec h-20 w-20 rounded-full border-4 border-red-400 bg-white flex items-center justify-center text-2xl">
            66%
          </div>
          <h4 className="text-sm font-semibold">On Going days</h4>
        </div>
      </div>
    </div>
  );
};

export default ShowPerdata;
