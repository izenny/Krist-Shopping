import React from 'react'
import Banner from './Banner'
import Navbar from '../../../Components/User/Navbar/Navbar'
import Footer from '../../../Components/User/Footer/Footer'
import ShopByCategories from './ShopByCategories'
import DealOfTheMonth from './DealOfTheMonth'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <ShopByCategories/>
        <DealOfTheMonth/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home