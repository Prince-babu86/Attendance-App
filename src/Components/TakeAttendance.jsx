import React from 'react'
import { NavLink } from 'react-router-dom'

const TakeAttendance = () => {
  return (
    <div className='w-full'>
        <div className="flex items-center px-4 py-3  rounded-md mt-2 justify-between shadow-2xl shadow-slate-200 bg-white">
           <div className='flex items-center gap-3'>
             <i className="ri-calendar-line text-3xl"></i>
            <h4 className='text-md font-semibold font-mono '>Take attendance today</h4>
           </div>
            <NavLink to={`/students`} className='px-4 py-2 bg-pink-500 text-white rounded-xl'>Submit</NavLink>
        </div>
        
    </div>
  )
}

export default TakeAttendance