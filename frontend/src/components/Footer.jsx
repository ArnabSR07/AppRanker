import React from 'react'

const Footer = () => {
  return (
    <div className='flex absolute bottom-2 md:bottom-1 text-sm md:text-lg items-center justify-center text-gray-500 gap-8 bg-transparent w-full'>

        <span className='hover:cursor-pointer hover:text-white'>Terms</span>
        <span className='hover:cursor-pointer hover:text-white'>Privacy</span>
        <span className='hover:cursor-pointer hover:text-white'>Help</span>
        <span className='hover:cursor-pointer hover:text-white'>Send Feedback</span>

    </div>
  )
}

export default Footer