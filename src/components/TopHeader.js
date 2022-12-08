import React from 'react';
import logo from "../assets/house.png";
import './TopHeader.css';

const TopHeader = () => {
  return (
    <div className='bg-secondary lg:pt-28 md:pt-16 '>
        <div className='lg:flex topheader'>
            <div className='top-header-img'><img width={150} src={logo} alt="" /></div>
            <div className=' mx-auto justify-center text-white'>
                <h5>Limited time offer </h5>
                <h3 className='text-lg' >*Call to get pro Install + $0 Activation</h3>
                <p className='text-sm'>*New customers only.</p>
            </div>
            <div className='btn relative call-btn bg-[#FFA921] lg:mr-5 text-white font-bold mt-3'>
            <div className='h-[20px] w-[19px] absolute bg-[#FFA921] -top-[10px] right-[70px] rotate-45'></div>
            Certified live specialist!
            </div>
            
        </div>
    </div>
  )
}

export default TopHeader