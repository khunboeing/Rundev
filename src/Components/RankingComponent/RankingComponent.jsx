import React,{useId , useState, useEffect} from "react";
import "./RankingComponent.css";
import TrophyRanking from "../../img/icontrophy64.png";
import RankingNameComponent from "../RankingNameComponent/RankingNameComponent";
import axios from "axios";

function RankingComponent() {
const [ranking, setRanking] = useState([])

useEffect(()=>{
  (async function getAllUser(){
    // get data from backend
    const allUserData = await axios.get('http://localhost:2408/user')
    // sum user distance
    const allUserTotalDistance = allUserData.data.map((user)=>{
      return {totalkm:sumRundiaryKM(user.rundiary),name: user.bio.name,id:user._id,picture: user.bio.picture}
    })
    // sort distance from much to less
    allUserTotalDistance.sort((a,b)=>{
      return b.totalkm - a.totalkm
    })
    // set state
    setRanking(getTop3Ranking(allUserTotalDistance))
  })()
},[])

  function sumRundiaryKM(rundiary){
    const totalRun = rundiary.reduce((accumulative,current)=>{ 
      return accumulative + current.distance
    },0)
    return totalRun
  }
  function getTop3Ranking(users){
    let top3 =[]
    for (let i=0; i<3; i++){
      top3.push(users[i])
    }
    return top3
  }
  return (
    <div className="ranking">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="ranking-head">
        <h2>Ranking</h2>
        <img src={TrophyRanking} />
      </div>
      <div className="ranking-name">
        {ranking.map((item,index) => <RankingNameComponent key={item.id} data={item} no={index} />)}
      </div>
    </div>
  );
}

export default RankingComponent;
