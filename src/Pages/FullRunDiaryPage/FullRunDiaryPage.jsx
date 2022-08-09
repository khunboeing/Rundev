import React from 'react'
import './FullRunDiaryPage.css'
import Nav from '../../Components/NavComponent/NavComponent'
import OnlyCardComponent from '../../Components/OnlyCardComponent/OnlyCardComponent'
import MiniProfileComponent from '../../Components/MiniProfileComponent/MiniProfileComponent'
import {useContext} from 'react'
import { DataContext } from '../../App'




function FullRunDiaryPage() {
  const context = useContext(DataContext)
  const {data,calculateBMI} = context
  return (
    <>
    <div className='fullpage-rundiary-container'>
    <Nav />
        <div className='fullpage-rundiary-box'>
          <div className='fullpage-rundiary-profile'>
            <MiniProfileComponent  personalData={{
                    user: data.user,
                    bio: data.bio,
                    rundiary: data.rundiary,
                  }} 
                  calculateBMI={calculateBMI}/>
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