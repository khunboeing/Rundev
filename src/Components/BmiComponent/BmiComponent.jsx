
import React from 'react'
import './BmiComponent.css'

function BmiComponent() {
  return (
    <div className='bmi'>
      <div className='bmi-container'>
          <h2>BMI CALCULATER</h2>
        <form>
          <div className='bmi-home-height'>
          <label htmlFor="height">Height</label>
          <input type="number" id='height' placeholder=' Put your height here' required className='home-bmi-input' />
          <p>Unit/cm</p>
          </div>
          <div className='bmi-home-weight'>
          <label htmlFor="weight">Weight</label>
          <input type="number" id='weight' placeholder=' Put your weight here' required className='home-bmi-input' />
          <p>Unit/kg</p>
          </div>
          <div className='bmi-home-solution'>
            <button>Compute BMI</button>
            <input type="number" className='home-bmi-compute' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default BmiComponent;