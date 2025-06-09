import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Wrapper";

const Toady = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [weekday, setWeekday] = useState("");

  let { userdata } = useAuth();
  const getToday = () => new Date().toISOString().split("T")[0];

  const [todayAttendance, settodayAttendance] = useState(null);
  const [latestAttendance, setlatestAttendance] = useState([]);

  useEffect(() => {
    if (userdata.attendance && userdata.attendance.length > 0) {
      let todayAtten = userdata.attendance.find(
        (item) => item.date === getToday()
      );
      settodayAttendance(todayAtten.present);
    } else {
      settodayAttendance(null);
    }
  }, []);

  useEffect(() => {
    const today = new Date();

    // Get individual parts
    setDay(today.getDate()); // 7
    setMonth(today.toLocaleString("default", { month: "long" })); // "June"
    setYear(today.getFullYear()); // 2025
    setWeekday(today.toLocaleString("default", { weekday: "long" })); // "Saturday"
  }, []);

  // console.log(userdata.attendance.slice(-7));

  useEffect(() => {
    userdata.attendance && userdata.attendance.length > 0
      ? setlatestAttendance(userdata.attendance.slice(-7))
      : console.log("User attendance have not");
  }, [userdata]);

  // console.log(latestAttendance);

  const renderAttendance = latestAttendance.map((att, id) => {
    return (
      <div key={id} className="att flex gap-1 items-center flex-col">
        <h4>{att.day[0]}</h4>
        <h4 className="text-sm font-semibold text-white h-8 w-8 flex items-center justify-center bg-blue-500 rounded-full">
          {att.date.slice(-2)}
        </h4>
        <div
          className={`h-8 w-8 rounded-full  ${
            att.present ? "bg-green-500" : "bg-red-500"
          }  flex items-center justify-center text-white`}
        >
          {att ? (att.present === true ? "P" : "A") : ""}
        </div>
      </div>
    );
  });

  console.log(todayAttendance);

  return (
    <div className="w-full py-7 shadow-2xl   px-4 mt-4 rounded-2xl relative">
      <div className="todaydate flex items-start flex-col ">
        <div className=" mt-1 flex">
          <p className="text-5xl font-semibold s text-[#584BCE]">
            {day}
            <sup>th</sup>
          </p>

          <div className="mt-1 ml-2">
            <h4 className="text-[13px] font-semibold font-serif">{weekday}</h4>
            <h4 className="text-[14px] font-semibold font-mono text-gray-500">
              {month} {year}{" "}
            </h4>
            {todayAttendance === null ? (
              <div></div>
            ) : (
              <div
                className={`absolute right-5 text-6xl top-3 uppercase h-20 w-20 ${
                  todayAttendance ? "bg-green-500" : "bg-red-500"
                } flex items-center justify-center text-white rounded-2xl`}
              >
                {todayAttendance ? "P" : "A"}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 ">
          <h4 className="text-gray-500 text-md">This week status</h4>
          <div className="flex items-center mt-3 gap-2.5">
            {renderAttendance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toady;
