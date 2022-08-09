
import "./RunDiaryBoxComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {DataContext} from '../../App';
import {useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';


function RunDiaryBoxComponent() {
 
  const context = useContext(DataContext)
  const{createRunDiary} = context

  const navigate = useNavigate()
  

  const [runDiary, setRunDiary] = useState({
    name: "",
    date: "",
    distance: 0,
    motivate: "",
  });

  function handleChange(event) {
    setRunDiary({...runDiary, [event.target.name]:event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    createRunDiary({...runDiary,id:uuidv4(),distance: Number(runDiary.distance)})
    navigate('/')
  }

  return (
    <>
      <div className="rundiarybox-box">
        <h2>Run Diary</h2>
        <form onSubmit={handleSubmit} className="rundiarybox-form">
          <div className="rundiarybox-form-info">
            <label htmlFor="name">Name</label>
          </div>
          <div className="rundiarybox-form-input">
            <input onChange={handleChange} type="text" name="name" id="name" />
          </div>

          <div className="rundiarybox-form-info">
            <label htmlFor="date">Date</label>
          </div>
          <div className="rundiarybox-form-input">
            <input onChange={handleChange} type="date" name="date" id="date" />
          </div>

          <div className="rundiarybox-form-info">
            <label htmlFor="distance">Distances/KM</label>
          </div>
          <div className="rundiarybox-form-input">
            <input
              onChange={handleChange}
              type="number"
              name="distance"
              id="distance"
            />
          </div>

          <div className="rundiarybox-form-info">
            <label htmlFor="motivate">Motivate</label>
          </div>
          <div className="rundiarybox-form-input">
            <input
              onChange={handleChange}
              type="text"
              name="motivate"
              id="motivate"
            />
          </div>

          <div className="rundiarybox-form-btn">
            <button className="rundiarybox-form-btn-create" type="submit">
              Create
            </button>
            <Link to="/">
              <button className="rundiarybox-form-btn-cancel" type="submit">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RunDiaryBoxComponent;
