import React from 'react'
import './MiniProfileComponent.css'
import Profileforcardpage from '../../img/boeing2finger.jpg'

function MiniProfileComponent() {
  return (
    <>
    <div className='miniprofile-container'>
        <div className='miniprofile-box'>
          <div className='miniprofile-img'>
            <img src={Profileforcardpage} />
          </div>
          <div className='miniprofile-info'>
            <p>Boeing Miffy</p>
            <p>BMI</p>
            <p>Total Run</p>
            <button>Log Out</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default MiniProfileComponent