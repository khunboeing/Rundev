import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CreateProfilePage from "./Pages/CreateProfilePage/CreateProfilePage";
import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage";
import FullRunDiaryPage from "./Pages/FullRunDiaryPage/FullRunDiaryPage";
import CreateRunDiaryPage from "./Pages/CreateRunDiaryPage/CreateRunDiaryPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

function App() {
  const [forceRender, setForceRender] = useState(true);

  const [userID, setUserID] = useState("");
  // const userID = JSON.parse(localStorage.getItem('rundev'))

  const [data, setData] = useState({
    auth: {
      email: "",
      password: "",
    },
    bio: {
      name: "",
      weight: 0,
      height: 0,
      age: 0,
      gender: "",
      picture: "",
      bmi: 0,
    },
    token: "",
    rundiary: [],
  });
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("auth"));
    // console.log(JSON.parse(userId));
    if (userId) {
      (async () => {
        const users = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/${userId}`
        );
        console.log(users);
        const reIdrundiary = users.data.rundiary.map((rundiary) => ({
          id: rundiary._id,
          ...rundiary,
          date: new Date(rundiary.date).toLocaleDateString(),
        }));

        setUserID(users.data._id);
        // localStorage.setItem('rundev',JSON.stringify(users.data._id))
        setData({ ...users.data, rundiary: reIdrundiary });
      })();
    }
  }, [forceRender]);

  function toggleForceRender() {
    setForceRender((prev) => {
      return !prev;
    });
  }

  // create Run Diary (+)
  function createRunDiary(newCard) {
    setData({ ...data, rundiary: [newCard, ...data.rundiary] });
  }
  //End create Run Diary (+)

  // create function BMI
  function calculateBMI(weight, height) {
    const convertHeight = (height / 100) ** 2;
    const bmi = (weight / convertHeight).toFixed(2);
    return bmi;
  }
  // End create function BMI

  // create function delete btn at home (-)
  function deleteDiaryCard(id) {
    const newRundiary = data.rundiary.filter(
      (cardRundiary) => cardRundiary.id !== id
    );
    setData({ ...data, rundiary: newRundiary });
  }
  // End create function delete btn at home (-)
  const context = {
    data,
    createRunDiary,
    calculateBMI,
    deleteDiaryCard,
    userID,
    toggleForceRender,
  };
  return (
    <DataContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createprofile" element={<CreateProfilePage />} />
          <Route path="/editprofile" element={<EditProfilePage />} />
          <Route path="/rundiary" element={<FullRunDiaryPage />} />
          <Route path="/createrundiary" element={<CreateRunDiaryPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
