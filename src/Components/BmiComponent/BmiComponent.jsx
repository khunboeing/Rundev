
import React from 'react'
import './BmiComponent.css'
import {useState} from 'react'
import {DataContext} from '../../App'
import {useContext} from 'react'

function BmiComponent() {
  const [bmi, setBmi] = useState(0)
  const context = useContext(DataContext)
  const [bio, setBio] = useState({weight:'',height:''}) 

  function handleOnChange(event){
   setBio({...bio,[event.target.id]:event.target.value})
  }
function handleSubmit(event){
  event.preventDefault()
  const calculatedBmi = context.calculateBMI(Number(bio.weight), Number(bio.height))
  setBmi(calculatedBmi)
}


  return (
    <div className='bmi'>
      <div className='bmi-container'>
          <h2>BMI CALCULATER</h2>
        <form onSubmit={handleSubmit}>
          <div className='bmi-home-height'>
          <label htmlFor="height">Height</label>
          <input onChange={handleOnChange} type="number" id='height' placeholder=' Put your height here' required className='home-bmi-input' />
          <p>Unit/cm</p>
          </div>
          <div className='bmi-home-weight'>
          <label htmlFor="weight">Weight</label>
          <input onChange={handleOnChange} type="number" id='weight' placeholder=' Put your weight here' required className='home-bmi-input' />
          <p>Unit/kg</p>
          </div>
          <div className='bmi-home-solution'>
            <input className='btn-bmi-submit' type='submit' value='ComputeBmi'/>
            <input disabled value={bmi} type="number" className='home-bmi-compute' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default BmiComponent;