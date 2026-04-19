import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>671314 Jodhpur <br /> Rajasthan, Indian</p>
          <p className='text-gray-500'> Tel: 7014020942 <br />Email: b23ch1037@iitj.ac.in</p>
          <p className='font-semibold text-xl text-gray-600 cursor-pointer hover:text-black transition' onClick={() => navigate('/careers')}>Careers at Forever</p>
          <p className='text-gray-500'> Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
