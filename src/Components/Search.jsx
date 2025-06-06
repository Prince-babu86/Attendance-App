import React from 'react'

const Search = () => {
  return (
    <div className='w-full flex items-center mt-4'>
        <div className="search flex items-center w-full border-2 border-gray-500 shadow-slate-500 rounded-xl h-12 px-4">
            <i className="ri-search-line text-2xl"></i>
            <input className='h-full w-full px-2 outline-none' type="search" placeholder='Search here' />
        </div>
    </div>
  )
}

export default Search