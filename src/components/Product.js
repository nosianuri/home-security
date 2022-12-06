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


        <div className="card lg:max-w-lg bg-base-100 ">
            <figure className=" pt-10 product-img">
                <img className='' width={60} src={product.img} alt="Shoes" class=" transform transition-all hover:skew-x-6" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{product.name}</h2>
                <span className='flex items-center mt-1 pl-5'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={starhalf} alt="" />
                    <img src={starno} alt="" />
                    <span className='text-xs ml-2 text-gray-500'>{product.star}k reviews</span>
                </span>
                <p className='gap-3'><i className="fa-regular fa-circle-check pr-3"></i>{product.detail} <br />
                    <span className='gap-3'><i className="fa-regular fa-circle-check pr-3"></i>{product.description}</span></p>
                <div className="dropdown dropdown-bottom dropdown-end ">
                    <label tabIndex="0" className="btn m-1 px-16 bg-secondary text-white view-btn"><a href="/#topform">Get Quote</a></label>
                    {/* <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-secondary rounded-box w-52">
                        <li className='text-white'><a>Item 1</a></li>
                        <li className='text-white'><a>Item 2</a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Product