import React from 'react'
import './EditProfileComponent.css'
import profilepicedit from '../../img/Boeing2finger.jpg'

function EditProfileComponent() {
  return (
    <div className='page-editprofile-container'>
      <form action="">
          <h1>Edit Your Profile</h1>
          <div className='profile-Account-picture'>
            <img src={profilepicedit} />
          </div>

                <div className='create-p-label'>
                  <label htmlFor="name">NAME</label>
                </div>
                <div className='create-p-input'>
                  <input type="text" id='name'placeholder='Boeing Miffy' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="password">PASSWORD</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='password'placeholder='password' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="pwconfirm">CONFIRM PASSWORD</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='pwconfirm'placeholder='password' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="weight">WEIGHT</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='weight' placeholder='55' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="height">HEIGHT</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='height' placeholder='158' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="age">AGE</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='age' placeholder='28' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="gender">GENDER</label>
                </div>
                <div className='create-p-gender'>
                <select name='gender' id='gender'>
                  <option value="woman">WOMAN</option>
                  <option value="man">MAN</option>
                </select>
                </div>

                <div className='create-p-label-load'>
                  <button className='btn-upload-profile-edit' htmlFor="upload">Click Upload Profile</button>
                </div>
                <div className='create-p-input'>
                  <input type="url" id='upload' required />
                </div>
              <button className='btn-save-editprofile'>SAVE</button>
      </form>
    </div>
  )
}

export default EditProfileComponent