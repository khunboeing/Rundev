import React from 'react'
import './MiniProfileComponent.css'
import Profileforcardpage from '../../img/boeing2finger.jpg'

function MiniProfileComponent(props) {

  const {personalData, calculateBMI} = props
  const bmi = calculateBMI(personalData.bio.weight, personalData.bio.height)
  return (
    <>
    <div className='miniprofile-container'>
        <div className='miniprofile-box'>
          <div className='miniprofile-img'>
            <img src={Profileforcardpage} />
          </div>
          <div className='miniprofile-info'>
            <p>Boeing Miffy </p>
            <p>BMI : {bmi}</p>
            <p>Total Run : {personalData.rundiary.reduce((acc, current)=>{
                        return acc+current.distance
                    },0)}</p>
            <button>Log Out</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default MiniProfileComponent