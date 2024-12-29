
import React from 'react'
import { CiInstagram } from 'react-icons/ci'
import instpost1 from '../../../assets/Post1.jpg'
import instpost2 from '../../../assets/Post2.jpg'
import instpost3 from '../../../assets/Post3.jpg'
import instpost4 from '../../../assets/Post4.jpg'
import instpost5 from '../../../assets/Post5.jpg'

const storiesData = [
  { id: 1, name: 'Post 1', image: instpost2 },
  { id: 2, name: 'Post 2', image: instpost3 },
  { id: 3, name: 'Post 3', image: instpost1 },
  { id: 4, name: 'Post 4', image: instpost4 },
  { id: 5, name: 'Post 5', image: instpost5 },
]

const InstaStories = () => {
  return (
    <div className='w-full p-5  space-y-10'>
      <h2 className='text-3xl font-serif font-medium text-center'>
        Our Instagram Stories
      </h2>
      <div className='flex justify-around flex-wrap gap-4 items-center  p-4'>
        {storiesData.map(({ id, name, image }) => (
          <div key={id} className='relative w-60 h-72'>
            <img src={image} alt={name} className='w-full h-full' />
            <div className='absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <CiInstagram className='text-white text-6xl' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstaStories
