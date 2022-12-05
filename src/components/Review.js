import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from './ReviewItem';
import './Review.css';


function Review() {
    const review = [
        {
            name: 'Munker Naim',
            description: 'Apartment was beautiful and equipped with everything I needed (and lots of lovely touches / local design).',
            address: 'Khulna',
           
        },
        {
            name: 'Shamim hossen',
            description: 'We would recommend TravelGuru and will be using them again in the future Kristy and her team gave us excellent service And have an amazing time',
            address: 'Rajshahi',
             
        },
        {
            name: 'Toufiq hasan',
            description: 'Thank you for your great service. Absolutely no hassles at all. Would definitely book through you again.',
            address: 'Dhaka',
           
        },
        {
            name: 'Ezaz Islam',
            description: 'for an online travel agency it was a simple process to get the holiday sorted. Good support and service, will use again.',
            address: 'Barisal',
            img: 'https://i.ibb.co/XswcS7g/suga.png'
        },
        {
            name: 'Tamzidur Rahman',
            description: 'Overall very happy with service from TravelGuru; and TOL have kept us informed of issues.All went smoothly. Great deal.',
            address: 'Bogura',
            
        }
    ];

    // Owl Carousel Settings
    const options ={
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
  return (
    <section id='testimonial' className='testimonials pt-70 pb-70'>
        <div className='container mt-5'>
            <h4 className='miniTitle text-center'>Top experiences on Traveladvisor</h4>
            <div className='text-center'>
                <h3 className='sectionTitle'> Reviews</h3>
            </div>
            <p className='text-center'>What are the best and most trustworthy travel Guru review sites? </p>
            <div className='row review'>
                <div className='col-md-12'>
                    
                        {/* {
                            review.map(reviewDetail => {
                                return (
                                    <ReviewItem reviewDetail={reviewDetail} key={reviewDetail._key} />
                                )
                            })
                        } */}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review