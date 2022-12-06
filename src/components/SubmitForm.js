import React from 'react';
import reach from "../assets/banner.avif";

const SubmitForm = () => {
  return (
    <div id='getquote'>
      <div style={{
        background: `url(${reach})`
      }} className=' !bg-cover !bg-no-repeat'>
      <div className='px-10 py-14 flex items-center mt-10 bg-opacity-25'>
      
      <div className='bg-[#7e4129] w-[500px] p-8 rounded-2xl shadow-md' data-aos="fade-up">
          <div className='text-center pb-5 '>
            <p className='lg:text-3xl sm:text-xl pb-3 text-white'>
              <span className='font-bold'>Experience Smarter
                Security</span> with
              ADT-monitored <span className='font-bold'>Home
                Security Systems</span>
            </p>
            <h1 className='text-white'>Get peace of mind with an ADT smart home security
              system customized to the needs of your home and family.</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center px-8 gap-5 '>
            <div className='flex gap-4'>
              <input
                type='text'
                placeholder='First Name*'
                className='input w-1/2 '
              /><input
                type='text'
                placeholder='Last Name*'
                className='input w-1/2  '
              />
            </div>

            <input
              type='email'
              placeholder='Email Address'
              className='input w-full max-w-md'
            />

            <input
              type='text'
              placeholder='Phone Number*'
              className='input w-full max-w-md '
            />

            <p className='text-slate-400 leading-none'>By submitting this form you agree to our Communication and Privacy Policy </p>
            <button className='btn lg:px-32 md:px-16 sm:px-10 btn-secondary mb-5 text-lg font-bold text-white'>Submit</button>
          </div>

         
        </div>

      </div>
       
      </div>


    </div>
  )
}

export default SubmitForm