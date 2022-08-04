
import React from 'react'
import './RunDiaryBoxComponent.css'

function RunDiaryBoxComponent() {
  return (
    <>
    <div className='rundiarybox-box'>
            <h2>Run Diary</h2>
              <form action="" className='rundiarybox-form'>

                <div className='rundiarybox-form-info'>
                  <label htmlFor="name">Name</label>
                  </div>
                  <div className='rundiarybox-form-input'>
                  <input type="text" name="name" id="name" />
                </div>

                <div className='rundiarybox-form-info'>
                  <label htmlFor="date">Date</label>
                  </div>
                  <div className='rundiarybox-form-input'>
                  <input type='date' name="date" id="date" />
                </div>

                <div className='rundiarybox-form-info'>
                  <label htmlFor="distance">Distances/KM</label>
                  </div>
                  <div className='rundiarybox-form-input'>
                  <input type='number' name="distance" id="distance" />
                </div>

                <div className='rundiarybox-form-info'>
                  <label htmlFor="motivate">Motivate</label>
                  </div>
                  <div className='rundiarybox-form-input'>
                  <input type='text' name="motivate" id="motivate" />
                </div>

                <div className='rundiarybox-form-btn'>
                  <button className='rundiarybox-form-btn-create' type='submit'>Create</button>
                  <button className='rundiarybox-form-btn-cancel' type='submit'>Cancel</button>
                </div>

              </form>
    </div>
    </>
  )
}

export default RunDiaryBoxComponent