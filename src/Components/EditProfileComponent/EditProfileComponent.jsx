import React from "react";
import "./EditProfileComponent.css";
import FileBase from "react-file-base64";
import { DataContext } from "../../App";
import { useContext, useEffect } from "react";
import { useState, useRef } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import defaultpic from '../../img/userdefaultpic.webp';

function EditProfileComponent() {
  const context = useContext(DataContext);
  const { data, userID, toggleForceRender } = context;
  const refConfirmPassword = useRef();
  const divShowErrorPass = useRef();
  const divShowErrorConfirm = useRef();
  const refPassword = useRef();
  const navigate = useNavigate();

  const [isChangePassword, setIsChnagePassword] = useState(false);

  //edit and keep state back
  const [formData, setFormData] = useState({
    name: data.bio.name,
    weight: data.bio.weight,
    height: data.bio.height,
    age: data.bio.age,
    gender: data.bio.gender,
    picture: data.bio.picture,
  });
  useEffect(() => {
    setFormData({
      name: data.bio.name,
      weight: data.bio.weight,
      height: data.bio.height,
      age: data.bio.age,
      gender: data.bio.gender,
      picture: data.bio.picture,
    });
  }, [data]);
  //End edit and keep state back

  // toggle
  function toggle(event) {
    event.preventDefault();
    setIsChnagePassword(!isChangePassword);
  }
  //end toggle

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    //เอาข้อมูลเก่าถูกทับด้วยข้อมูลใหม่ที่ถูกแก้ไข จะทำให้พิมแก้ไขในinput ได้
  }
  function confirmPasswordCheck() {
    const confirmPassword = refConfirmPassword.current.value;
    return formData.password === confirmPassword;
  }
  function setError() {
    refPassword.current.focus();
    refConfirmPassword.current.style.backgroundColor = "#e85757";
    refPassword.current.style.backgroundColor = "#e85757";

    divShowErrorPass.current.className = "wrong-password";
    divShowErrorConfirm.current.className = "wrong-password";
  }
  function clearError() {
    refConfirmPassword.current.style.backgroundColor = "white";
    refPassword.current.style.backgroundColor = "white";

    divShowErrorPass.current.className = "";
    divShowErrorConfirm.current.className = "";
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (isChangePassword) {
      if (confirmPasswordCheck()) {
        //function ที่ส่งข้อมูลที่ได้มาไปupdate
        const userDataUpdated = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/user/${userID}`,
          {
            auth: { password: formData.password },
            bio: {
              name: formData.name,
              weight: formData.weight,
              height: formData.height,
              age: formData.age,
              gender: formData.gender,
              picture: formData.picture,
            },
          }
        );
        toggleForceRender();
      navigate('/')
        clearError();
      } else {
        setError();
      }
    } else {
      const userDataUpdated = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/user/${userID}`,
        {bio:formData}
      );
      toggleForceRender();
      navigate('/')
    }
  }

  return (
    <div className="page-editprofile-container">
      <form onSubmit={handleSubmit}>
        <h1>Edit Your Profile</h1>
        <div className="profile-Account-picture">
          <img src={formData.picture || defaultpic} />
        </div>
        <div>
          <div className="create-p-label">
            <label htmlFor="name">NAME</label>
          </div>
          <div className="create-p-input">
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              type="text"
              id="name"
              placeholder="Boeing Miffy"
              required
            />
          </div>

          <div className="btn-toggle-container">
            <button onClick={toggle} className="btn-toggle-pw">
              Change Password
            </button>
          </div>
          {/* toggle */}
          {isChangePassword && (
            <>
              <div className="create-p-label">
                <label htmlFor="password">PASSWORD</label>
              </div>
              <div className="create-p-input">
                <div ref={divShowErrorPass}></div>
                <input
                  ref={refPassword}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>

              <div className="create-p-label">
                <label htmlFor="pwconfirm">CONFIRM PASSWORD</label>
              </div>
              <div className="create-p-input">
                <div ref={divShowErrorConfirm}></div>
                <input
                  ref={refConfirmPassword}
                  name="pwconfirm"
                  type="password"
                  id="pwconfirm"
                  placeholder="password"
                  required
                />
              </div>
            </>
          )}
          {/* End toggle */}

          <div className="create-p-label">
            <label htmlFor="weight">WEIGHT</label>
          </div>
          <div className="create-p-input">
            <input
              onChange={handleChange}
              name="weight"
              value={formData.weight}
              type="number"
              id="weight"
              placeholder="55"
              required
            />
          </div>

          <div className="create-p-label">
            <label htmlFor="height">HEIGHT</label>
          </div>
          <div className="create-p-input">
            <input
              onChange={handleChange}
              name="height"
              value={formData.height}
              type="number"
              id="height"
              placeholder="158"
              required
            />
          </div>

          <div className="create-p-label">
            <label htmlFor="age">AGE</label>
          </div>
          <div className="create-p-input">
            <input
              onChange={handleChange}
              name="age"
              value={formData.age}
              type="number"
              id="age"
              placeholder="28"
              required
            />
          </div>

          <div className="create-p-label">
            <label htmlFor="gender">GENDER</label>
          </div>
          <div className="create-p-gender">
            <select
              onChange={handleChange}
              value={formData.gender}
              name="gender"
              id="gender"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>
        <div className="create-p-label-load">
          <FileBase
            onDone={(filePic) =>
              setFormData({ ...formData, picture: filePic.base64 })
            }
            type="file"
            multiple={false}
          />
        </div>
        <button type="submit" className="btn-save-editprofile">
          SAVE
        </button>
      </form>
    </div>
  );
}

export default EditProfileComponent;
