import React, { useEffect, useState } from 'react'
import Product from './Product';
import {products} from './data';

const Products = () => {
    const [noOfElement, setnoOfElement] = useState(4);
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement);
    }
    const slice = products.slice(0, noOfElement);
    


return (
    <div className='mb-28 mt-10 px-16 ' id="products">
        <div className='text-center py-5'>
            <h3 className='text-[#ee6c4d] uppercase'>EVERYTHING WORKS TOGETHER</h3>
            <h2 className='lg:text-4xl text-xl font-bold py-5'>Combine products
                for a safer home</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            {
                slice.map(product => <Product key={product._id} product={product}></Product>)
            }
            
        </div>
        <div className='text-center mt-10'>
                <button onClick={() => loadMore()} className="btn view-btn">View More</button>
            </div>
    </div>
)
}

export default Products