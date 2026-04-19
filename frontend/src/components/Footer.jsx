import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Welcome to our online store, where fashion meets convenience. We are dedicated to providing you with a seamless shopping experience, offering a wide range of trendy and high-quality products at your fingertips. Our mission is to make fashion accessible to everyone, while delivering exceptional customer service and ensuring your satisfaction with every purchase.
            </p>
        </div>

        <div>
            <p className='text-xl font-meduim mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2'>
                <li><button className='px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition'>Home</button></li>
                <li><button className='px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition'>About us</button></li>
                <li><button className='px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition'>Delivery</button></li>
                <li><button className='px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition'>Privacy Policy</button></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-7014020942</li>
                <li>b23ch1037@iitj.ac.in</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All rights reserved</p>
      </div>  

    </div>
  )
}

export default Footer
