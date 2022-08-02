import React from 'react'
import './RankingComponent.css'
import TrophyRanking from '../../img/icontrophy64.png'
import RankingNameComponent from '../RankingNameComponent/RankingNameComponent'

function RankingComponent() {
  return (
    <div className='ranking'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='ranking-head'>
        <h2>Ranking</h2>
        <img src={TrophyRanking}/>
      </div>
      <div className='ranking-name'>
        <RankingNameComponent />
        <RankingNameComponent />
        <RankingNameComponent />
      </div>
    </div>
  )
}

export default RankingComponent