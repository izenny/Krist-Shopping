import React from 'react'
import Login from './Account/Login'
import Register from './Account/Register'
import ForgotPassword from './Account/ForgotPassword'
import Otp from './Account/Otp'
import Successfull from './Components/Common/Successfull'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Successfull/>
      <Login/>
      <Register/>
      <ForgotPassword/>
      <Otp/>
    </div>
  )
}

export default App