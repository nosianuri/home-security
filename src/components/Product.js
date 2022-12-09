import React from 'react';
import './Product.css';
import star from '../assets/star.svg';
import starhalf from '../assets/star-half-fill.svg';
import starno from '../assets/star-no-fill.svg';

const Product = ({ product }) => {
    return (


        //  <div className='card lg:max-w-lg bg-base-100 shadow-md px-3 mx-auto'>
        //     <img className='' width={60} src={product.img} alt="" />

        //     <div className=' flex-col gap-3'>
        //     <h1 className='overflow-ellipsis overflow-hidden whitespace-nowrap'>{product.name}</h1>
        //         <span className='flex items-center mt-1'>
        //             <img src={star} alt="" />
        //             <img src={star} alt="" />
        //             <img src={star} alt="" />
        //             <img src={starhalf} alt="" />
        //             <img src={starno} alt="" />
        //             <span className='text-xs ml-2 text-gray-500'>{product.star}k reviews</span>
        //         </span>
        //         <div className='mt-5 flex gap-2'>
        //             <button className='bg-secondary hover:bg-secondary-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition'>
        //             View Details
        //             </button>
        //         </div>
        //     </div>
        // </div> 
<div>

        <div className="lg:max-w-md bg-base-100 shadow-xl">
        <h2 className="bg-[#ee6c4d] py-2 text-white pl-2">{product.name}</h2>
            <figure className=" pt-10 product-img flex justify-center">
                <img className='' width={60} src={product.img} alt="Shoes" class=" transform transition-all hover:skew-x-6" />
            </figure>
            <div className=" items-center mt-5 ">
            
                <h2 className=" text-center">{product.name}</h2>
                <span className='flex items-center mt-1 pl-5 justify-center'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={starhalf} alt="" />
                    <img src={starno} alt="" />
                    <span className='text-xs ml-2 text-gray-500'>{product.star}k reviews</span>
                </span>
               
                <div className='pl-5 my-3'>
                <p className='gap-3'><i className="fa-regular fa-circle-check pr-3"></i>{product.detail} </p>
                    <p className='gap-3'><i className="fa-regular fa-circle-check pr-3"></i>{product.description}</p>
                </div>
                    <div className='mx-5 pb-4 text-center'>
                    <button className="btn lg:w-full w-1/2 view-btn"><a href="/#topform">Get Quote</a></button>
                    </div>
                
            </div>
        </div>
        
        </div>
    )
}

export default Product