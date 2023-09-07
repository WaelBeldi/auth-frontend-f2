import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.authReducer.user)
  console.log("user:", user)
  return (
    <div>
      <h1>First Name: {user?.name}</h1>
      <h1>Last Name: {user?.lastName}</h1>
      <h1>Email: {user?.email}</h1>
    </div>
  )
}

export default Profile