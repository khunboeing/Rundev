import React from "react";
import "./CreateProfileComponent.css";
import FileBase from "react-file-base64";
import { useState, useRef } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function CreateProfileEditProfileComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    weight: 0,
    height: 0,
    age: 0,
    gender: "female",
    picture: "",
  });
  const refConfirmPassword = useRef()
  const refPassword = useRef()
  const divShowErrorPass = useRef()
  const divShowErrorConfirm = useRef()
  const navigate = useNavigate()

//เก็บของมาจาก input ทั้งหน้า
  function handleChange(event) {
    setFormData({...formData,[event.target.name]: event.target.value})
  }
  async function handleOnSubmit(event) {
    event.preventDefault()
    if (confirmPasswordCheck()) {
      // send to backend database
      try {
        
        const status = await axios.post(`${import.meta.env.VITE_BASE_URL}/login/signup`,{
          auth: { password: formData.password,email: formData.email },
          bio: {
            name: formData.name,
            weight: formData.weight,
            height: formData.height,
            age: formData.age,
            gender: formData.gender,
            picture: formData.picture,
          },
        })
        if (status.status === 200) alert(status.data.message)
        navigate('/login')
        clearError()
      } catch (error) {
        alert(error.response.data.message)
      }
    } else {
      setError()
    }
  }
  function setError(){
    refPassword.current.focus()
    refConfirmPassword.current.style.backgroundColor = '#e85757'
    refPassword.current.style.backgroundColor = '#e85757'

    divShowErrorPass.current.className = 'wrong-password'
    divShowErrorConfirm.current.className = 'wrong-password'
  }
  function clearError(){
    refConfirmPassword.current.style.backgroundColor = 'white'
    refPassword.current.style.backgroundColor = 'white'

    divShowErrorPass.current.className = ''
    divShowErrorConfirm.current.className = ''
  }
  function confirmPasswordCheck() {
    const confirmPassword = refConfirmPassword.current.value
    return formData.password === confirmPassword
  }


  return (
    <div className="Profile-user-container">
      <div className="profile-create-user">
        <h2>Create Account</h2>
        <form onSubmit={handleOnSubmit} className="form-create-profile">
          <div className="create-p-label">
            <label htmlFor="name">NAME</label>
          </div>
          <div className="create-p-input">
            <input onChange={handleChange} type="text" id="name" name="name" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="email">E-MAIL</label>
          </div>
          <div className="create-p-input">
            <input onChange={handleChange} type="email" id="email" name="email" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="password">PASSWORD</label>
          </div>
          <div  className="create-p-input">
            <div ref={divShowErrorPass} ></div>
            <input ref={refPassword} onChange={handleChange} type="password" id="password" name="password" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="pwconfirm">CONFIRM PASSWORD</label>
          </div>
          <div  className="create-p-input">
            <div ref={divShowErrorConfirm} ></div>
            <input ref={refConfirmPassword} onChange={confirmPasswordCheck} type="password" id="pwconfirm" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="weight">WEIGHT</label>
          </div>
          <div className="create-p-input">
            <input onChange={handleChange} type="number" id="weight" name="weight" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="height">HEIGHT</label>
          </div>
          <div className="create-p-input">
            <input onChange={handleChange} type="number" id="height" name="height" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="age">AGE</label>
          </div>
          <div className="create-p-input">
            <input onChange={handleChange} type="number" id="age" name="age" required />
          </div>

          <div className="create-p-label">
            <label htmlFor="gender">GENDER</label>
          </div>
          <div className="create-p-gender">
            <select onChange={handleChange} name="gender" id="gender">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <div className="create-p-label-load">
            <FileBase onDone={(filePic)=>setFormData({...formData,picture: filePic.base64})} type="file" multiple={false} />
          </div>
          <div className="btn-create-profile">
            <button type="submit">Create Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfileEditProfileComponent;
