import React from 'react';
import homebanner from "../assets/banner.avif";
import './Banner.css';
import rightform from "../assets/rightform.png";

const Banner = () => {
  return (
    <div className=''>
      <div style={{
                background: `url(${homebanner})` 
            }} className='!bg-cover !bg-no-repeat'>
            <div class="bg-opacity-25"></div>

      <div className='px-10 py-14 items-center justify-center bg-opacity-25 bg-gray-700'>
      
        <div className='text-center pb-5 text-white bg-opacity-25'>
          <p className='lg:text-4xl md:text-2xl text-xl pb-3 font-bold'>
            Get smart home products to protect <br /> what matters most
          </p>
          <h1 className=''>Customize your home security with 24/7 alarm monitoring</h1>
        </div>
        <div className='lg:flex justify-center mt-10'>
          <div className='lg:mt-16 bg-[#7e4129] h-1/2 p-5 right-form' >
            <p className='text-white text-xl'>Vivint Smart Home Offers:</p>
            <p className='text-white'><i class="fa-solid fa-check pr-2"></i>Vivint remote mobile access</p>
            <p className='text-white'><i class="fa-solid fa-check pr-2"></i>Get video push notification</p>
            <p className='text-white'><i class="fa-solid fa-check pr-2"></i>Smart home automation</p>
            <p className='text-white'><i class="fa-solid fa-check pr-2"></i>1080p HD video quality</p>
            <p className='text-white'><i class="fa-solid fa-check pr-2"></i>24/7 continuous video recording</p>
          </div>
          <div className='bg-base-200 lg:w-[450px]  rounded-2xl shadow-md  ' >
            <div>
              <div className='text-center pb-5 '>
                <p className='text-xl relative form_header  font bold'>
                <div className='h-[40px] w-[40px] absolute bg-[#365314] right-[200px]  rotate-45'></div>
                  <span className='absolute text-center justify-center right-[110px]'>Get a FREE quote now</span>
                </p>
                <h1 className='mt-3'>Just give us a few details to get your <br /> FREE personalized quote!</h1>
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
              <div className='lg:flex gap-4'>
                <input
                  type='text'
                  placeholder='ZIP*'
                  className='input lg:w-1/2 '
                /><input
                  type='text'
                  placeholder='Phone Number*'
                  className='input lg:w-3/2 phone-input'
                />
              </div>
              <p className='text-slate-400 leading-none'>By clicking “Request a Quote” you confirm you are genuinely interested in receiving more information about Vivint and constitutes your electronic signature by means of automatic technology; which may include phone calls, texts, emails, and prerecorded messages marketing Vivint. Consent is not required to make a purchase.</p>
              <button className='btn lg:px-32 btn-secondary mb-5 text-lg font-bold text-white'>Submit</button>
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
    </div>
  )
}

export default Banner