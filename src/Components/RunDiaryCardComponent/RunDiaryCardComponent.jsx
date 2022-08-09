import React from 'react'
import './RunDiaryCardComponent.css'
import IconDeleteCaedhome from '../../img/icondelete-64.png'
import {useContext} from 'react'
import {DataContext} from '../../App'

function RunDiaryCardComponent(props) {

  const context = useContext(DataContext)
  const{deleteDiaryCard} = context

    const{rundiary:userdata} = props
    // const userdata = {
    //     name:'Run Run Cookie Runnn',
    //     date:'Tuseday 24 August 22',
    //     distance:'6',
    //     motivate:'For run run run'
    // }
  return (
    <div className='RunDiaryhome-card'>
        <div className='RunDiaryhome-card-info'>
            <p>{userdata.name}</p>
            <p>{userdata.date}</p>
            <p>{userdata.motivate}</p>
        </div>
        <div className='RunDiaryhome-card-km'>
            <button onClick={()=>deleteDiaryCard(userdata.id)} className='btn-delete-card-home'><img src={IconDeleteCaedhome} /></button>
            <p>{userdata.distance} Km</p>
        </div>
    </div>
  )
}

export default RunDiaryCardComponent