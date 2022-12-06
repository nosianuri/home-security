import React from 'react';
import vivintlogo from "../assets/vivint-black.png";
import './Offer.css';

const Offer = () => {
  return (
    <div className='bg-base-200' id='offer'>
      <div>
        <h2 className='bg-secondary text-2xl text-white pl-10'>Automation Security System</h2>
        <div className='lg:flex p-5 justify-between'>
          <div><img width={200} src={vivintlogo} alt="" /></div>
          <div>
            <h1 className='text-2xl font-bold'>What we like about Vivint</h1>
            <p><span><i class="fa-solid fa-check pr-2"></i></span> Free professional installation</p>
            <p><span><i class="fa-solid fa-check pr-2"></i></span>Lifetime warranty on devices & car guard</p>
            <p><span><i class="fa-solid fa-check pr-2"></i></span>Advanced Home Automation</p>
          </div>
          <div className='offer-btn-box'>
            <button className='btn bg-secondary text-white mb-3 text-2xl mt-2'><i class="fa-solid fa-up-right-from-square"></i><span className='pl-2 '>Reaquest a quote</span></button>
            <div>
              <button className='btn bg-secondary text-white px-10 text-2xl pb-offer'><a href='tel+18554301263'>
              <i class="fa-solid fa-phone pr-2"></i>(855) 430-1263
              </a></button>
            </div>

          </div>
        </div>
        <div className='lg:flex justify-between p-5 bg-slate-400'>
          <div className='offer-btn-box'>
            <button className='btn bg-white text-secondary mr-2'><i class="fa-solid fa-truck-monster pr-2"></i>Professional Installation</button>
            <button className='btn bg-white text-secondary mr-2'><i class="fa-solid fa-shield-halved pr-2"></i>24x7 Monitoring</button>
            <button className='btn bg-white text-secondary mr-2'><i class="fa-solid fa-mobile-screen-button pr-2"></i>Mobile App</button>
            <button className='btn bg-white text-secondary'><i class="fa-solid fa-fire pr-2"></i>Fire Monitoring</button>
          </div>
          <div>
            <a href="" className='font-bold'>Show more feature<i class="fa-solid fa-right-to-bracket pl-2 mt-3"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer