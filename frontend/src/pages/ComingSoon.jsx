import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComingSoon = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-4'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>Coming Soon</h1>
        <p className='text-xl text-gray-600 mb-8'>We're working on something amazing for you. Stay tuned!</p>
        <button
          onClick={() => navigate(-1)}
          className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ComingSoon
