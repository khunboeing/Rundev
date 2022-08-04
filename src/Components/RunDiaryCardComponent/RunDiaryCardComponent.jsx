import React from 'react'
import './RunDiaryCardComponent.css'
import IconDeleteCaedhome from '../../img/icondelete-64.png'
function RunDiaryCardComponent() {
    const userdata = {
        name:'Run Run Cookie Runnn',
        date:'Tuseday 24 August 22',
        distance:'6',
        motivate:'For run run run'
    }
  return (
    <div className='RunDiaryhome-card'>
        <div className='RunDiaryhome-card-info'>
            <p>{userdata.name}</p>
            <p>{userdata.date}</p>
            <p>{userdata.motivate}</p>
        </div>
        <div className='RunDiaryhome-card-km'>
            <a href='#'><img src={IconDeleteCaedhome} /></a>
            <p>{userdata.distance} Km</p>
        </div>
    </div>
  )
}

export default RunDiaryCardComponent