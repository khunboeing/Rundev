import React from 'react'
import './FullRunDiaryPage.css'
import Nav from '../../Components/NavComponent/NavComponent'
import OnlyCardComponent from '../../Components/OnlyCardComponent/OnlyCardComponent'
import MiniProfileComponent from '../../Components/MiniProfileComponent/MiniProfileComponent'



function FullRunDiaryPage() {
  return (
    <>
    <div className='fullpage-rundiary-container'>
    <Nav />
        <div className='fullpage-rundiary-box'>
          <div className='fullpage-rundiary-profile'>
            <MiniProfileComponent />
          </div>
          <div className='fullpage-rundiary-card'>
            <OnlyCardComponent />
          </div>
        </div>  
    </div>
    </>
  )
}

export default FullRunDiaryPage