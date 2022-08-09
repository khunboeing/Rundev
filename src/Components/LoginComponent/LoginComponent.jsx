import React from 'react'
import './LoginComponent.css'
import {Link} from 'react-router-dom'

function LoginComponent() {
  return (
    <>
    <div className='login-container'>
       <h2>Log In</h2>
       <form action="" className='login-component-form'>
         <div className='login-username'>
           <label htmlFor="">E-mail</label>
           <input type="text" required />
         </div>
         <div className='login-password'>
           <label htmlFor="">Password</label>
           <input type="number" required />
         </div>
         <Link to='/createprofile'>Create New Account{'<<'}</Link>
         <Link to='/'><input type='submit' value='OK'/></Link>
       </form>
    </div>
    </>
  )
}

export default LoginComponent