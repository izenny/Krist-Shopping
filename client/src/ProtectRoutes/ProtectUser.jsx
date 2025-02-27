import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectUser = (isAuthenticated,user) => {
// const {isAuthenticated, user} = useSelector((state)=>state.auth)
if(!isAuthenticated && !user){
    return <Navigate to={'/login'}/>
      
}
return <Outlet/>
}

export default ProtectUser