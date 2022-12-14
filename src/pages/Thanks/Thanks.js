import React from 'react';
import './Thanks.css';

const Thanks = () => {
  return (

    <div className='min-h-screen bg-[#1C6758] flex justify-center'>
<div className=' '>
  <div className='text-center mt-16 mb-5'>
  <p className='text-white lg:text-3xl md:text-xl text-lg mb-2'>Awesome, Your quote is on its way!</p>
  <p className='text-white'>Here's what to expect</p>
  </div>
  
  <div className='bg-[#ee6c4d] relative lg:px-32 py-10'>
  
    <div className='mb-2'>
      <h1 className='text-white text-lg font-bold'>1. A Call</h1>
      <p className='text-white'>A Vivint expert will reach out with your personalized home security qoute</p>
    </div>
    <div className='mb-2'>
      <h1 className='text-white text-lg font-bold'>2. Product Assistance</h1>
      <p className='text-white'>You'll get home security options that fit your lifestyle needs</p>
    </div>
    <div>
      <h1 className='text-white text-lg font-bold'>3. Your Qoute</h1>
      <p className='text-white'>Compare pricing and features to find the one that fits your budget</p>
    </div>
    <div className='h-[20px] w-[20px] absolute bg-[#ee6c4d] -bottom-[10px] right-[369px] rotate-45'></div>
  </div>
  <div className='text-center mt-5 mb-5'>
  <button className="btn btn-wide  text-xl thanks-btn"><a href='tel:+18554301263'><i className="fa-solid fa-phone pr-2"></i>(855) 430-1263</a></button>
  </div>
</div>
    </div>
//     <div class="hero min-h-screen bg-base-200">
//   <div class="hero-content text-center">
//     <div class="max-w-md">
//       <h1 class="text-5xl font-bold">Hello there</h1>
//       <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button class="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
  )
}

export default Thanks