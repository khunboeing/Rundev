import React from 'react'
import './CreateProfilePage.css'
import NavComponent from '../../Components/NavComponent/NavComponent'
import CreateProfileEditProfileComponent from '../../Components/CreateProfileComponent/CreateProfileComponent'
// import '../NavComponent/NavComponent.css'
import Logo from '../../img/icon-runworker.png'
import { Link } from 'react-router-dom'

function CreateProfilePage() {
  return (
    <>
     <div className='nav-container'>
            <div className='nav-logo'>
                <img src={Logo} alt="RUN-DEV" /><h1>RUN-DEV{'/>'}</h1>
            </div>
            <div className='nav-btn'>
                <Link to="#">About Me</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    <div className='createprofile-page-container'>
        <div className='page-createprofile-container'>
        < CreateProfileEditProfileComponent />
        </div>
    </div>
    </>
  )
}

export default CreateProfilePage