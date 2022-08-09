import React from 'react'
import Nav from '../../Components/NavComponent/NavComponent'
import './LoginPage.css'
import LoginComponent from '../../Components/LoginComponent/LoginComponent'

function LoginPage() {
  return (
    <>
    <div className='loginpage-container'>
      <div className='loginpage-seperate'>
      <LoginComponent />
      </div>
    </div>
    </>
  )
}

export default LoginPage
