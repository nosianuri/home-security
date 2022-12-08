import React from 'react'
import ReviewItem from './ReviewItem';

const Review = () => {
    // const reviewitems = [
    //     {
    //         _id: 1,
    //         description: '“The experience is magical.”',
    //         name: 'Maria Garcia',
    //     },
    //     {
    //         _id: 2,
    //         description: '“Great customer service and easy to deal with.”',
    //         name: 'Aiden Markram',
    //     },
    //     {
    //         _id: 3,
    //         description: '“I am having a great experience with Vivint Smart Home! I Absolutely love it!”',
    //         name: 'Paul Konerko',
    //     },
    //     {
    //         _id: 4,
    //         description: '“Lifesaver! I feel so much more secure & they have amazing customer service!”',
    //         name: 'Shai Hope',
    //     },
    //     {
    //         _id: 5,
    //         description: '“The most comprehensive smart home security system.”',
    //         name: 'Ralph Kiner',
    //     },
    //     {
    //         _id: 6,
    //         description: '“Do not DIY your smart home security system - the pros at Vivint are totally worth the cost.”',
    //         name: 'Kane Williamson',
    //     },
    //     {
    //         _id: 7,
    //         description: '“Great customer service and easy to deal with.”',
    //         name: 'Dave Pallone',
    //     },
    // ]



    return (
        <section className='section mb-5' id='review'>
            <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-10 text-center'>
                <p className='lg:text-4xl md:text-2xl text-xl mt-10 font-bold'>The proof is in the reviews</p>
                <p className='mt-5 mb-5'>See why more than a million customers love our smart home security systems and join our family.</p>
            </div>
            <div className='m-10'>
                <ReviewItem />  
                {/* <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        reviewitems.map(reviewitem => <ReviewItem key={reviewitem._id} reviewitem={reviewitem}></ReviewItem>)
                    }
                </div> */}
            </div>
        </section>
    )
}

export default Review;