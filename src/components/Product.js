import React from 'react'

const Product = ({ product }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100">
            <figure class="px-10 pt-10">
                <img width={60} src={product.img} alt="Shoes" class=" transform transition-all hover:skew-x-6" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{product.name}</h2>
                <p><span class="rating pr-2 ">
                    <input type="radio" name="rating-1" class="mask mask-star bg-orange-400 mt-3" />
                    <input type="radio" name="rating-1" class="mask mask-star bg-orange-400 mt-3" checked />
                    <input type="radio" name="rating-1" class="mask mask-star bg-orange-300 mt-3" />
                    <input type="radio" name="rating-1" class="mask mask-star bg-orange-200 mt-3" />
                    <input type="radio" name="rating-1" class="mask mask-star mt-3" /><span className='mt-3 pl-2'>{product.star}</span>
                </span></p>
                <p className='gap-3'><i class="fa-regular fa-circle-check pr-3"></i>{product.detail} <br />
                    <span className='gap-3'><i class="fa-regular fa-circle-check pr-3"></i>{product.description}</span></p>
                <div class="dropdown dropdown-bottom dropdown-end ">
                    <label tabindex="0" class="btn m-1 px-16 bg-secondary">View Details</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-secondary rounded-box w-52">
                        <li className='text-white'><a>Item 1</a></li>
                        <li className='text-white'><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product