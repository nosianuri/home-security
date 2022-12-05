import React from 'react';
import logo from "../assets/house.png";

const TopHeader = () => {
  return (
    <div className='bg-secondary lg:pt-16 md:pt-16'>
        <div className='flex'>
            <div><img width={150} src={logo} alt="" /></div>
            <div className=' mx-auto justify-center text-white'>
                <h5>Limited time offer </h5>
                <h3 className='text-lg' >*Call to get pro Install + $0 Activation</h3>
                <p className='text-sm'>*New customers only.</p>
            </div>
            <div className='btn bg-[#365314]'>
            Call to get offer!
            </div>
        </div>
    </div>
  )
}

export default TopHeader