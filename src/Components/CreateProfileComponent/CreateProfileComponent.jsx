import React from 'react'
import './CreateProfileComponent.css'

function CreateProfileEditProfileComponent() {
  return (
    <div className='Profile-user-container'>
        
        <div className='profile-create-user'>
              <form action="">
          <h2>Create Account</h2>

                <div className='create-p-label'>
                  <label htmlFor="name">NAME</label>
                </div>
                <div className='create-p-input'>
                  <input type="text" id='name' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="password">PASSWORD</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='password' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="pwconfirm">CONFIRM PASSWORD</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='pwconfirm' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="weight">WEIGHT</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='weight' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="height">HEIGHT</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='height' required />
                </div>

                <div className='create-p-label'>
                  <label htmlFor="age">AGE</label>
                </div>
                <div className='create-p-input'>
                  <input type="number" id='age' required />
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
                  <button htmlFor="upload">Click Upload Profile Pic</button>
                </div>
                <div className='create-p-input'>
                  <input type="url" id='upload' required />
                </div>
                <div className='btn-create-profile'>
              <button >Create Now</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default CreateProfileEditProfileComponent;