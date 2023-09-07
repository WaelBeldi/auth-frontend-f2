import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  return (
    <>
      {isAuth ? children : <Navigate to="/"/>}
    </>
  )
}

export default PrivateRoutes