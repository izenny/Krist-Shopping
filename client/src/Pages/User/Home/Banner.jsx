import React from 'react'
import homemodel  from '../../../assets/homemodel.png'
const Banner = () => {
  return (
    <div className='flex bg-slate-100  w-full'>
        <div className='flex flex-col items-center flex-grow justify-center'>
            <div className='space-y-3 '>
            <h2 className='text-2xl'>Classic Exclusive</h2>
            <h1 className='font-medium text-4xl'>Women's Collection</h1>
            <h2 className='text-2xl'>UPTO 40% OFF</h2>
            <button className='bg-black text-white p-2 rounded-md text-sm px-4'>Shop Now </button>
            </div>
        </div>
        <div className='w-1/2 '>
            <img src={homemodel} alt="" />
        </div>
    </div>
  )
}

export default Banner
