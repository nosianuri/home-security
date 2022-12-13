import React from 'react';
import optionImg from '../assets/security.jfif';
import './BelowOptions.css';

const BelowOptions = () => {
    return (
        <div className='mt-16 '>
            <div className='lg:flex md:flex justify-center bg-[#005555] py-5 lg:pl-0 pl-10'>
            <div className='pr-16 text-white'>
            <h3 className='lg:text-3xl text-xl mt-5'>Get a Free Estimate Today! No Obligation!</h3>
                <ul className=' text-lg lg:text-xl mt-3 pl-16'>
                    <li>Professionals with a valid certification.</li>
                    <li>Free Installation.</li>
                    <li>Lifetime Warrenty on Devices & Car Guard.</li>
                    <li>Advance Home Automation.</li>

                </ul>
            </div>
            <div className=' mt-5'>
                <img src={optionImg} alt="" />
            </div>
        </div>
        </div>
    )
}

export default BelowOptions