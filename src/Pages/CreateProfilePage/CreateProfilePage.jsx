import React from 'react'
import './CreateProfilePage.css'
import NavComponent from '../../Components/NavComponent/NavComponent'
import CreateProfileEditProfileComponent from '../../Components/CreateProfileComponent/CreateProfileComponent'

function CreateProfilePage() {
  return (
    <>
     < NavComponent />
    <div className='createprofile-page-container'>
        <div className='page-createprofile-container'>
        < CreateProfileEditProfileComponent />
        </div>
    </div>
    </>
  )
}

export default CreateProfilePage