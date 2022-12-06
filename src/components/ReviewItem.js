import React from 'react';
// import data
import { workouts } from './data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './workSlider.css';

// import required modules
import { Navigation } from 'swiper';

const ReviewItem = () => {
    // destructure data
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className='workoutSlider'
    >
      {programs.map((program, idx) => {
        // destructure program
        const { description, name } = program;
        
        return (
          <SwiperSlide
            className='max-w-[300px] max-h-[220px] relative bg-[#d0e1e8] m-6'
            key={idx}
          >
            <div className='lg:p-6 review-body'>
            <p className='lg:text-xl'>{description}</p>
            <p className='lg:mt-5 text-sm'>{name}</p>
            </div>
            
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default ReviewItem;