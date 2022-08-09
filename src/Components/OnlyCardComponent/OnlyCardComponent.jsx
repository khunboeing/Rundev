import React from 'react'
import './OnlyCardComponent.css'
import RunDiaryCardComponent from '../../Components/RunDiaryCardComponent/RunDiaryCardComponent'
import {DataContext} from '../../App'
import {useContext} from 'react'

function OnlyCardComponent() {
  const context = useContext(DataContext)
  return (
    <>
    <div className='onlycardrundairy-container'>
      
    <div className='onlycardrundairy-km-icon'>
     {context.data.rundiary.map((card)=>{
       return <RunDiaryCardComponent key={card.id} rundiary={card} />
     })}
    </div>
    </div>
    </>
  )
}

export default OnlyCardComponent