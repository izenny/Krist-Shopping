import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children,isAuthenticated,allowedRoles,userRole}) => {
if(!isAuthenticated){
    return <Navigate to={'/login'}/>
}

if(!allowedRoles.includes(userRole)){
    return <Navigate to={'/'}/>
}
return children
}

export default PrivateRoute