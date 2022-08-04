import React from 'react'
import './EditProfilePage.css'
import Nav from '../../Components/NavComponent/NavComponent'
import EditProfileComponent from '../../Components/EditProfileComponent/EditProfileComponent'

function EditProfilePage() {
  return (
    <>
    <Nav />
    <div className='edit-p-container'>
      <div className='edit-p-box'>
    <EditProfileComponent />
      </div>
    </div>
    </>
  )
}

export default EditProfilePage