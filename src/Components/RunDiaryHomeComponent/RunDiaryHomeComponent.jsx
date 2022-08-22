import React from "react";
import "./RunDiaryHomeComponent.css";
import Iconaddrundiary from "../../img/iconadd-48.png";
import RunDiaryCardComponent from "../RunDiaryCardComponent/RunDiaryCardComponent";
import { Link } from "react-router-dom";

function RunDiaryHomeComponent(props) {
  const { rundiary } = props;
  let cards = [];
  const runDiaryCount = rundiary.length < 4 ? rundiary.length : 4 
  for (let i = 0; i < runDiaryCount; i++) {
    cards.push(rundiary[i]);
  }
  return (
    <div className="RunDiaryHomeComponent">
      <div className="rundiaryhome-head">
        <h2>My Run Diary</h2>
        <Link to="/createrundiary">
          <img src={Iconaddrundiary} />
        </Link>
      </div>
      <div className="run-diary-card">
        {cards.map((card) => (
          <RunDiaryCardComponent key={card.id} rundiary={card} />
        ))}
      </div>
      {cards.length >= 4 &&
        <Link to="/rundiary">
        <button>See more</button>
      </Link>
      }
    </div>
  );
}

export default RunDiaryHomeComponent;
