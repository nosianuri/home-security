import React from 'react';
import quote from '../assets/img-quote.png';
import redstar from '../assets/redstar.png';
// import data
import { workouts } from './data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './workSlider.css';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper';

const ReviewItem = () => {
  // destructure data
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={32}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className='workoutSlider'
    >
      {programs.map((program, idx) => {
        // destructure program
        const { description, name } = program;

        return (

          <SwiperSlide
            key={idx}
          >
            <div class={`card w-full h-3/2 lg:card-side bg-[#f5f4f4] shadow-xl`}>
              <div class="card-body ">
              <img width={20} src={quote} alt="" />
              <div className='text-center'>
                <h2 className="card-title lg:text-lg text-sm text-[#703943]">{description}</h2>
                <span className='flex items-center py-3  justify-center'>
                    <img width={20} src={redstar} alt="" />
                    <img width={20} src={redstar} alt="" />
                    <img width={20} src={redstar} alt="" />
                    <img width={20} src={redstar} alt="" />
                    <img width={20} src={redstar} alt="" />
                    
                </span>
                <p className='text-[#76323f] text-xs'>{name}</p>
                </div>
              </div>
            </div>

            {/* <div className='lg:p-6  '>
             <p className='lg:text-xl'>{description}</p>
             <p className='lg:mt-5 text-sm'>{name}</p>
         </div> */}



          </SwiperSlide>

        );
      })}
    </Swiper>
  );
};
export default ReviewItem;



// import React from 'react'
// import './Review.css';

// const ReviewItem = ({ reviewitem }) => {
//   return (
//     <div className='slider'>
//       <div className='slide-track'>
//           <div className='lg:p-6 review-body slide'>
//             <p className='lg:text-xl'>{reviewitem.description}</p>
//             <p className='lg:mt-5 text-sm'>{reviewitem.name}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ReviewItem;