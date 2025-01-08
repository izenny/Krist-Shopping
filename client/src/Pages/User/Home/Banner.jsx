import React from 'react'
import homemodel  from '../../../assets/homemodel.png'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='flex bg-slate-100 min-h-52 w-full'>
        <div className='flex relative flex-col items-center flex-grow justify-center'>
            <div className='space-y-3 '>
            <h2 className=' md:text-2xl'>Classic Exclusive</h2>
            <h1 className='font-medium md:text-4xl'>Women's Collection</h1>
            <h2 className='md:text-2xl'>UPTO 40% OFF</h2>
            <button onClick={() => navigate('/product-listing')} className='bg-black text-white p-2 rounded-md text-sm px-4'>Shop Now </button>
            </div>
        </div>
        <div className=' w-1/2'>
            <img src={homemodel} alt="" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Banner

