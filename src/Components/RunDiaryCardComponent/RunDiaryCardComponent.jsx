import React from 'react'
import './RunDiaryCardComponent.css'
import IconDeleteCaedhome from '../../img/icondelete-64.png'
import {useContext} from 'react'
import {DataContext} from '../../App'
import axios from 'axios'

function RunDiaryCardComponent(props) {

  const context = useContext(DataContext)
  const{deleteDiaryCard, userID,toggleForceRender} = context

    const{rundiary:userdata} = props
    // const userdata = {
    //     name:'Run Run Cookie Runnn',
    //     date:'Tuseday 24 August 22',
    //     distance:'6',
    //     motivate:'For run run run'
    // }

  async function haddleDelete(){
    const deleted = await axios.delete(`${import.meta.env.VITE_BASE_URL}/user/${userID}/diary/${userdata.id}`)
    toggleForceRender()
  }

  return (
    <div className='RunDiaryhome-card'>
        <div className='RunDiaryhome-card-info'>
            <p>{userdata.name}</p>
            <p>{userdata.date}</p>
            <p>{userdata?.location || 'location'}</p>
            <p>{userdata.motivate}</p>
        </div>
        <div className='RunDiaryhome-card-km'>
            <button onClick={haddleDelete} className='btn-delete-card-home'><img src={IconDeleteCaedhome} /></button>
            <p>{userdata.distance} Km</p>
        </div>
    </div>
  )
}

export default RunDiaryCardComponent