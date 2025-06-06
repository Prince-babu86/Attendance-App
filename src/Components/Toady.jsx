import React, { useEffect, useState } from 'react'

const Toady = () => {

const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [weekday, setWeekday] = useState("");
    
    useEffect(() => {
    const today = new Date();

    // Get individual parts
    setDay(today.getDate()); // 7
    setMonth(today.toLocaleString("default", { month: "long" })); // "June"
    setYear(today.getFullYear()); // 2025
    setWeekday(today.toLocaleString("default", { weekday: "long" })); // "Saturday"
  }, []);


 
  return (
    <div className='w-full py-7 shadow-2xl   px-4 mt-4 rounded-2xl '>
        <div className="todaydate flex items-start flex-col ">
           

        
           <div className=' mt-1 flex'>
             <p className='text-5xl font-semibold s text-[#584BCE]'>{day}<sup>th</sup></p>
           <div className='mt-1 ml-2'> 
              <h4 className='text-[13px] font-semibold font-serif'>{weekday}</h4>
             <h4 className='text-[14px] font-semibold font-mono text-gray-500' >{month} {year} </h4>
           </div>
           </div>

           <div className='mt-4 '>
            <h4 className='text-gray-500 text-md'>This week status</h4>
            <div className='flex items-center mt-3 gap-2.5'>
                <div className="att flex gap-2 items-center flex-col">
                    <h4>M</h4>
                    <div className='h-8 w-8 rounded-full bg-red-400 flex items-center justify-center text-white '>A</div>
                </div>

                 <div className="att flex gap-2 items-center flex-col">
                    <h4>T</h4>
                    <div className='h-8 w-8 rounded-full bg-red-400 flex items-center justify-center text-white '>A</div>
                </div>


                 <div className="att flex gap-2 items-center flex-col">
                    <h4>W</h4>
                    <div className='h-8 w-8 rounded-full bg-red-400 flex items-center justify-center text-white '>A</div>
                </div>


                 <div className="att flex gap-2 items-center flex-col">
                    <h4>T</h4>
                    <div className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white '> ✔</div>
                </div>

                 <div className="att flex gap-2 items-center flex-col">
                    <h4>T</h4>
                    <div className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white '> ✔</div>
                </div>


                 <div className="att flex gap-2 items-center flex-col">
                    <h4>T</h4>
                    <div className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white '> ✔</div>
                </div>


                 <div className="att flex gap-2 items-center flex-col">
                    <h4>T</h4>
                    <div className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white '> ✔</div>
                </div>


                 
            </div>
           </div>

        </div>
    </div>
  )
}

export default Toady