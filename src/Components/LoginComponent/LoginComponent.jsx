import React from 'react'
import './LoginComponent.css'

function LoginComponent() {
  return (
    <>
    <div className='login-container'>
       <h2>Log In</h2>
       <form action="" className='login-component-form'>
         <div className='login-username'>
           <label htmlFor="">Username</label>
           <input type="text" required />
         </div>
         <div className='login-password'>
           <label htmlFor="">Password</label>
           <input type="number" required />
         </div>
         <a href="#">Create New Account{'<<'}</a>
         <button>OK</button>
       </form>
    </div>
    </>
  )
}

export default LoginComponent