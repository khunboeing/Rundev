import React from 'react'
import './RunDiaryHomeComponent.css'
import Iconaddrundiary from '../../img/icon-plus67.png'
import RunDiaryCardComponent from '../RunDiaryCardComponent/RunDiaryCardComponent'

function RunDiaryHomeComponent() {
  return (
    <div className='RunDiaryHomeComponent'>
      <div className="rundiaryhome-head">
        <h2>My Run Diary</h2>
        <a href="#"><img src={Iconaddrundiary} /></a>
      </div>
      <div className='run-diary-card'>
        <RunDiaryCardComponent />
        <RunDiaryCardComponent />
        <RunDiaryCardComponent />
        <RunDiaryCardComponent />
      </div>
      <button href='#'>See more</button>
    </div>
  )
}

export default RunDiaryHomeComponent