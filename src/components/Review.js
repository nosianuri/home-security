import React from 'react'
import { workouts } from './data';
import ReviewItem from './ReviewItem';

const Review = () => {
    const {title, description } = workouts;

    return (
      <section className='section mb-5' id='review'>
        <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-10 text-center' data-aos-delay="200">
          <p className='lg:text-4xl !sm:text-xl mt-10 font-bold'>The proof is in the reviews</p>
          <p className='mt-5 mb-5'>See why more than a million customers love our smart home security systems and join our family.</p>
        </div>
          <div className='m-10'>
          <ReviewItem />  
          </div>
      </section>
    )
  }

export default Review;