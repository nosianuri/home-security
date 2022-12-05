import React from 'react';
import cybermonday from "../assets/cyber.webp";

const BelowHeader = () => {
  return (
    <div className='bg-[#f59e0b] py-5 ' >
       <div className='flex align-middle justify-evenly'>
       <div className=''>
        <img className='skew-y-6' width={190} src={cybermonday} alt="" />
       </div>
       <div className='text-white'>
        <p className='text-xl text-primary font-bold'>ViVint Smart Home Security</p>
        <p className='text-lg font-bold'>Extended Cyber Monday Sale-</p>
        <p className='text-sm'>Free Doorbell Camera</p>
        <p className='text-sm'>Free Installation!</p>
        <p className='text-md font-bold'>Don't Miss Out! - Call Now!</p>
       </div>
       </div>
    </div>
  )
}

export default BelowHeader