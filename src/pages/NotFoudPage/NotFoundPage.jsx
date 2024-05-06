import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

    const navigate=useNavigate()
  const location=useLocation()

  return (
    <div>
        <h2>404 ERROR! (not found)</h2>
        <img width={300} src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png" alt="error page"/>
   <button onClick={() => navigate(-1)}>Go back</button>
   <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default NotFoundPage