import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Why Choose Us?  

- Quality Assurance – Every appliance is tested for performance & durability.  
- Affordable Prices – Save big on top brands without compromising on quality.  
- Eco-Friendly Choice – Reduce waste by giving appliances a second life.  
- Warranty & Support – Enjoy peace of mind with our limited warranty on all products.  
- Fast & Hassle-Free Delivery – Get your appliance delivered to your doorstep.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-7022220301</li>
                <li>contact@preownedappliances.in</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ preownedappliances.in - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
