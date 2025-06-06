import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className="spin h-5 w-5 rounded-full border-2 border-b-transparent animate-spin"></div>
    </div>
  )
}

export default Loader