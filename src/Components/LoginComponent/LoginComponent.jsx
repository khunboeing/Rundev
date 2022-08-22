import './LoginComponent.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
import {DataContext} from '../../App.jsx'
import { useContext } from 'react'


function LoginComponent() {

const [loginData, setLoginData] = useState({})
const context = useContext(DataContext)
const navigate = useNavigate()

 async function handleSubmit(e){
    e.preventDefault()
    try{
    const userInfo = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`,loginData)
    localStorage.setItem('auth',JSON.stringify(userInfo.data.userId))
    context.toggleForceRender()
    navigate('/')
    } catch(error){
      alert(error.response.data.message);
    }
  }
  function handleChange(e) {
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  return (
    <>
    <div className='login-container'>
       <h2>Log In</h2>
       <form onSubmit={handleSubmit} className='login-component-form'>
         <div className='login-username'>
           <label htmlFor="">E-mail</label>
           <input onChange={handleChange} type="email" name='email' id="email" required />
         </div>
         <div className='login-password'>
           <label htmlFor="">Password</label>
           <input onChange={handleChange}  type="password" name='password' id='password' required />
         </div>
         <Link to='/createprofile'>Create New Account{'<<'}</Link>
        <input type='submit' value='OK'/>
       </form>
    </div>
    </>
  )
}

export default LoginComponent