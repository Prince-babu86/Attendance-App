// components/AttendanceCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // still needed to apply base structure

const AttendanceCalendar = () => {
  const [date, setDate] = useState(new Date());




  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-center text-2xl font-bold text-indigo-600 mb-6">
        📆 Attendance Calendar
      </h2>

      <div className="[&_.react-calendar]:w-full [&_.react-calendar]:border-none [&_.react-calendar]:font-sans">
        <Calendar
          onChange={setDate}
          value={date}
          className="react-calendar rounded-lg overflow-hidden"
         
          tileClassName={({ date: day }) => {
            const isToday = new Date().toDateString() === day.toDateString();
            const isSelected = date.toDateString() === day.toDateString();

            return [
              'py-3 text-sm rounded-xl transition duration-300 ease-in-out',
              isToday && 'bg-indigo-100 text-indigo-700 font-semibold',
              isSelected && 'bg-indigo-600 text-white font-bold hover:bg-indigo-700',
              !isSelected && 'hover:bg-indigo-50'
            ].join(' ');
          }}
          navigationLabel={({ date, label }) => (
            <span className="text-indigo-700 font-bold">{label}</span>
          )}
        />
      </div>

      <p className="text-center mt-4 text-gray-600">
        Selected Date: <span className="font-medium">{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default AttendanceCalendar;
