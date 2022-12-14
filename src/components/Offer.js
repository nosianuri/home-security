import React from 'react';
import vivintlogo from "../assets/vivint-black.png";
import './Offer.css';

const Offer = () => {
  return (
    <div className='bg-base-200 mb-28' id='offer'>
      <div>
        <h2 className='offer-header text-2xl text-white pl-10 py-3'>Automation Security System</h2>
        <div className='lg:flex p-5 justify-between'>
          <div><img width={200} src={vivintlogo} alt="" /></div>
          <div>
            <h1 className='text-2xl font-bold'>What we like about Vivint</h1>
            <p><span><i className="fa-solid fa-check pr-2"></i></span> Get video push notification</p>
            <p><span><i className="fa-solid fa-check pr-2"></i></span>Smart home automation</p>
            <p><span><i className="fa-solid fa-check pr-2"></i></span>1080p HD video quality</p>
            <p><span><i className="fa-solid fa-check pr-2"></i></span>24/7 continuous video recording</p>
          </div>
          <div className='offer-btn-box'>
            <button className='btn request-btn text-white mb-3  mt-2'><a href="/#topform"><i className="fa-solid fa-up-right-from-square"></i><span className='pl-2 '>Reaquest a quote</span></a></button>
            <div>
              <button className='btn bg-secondary text-white px-10  pb-offer'><a href='tel:+18554301263'>
              <i className="fa-solid fa-phone pr-2"></i>(855) 430-1263
              </a></button>
            </div>

          </div>
        </div>
        <div className='lg:flex justify-between p-5 bg-slate-400'>
          <div className='offer-btn-box'>
            <button className='btn bg-white below-btn mr-2'><i className="fa-solid fa-truck-monster pr-2"></i>push notification</button>
            <button className='btn bg-white below-btn mr-2'><i className="fa-solid fa-shield-halved pr-2"></i>24x7 Monitoring</button>
            <button className='btn bg-white below-btn mr-2'><i class="fa-solid fa-mobile-screen pr-2"></i>mobile access</button>
            <button className='btn bg-white below-btn'><i className="fa-solid fa-fire pr-2"></i>home automation</button>
          </div>
          <div>
            <a href="" className='font-bold'>Show more feature<i className="fa-solid fa-right-to-bracket pl-2 mt-3"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer