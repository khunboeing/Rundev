import React from 'react'
import './RankingNameComponent.css'
import WinRankPicprofile from '../../img/mikesmile2.jpg'

function RankingNameComponent() {
    const rankingName = {
        name:'Kittichon',
        lastname:'Jr',
        totalkm:'74'
    }

  return (
    <div className='rankname-component'>
        <img src={WinRankPicprofile} />
        <h3>
        {rankingName.name} {rankingName.lastname}
        </h3>
        <p>{rankingName.totalkm} KM</p>
    </div>
  )
}

export default RankingNameComponent