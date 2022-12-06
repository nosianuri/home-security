import React from 'react';
import cybermonday from "../assets/monday.webp";
import './BelowHeader.css';

const BelowHeader = () => {
  return (
    <div className='bg-[#FCE700] py-5 ' >
       <div className='lg:flex align-middle justify-evenly belowheader'>
       <div className=''>
        <img className='skew-y-6 below-img' width={130} src={cybermonday} alt="" />
       </div>
       <div className=''>
        <p className='text-xl font-bold'>ViVint Smart Home Security</p>
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