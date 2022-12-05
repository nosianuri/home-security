import React from 'react';
import reach from "../assets/home-banner.avif"

const SubmitForm = () => {
  return (
    <div>
      <div style={{
        background: `url(${reach})`
      }} className='px-10 py-14 flex items-center '>
        <div className='bg-[#7e4129] w-[500px] p-8 rounded-2xl shadow-md' data-aos="fade-up">
          <div className='text-center pb-5 '>
            <p className='text-3xl pb-3 text-white'>
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
            <button className='btn px-32 btn-secondary mb-5 text-lg font-bold'>Submit</button>
          </div>

          {/* <div className='grid grid-cols-1 justify-items-center gap-5 '>
            <input
                type='text'
                placeholder='Email Address'
                className='input w-full max-w-md'
            />
            <input
                type='text'
                placeholder='Subject'
                className='input w-full max-w-md'
            />
            <textarea
                className='textarea w-full max-w-md'
                placeholder='Your message'
                rows={6}
            ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </div> */}
        </div>

      </div>


    </div>
  )
}

export default SubmitForm