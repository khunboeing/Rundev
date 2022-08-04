import React from 'react'
import './OnlyCardComponent.css'
import RunDiaryCardComponent from '../../Components/RunDiaryCardComponent/RunDiaryCardComponent'

function OnlyCardComponent() {

  return (
    <>
    <div className='onlycardrundairy-container'>
      
    <div className='onlycardrundairy-km-icon'>
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
      <RunDiaryCardComponent />
    </div>
    </div>
    </>
  )
}

export default OnlyCardComponent