import React from 'react'
import Login from './Account/Login'
import Register from './Account/Register'
import ForgotPassword from './Account/ForgotPassword'
import Otp from './Account/Otp'
import Successfull from './Components/Common/Successfull'
import Navbar from './Components/User/Navbar/Navbar'
import CategoryBox from './Components/User/Navbar/CategoryBox'
import Home from './Pages/User/Home/Home'
import ProductView from './Components/User/Product/ProductView'
import Product from './Components/User/Product/Product'
import ProductDetails from './Pages/User/Product/ProductDetails'
import Footer from './Components/User/Footer/Footer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      {/* <Home/> */}
      {/* <ProductView/> */}
      <ProductDetails/>
      {/* <Product/> */}

      <Footer/>

      {/* <Product/> */}
      {/* <CategoryBox/> */}
      {/* <Successfull/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <ForgotPassword/> */}
      {/* <Otp/> */}
    </div>
  )
}

export default App