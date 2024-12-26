import React from 'react'
import Review from '../../../Components/User/Review/Review'

const Reviews = () => {
  return (
    <div className='w-full p-10 space-y-10'>
        <h2 className='text-3xl font-serif font-medium'>Whats our Customer say's</h2>
        <Review/>
    </div>
  )
}

export default Reviews