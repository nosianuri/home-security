import React from 'react';
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
      slidesPerView={2}
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
            <div class={`card w-full h-3/2 lg:card-side bg-[#1e73be] shadow-xl`}>
              <div class="card-body text-white">
                <h2 class="card-title text-2xl">{description}</h2>
                <p>{name}</p>
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