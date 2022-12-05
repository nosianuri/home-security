import React from 'react';
import homebanner from "../assets/home-banner.avif";
import './Banner.css';
import rightform from "../assets/rightform.png";

const Banner = () => {
  return (
    <div className=''>
      <div style={{
        background: `url(${homebanner}) `
      }} className='px-10 py-14 items-center justify-center'>
        <div className='text-center pb-5 text-white'>
          <p className='text-3xl pb-3 font-bold'>
            Get smart home products to protect <br /> what matters most
          </p>
          <h1 className=''>Customize your home security with 24/7 alarm monitoring</h1>
        </div>
        <div className='flex justify-center'>
<div className='mt-16 bg-[#7e4129] h-1/2 p-5' >
<p className='text-white text-xl'>Vivint Smart Home Offers:</p>
<p className='text-white'><i class="fa-solid fa-check pr-2"></i>Vivint remote mobile access</p>
<p className='text-white'><i class="fa-solid fa-check pr-2"></i>Get video push notification</p>
<p className='text-white'><i class="fa-solid fa-check pr-2"></i>Smart home automation</p>
<p className='text-white'><i class="fa-solid fa-check pr-2"></i>1080p HD video quality</p>
<p className='text-white'><i class="fa-solid fa-check pr-2"></i>24/7 continuous video recording</p>
</div>
          <div className='bg-base-200 w-[450px]  rounded-2xl shadow-md  ' >
            <div>
              <div className='text-center  pb-5'>
                <p className='text-xl form_header text-secondary font bold'>
                  Get a FREE quote now
                </p>
                <h1 className=''>Just give us a few details to get your <br /> FREE personalized quote!</h1>
              </div>
            </div>
            <div className='grid grid-cols-1 justify-items-center px-8 gap-5 '>
              <input
                type='text'
                placeholder='First Name*'
                className='input w-full max-w-md'
              />
              <input
                type='text'
                placeholder='Last Name*'
                className='input w-full max-w-md'
              />
              <input
                type='email'
                placeholder='Email Address'
                className='input w-full max-w-md'
              />
              <div className='flex gap-4'>
              <input
                type='text'
                placeholder='ZIP*'
                className='input w-1/2 '
              /><input
                type='text'
                placeholder='Phone Number*'
                className='input w-3/2  '
              />
              </div>
              <p className='text-slate-400 leading-none'>By clicking “Request a Quote” you confirm you are genuinely interested in receiving more information about Vivint and constitutes your electronic signature by means of automatic technology; which may include phone calls, texts, emails, and prerecorded messages marketing Vivint. Consent is not required to make a purchase.</p>
              <button className='btn px-32 btn-secondary mb-5 text-lg font-bold'>Submit</button>
            </div>
          </div>
          <div className='mt-16 bg-[#7e4129] h-1/2 p-9'>
          <img width={100} src={rightform} alt="" />
<p className='text-white font-bold'>Call to Get a Free 1-on-1</p>
<p className='text-white font-bold'>Smart Home Security <br /> Consultation</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner