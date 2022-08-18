import React from 'react'
import './RankingNameComponent.css'
import WinRankPicprofile from '../../img/mikesmile2.jpg'

function RankingNameComponent(props) {
    // const rankingName = {
    //     name:'Kittichon',
    //     lastname:'Jr',
    //     totalkm:'74'
    // }

  return (
    <div className='rankname-component'>
      <p className='rankname-component-number'>No.{props.no +1} </p>
        <img src={props.picture || WinRankPicprofile} />
        <h3>
        {props.data.name}
        </h3>
        <p>{props.data.totalkm} KM</p>
    </div>
  )
}

export default RankingNameComponent