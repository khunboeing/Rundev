import React from 'react'
import Nav from '../../Components/NavComponent/NavComponent'
import "./AboutMePage.css"
import creatorpic from '../../img/boeingnormal.jpg'


function AboutMePage() {
  return (
    <>
    <div className='aboutme-page' style={{overflow: 'hidden'}}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    <Nav />
   <div className='aboutme-container'>
      <div className='aboutme-topic'>
          <h2>About This Project</h2>
          <p> Running is an exercise that does not require any exercise equipment. Running and brisk walking are something that we can easily do every day. <br/>What made this project happen? To help people who love running to have the space to record their runs. And create motivation to exercise for people who like to run and walk.
          </p>
          <p> It is a web app created as a diary for running enthusiasts for running records, distances, and collecting everything like a running diary.</p>
      </div>
      <div className='aboutme-creator'>
          <div className='aboutme-creator-name'>
          <h2>Creator</h2>
          <p> Napatpimon Pon.(Boeing)</p>
          <p> Software Developer</p>
         <div >
         <ul className='aboutme-creator-icons'>
                <li class="aboutme-creator-icon"><a class="btn-glass" href="https://www.facebook.com/boeing.miffy/"><img src="https://img.icons8.com/ios/50/000000/facebook-circled--v1.png"/></a></li>
                <li class="aboutme-creator-icon"><a class="btn-glass" href="https://twitter.com/boeing_miffy"><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png"/></a></li>
                <li class="aboutme-creator-icon"><a class="btn-glass" href="https://www.instagram.com/bingbing_cat636/"><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a></li>
                <li class="aboutme-creator-icon"><a class="btn-glass" href="https://github.com/khunboeing?tab=repositories"><img src="https://img.icons8.com/glyph-neue/64/000000/github.png"/></a></li>
                <li class="aboutme-creator-icon"><a class="btn-glass" href="https://www.linkedin.com/in/napatpimon-ponpathanapaisarn-162420243/"><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a></li>
                
            </ul>
         </div>
          </div>
          <div className='aboutme-creator-img'>
          <img src={creatorpic}/>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default AboutMePage