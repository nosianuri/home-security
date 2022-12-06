import React from 'react'
import Product from './Product';
import product1 from "../assets/door-lock-key-pad-small.png";
import product2 from "../assets/indoor-camera-small.png";
import product3 from "../assets/garage-door-controler-small.png";
import product4 from "../assets/motion-sensor-small.png";
import product5 from "../assets/outdoor-camera-pro.png";
import product6 from "../assets/smart-drive-v2-small.png";
import product7 from "../assets/thermostat-small.png";
import product8 from "../assets/motion-sensorjpg.jpg";
import product9 from "../assets/smart garage-door-opener.jpg";
import product10 from "../assets/Smarter-Home-Water-Valve-Shut-off.webp";
import product11 from "../assets/Smarter-Home-CO-alarm-166x150.webp";

const Products = () => {
  
 
const products = [
    {
        _id: 1,
        name: 'Pay Per Call',
        star: 3.5,
        detail: 'Privacy mode',
        description: 'One touch calling',
         img: product1
    },
    {
        _id: 2,
        name: 'Lead Generation',
        star: 4,
        detail: 'Lurker detection',
        description: '3x optical zoom',
        img: product2
    },
    {
        _id: 3,
        name: 'Affiliate Network',
        star: 3.6,
        detail: 'Package detection',
        description: 'Square aspect ratio',
        img: product3
    },
    {
        _id: 4,
        name: 'Brand Safety',
        star: 3.5,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product4
    },
    {
        _id: 5,
        name: 'Brand Safety',
        star: 3.6,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product5
    },
    {
        _id: 6,
        name: 'Brand Safety',
        star: 4,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product6
    },
    {
        _id: 7,
        name: 'Brand Safety',
        star: 3.2,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product7
    },
    {
        _id: 8,
        name: 'Brand Safety',
        star: 3.2,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product8
    },
    {
        _id: 9,
        name: 'Brand Safety',
        star: 3.2,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product9
    },
    {
        _id: 10,
        name: 'Brand Safety',
        star: 3.2,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product10
    },
    {
        _id: 11,
        name: 'Brand Safety',
        star: 3.2,
        detail: 'Privacy mode',
        description: 'One touch calling',
        img: product11
    },
]
  return (
    <div className='mb-28 mt-10 px-16 ' id="products">
    <div className='text-center py-5'>
    <h3 className='text-primary uppercase'>EVERYTHING WORKS TOGETHER</h3>
        <h2 className='text-4xl font-bold py-5'>Combine products
for a safer home</h2>
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