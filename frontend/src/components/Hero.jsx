import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-5'>
        <img src={assets.logo} alt="" />
        <p className='text-xl text-white'>Apps for everything. Prices for Everyone.</p>
    </div>
  )
}

export default Hero