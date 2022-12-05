import React from 'react'
import Product from './Product';

const Products = () => {
  
 
const products = [
    {
        _id: 1,
        name: 'Pay Per Call',
        description: 'Consistently named the #1 Pay Per Call Network, Ray provides consistency in quality and volume for advertisers across more than two dozen pay per call verticals.',
         img: ''
    },
    {
        _id: 2,
        name: 'Lead Generation',
        description: 'Acquire leads generated through dedicated vertical landing pages, content-site embeds. Leads are sold on an exclusive or shared basis.',
        img: ''
    },
    {
        _id: 3,
        name: 'Affiliate Network',
        description: 'Affiliate Partner Network: The key to a successful affiliate marketing campaign is to build relationships with people and companies.',
        img: ''
    },
    {
        _id: 4,
        name: 'Brand Safety',
        description: 'It is our mission to build a fully-transparent, brand-safe ecosystem that benefits advertisers, publishers, and consumers',
        img: ''
    },
]
  return (
    <div className='mb-28 mt-10 px-16 ' id="services">
    <div className='text-center py-5'>
    <h3 className='text-primary text-4xl uppercase'>Our Services</h3>
        <h2 className='text-xl py-5'>Here’s What You’ll Get</h2>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
{
  products.map(product=><Product key={product._id} product={product}></Product>)
}
    </div>
    </div>
  )
}

export default Products