import React from 'react'
import './RankingNameComponent.css'
import WinRankPicprofile from '../../img/mikesmile2.jpg'
import defaultpic from '../../img/userdefaultpic.webp'

function RankingNameComponent(props) {
    // const rankingName = {
    //     name:'Kittichon',
    //     lastname:'Jr',
    //     totalkm:'74'
    // }
  return (
    <div className='rankname-component'>
      <div className='rankname-component-no-pic'>
      <p className='rankname-component-number'>No.{props.no +1} </p>
        <img src={props.data.picture || defaultpic} />
      </div>
        
        <div className='rankname-component-name-km'>
        <h3>
        {props.data.name}
        </h3>
        <p>{props.data.totalkm} KM</p>
        </div>

    </div>
  )
}

export default RankingNameComponent