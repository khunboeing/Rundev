import React from 'react'
import './MiniProfileComponent.css'
import Profileforcardpage from '../../img/boeing2finger.jpg'
import defaultpic from '../../img/userdefaultpic.webp'
import { Link } from 'react-router-dom'

function MiniProfileComponent(props) {

  const {personalData, calculateBMI} = props
  const bmi = calculateBMI(personalData.bio.weight, personalData.bio.height)
  return (
    <>
    <div className='miniprofile-container'>
        <div className='miniprofile-box'>
          <div className='miniprofile-img'>
            <img src={personalData.bio.picture || defaultpic} />
          </div>
          <div className='miniprofile-info'>
            <p>{personalData.bio.name} </p>
            <p>BMI : {bmi}</p>
            <p>Total Run : {personalData.rundiary.reduce((acc, current)=>{
                        return acc+current.distance
                    },0)}</p>
            <Link to='/login'><button onClick={()=> localStorage.removeItem('auth')}>Log Out</button></Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default MiniProfileComponent