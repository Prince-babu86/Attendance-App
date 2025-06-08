import React, { useEffect, useState } from "react";
import { dataContext, useAuth } from "../context/Wrapper";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { data } from "react-router-dom";

const AllUsers = () => {
  const { users } = useAuth();

  const [todayrecord, settodayrecord] = useState([]);

  const [isloader, setisloader] = useState(false);

  const getToday = () => new Date().toISOString().split("T")[0];
  const markAttendanceForUser = async (user, isPresent) => {
    const today = getToday();
    const userRef = doc(db, "users", user.id);
    const centralRef = doc(db, "attendance", today, "records", user.id);

    setisloader(true);
    try {
      // 1. Check if already marked in central attendance
      const centralDoc = await getDoc(centralRef);
      if (centralDoc.exists()) {
        console.warn("⚠️ Attendance already marked for this user today.");
        setisloader(false);
        return;
      }

      // 2. Add to user's attendance array
      await updateDoc(userRef, {
        attendance: arrayUnion({
          date: today,
          present: isPresent,
        }),
      });

      // 3. Add to central attendance
      await setDoc(centralRef, {
        userId: user.id,
        name: user.name,
        email: user.email,
        present: isPresent,
        date: today,
      });

      setisloader(false);
      console.log(
        `✔️ Marked ${user.name} as ${isPresent ? "Present" : "Absent"}`
      );
    } catch (error) {
      console.error("❌ Error marking attendance:", error);
    }
  };

  // users.map((user) => {
  //   if (user.attendance && user.attendance.length > 0) {
  //   let todayrecord =  user.attendance.find(item => item.date === getToday())
  //   console.log(todayrecord.present);
  //   } else {
  //     console.log(`${user.name} has no attendance`);
  //   }
  // });


  useEffect(()=>{

  },[markAttendanceForUser , getToday])


  const renderstudenst = users.map((user, id) => {
    if (user.attendance && user.attendance.length > 0) {
      let todayrecord = user.attendance.find(
        (item) => item.date === getToday()
      );
      // console.log(todayrecord);
    } else {
      console.log(`${user.name} has no attendance`);
    }

    return (
      <div
        key={id}
        className="student flex items-center w-full px-2 py-4 relative bg-slate-100 rounded mb-2 "
      >
        <div className="flex items-start gap-3">
          <img
            className="w-16 h-16 rounded-full object-cover object-top"
            src={
              user.image
                ? user.image
                : "https://i.pinimg.com/736x/37/57/5a/37575a213755cad83bd408908623ba22.jpg"
            }
            alt=""
          />
          <div className="w-60 ">
            <h1 className="text-md font-semibold leading-5">{user.name}</h1>
            <h4 className="text-gray-600 text-sm">{user.username}</h4>
            <p className="text-gray-700 text-[12px]">
              B.Tech Computer Science – Year 2, Semester 3
            </p>
          </div>
          <div className="buttons flex items-center gap-2 flex-col  absolute right-3">


            {!isloader ? <button onClick={() => markAttendanceForUser(user, false)} className="h-9 w-9 bg-red-500 rounded-full text-white">
                {user.attendance && user.attendance.length > 0 && user.attendance.find(item => item.date === getToday()).present === false ? "X" : "A"}
              </button>  : <button className="h-9 w-9 bg-red-500 rounded-full text-white flex items-center justify-center">
                <span className="h-4 w-4 rounded-full border-2 border-t-transparent animate-spin"></span>
              </button>}
             
             {!isloader ? <button onClick={() => markAttendanceForUser(user, true)} className="h-9 w-9 bg-green-500 rounded-full text-white">
                {user.attendance && user.attendance.length > 0 && user.attendance.find(item => item.date === getToday()).present === true ? " ✔" : "P"}
              </button>  : <button className="h-9 w-9 bg-green-500 rounded-full text-white flex items-center justify-center">
                <span className="h-4 w-4 rounded-full border-2 border-t-transparent animate-spin"></span>
              </button>}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full">
      <div className="top"></div>

      <div className="students w-full mt-5 pb-20">
        <div className="flex items-center  w-full">
          <i className="ri-arrow-left-line text-3xl"></i>
          <h1 className="text-center text-2xl font-semibold font-mono ml-5">
            Students Attendance
          </h1>
        </div>

        <div className="mt-5">{renderstudenst}</div>
      </div>
    </div>
  );
};

export default AllUsers;
