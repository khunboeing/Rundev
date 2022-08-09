import React from 'react'
import './CreateRunDiaryPage.css'
import Nav from '../../Components/NavComponent/NavComponent'
import RunDiaryBoxComponent from '../../Components/RunDiaryBox Component/RunDiaryBoxComponent'

function CreateRunDiaryPage() {
  return (
    <>
    <div className='create-rundiary-page'>
        <Nav />
    <div className='createrunndiary-page-seperatebox'>
        <RunDiaryBoxComponent />
    </div>
    </div>
    </>
  )
}

export default CreateRunDiaryPage