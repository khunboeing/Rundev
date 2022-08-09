import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CreateProfilePage from "./Pages/CreateProfilePage/CreateProfilePage";
import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage";
import FullRunDiaryPage from "./Pages/FullRunDiaryPage/FullRunDiaryPage";
import CreateRunDiaryPage from "./Pages/CreateRunDiaryPage/CreateRunDiaryPage";
import { useState, createContext } from "react";
import initialState from "./mockupdata";

export const DataContext = createContext(null);

function App() {
  const [data, setData] = useState(initialState);

  // create Run Diary (+)
  function createRunDiary(newCard) {
    setData({ ...data, rundiary: [newCard, ...data.rundiary] });
  }
  //End create Run Diary (+)

  // create function BMI
  function calculateBMI(weight, height) {
    const convertHeight = (height/100)**2;
    const bmi = (weight/convertHeight).toFixed(2);
    return bmi
  }
  // End create function BMI

  // create function delete btn at home (-)
  function deleteDiaryCard(id) {
    const newRundiary = data.rundiary.filter((cardRundiary)=> cardRundiary.id !== id)
    setData({...data,rundiary:newRundiary})
  }
  // End create function delete btn at home (-)
  const context = {
    data,
    createRunDiary,
    calculateBMI,
    deleteDiaryCard
  }
  return (
    <DataContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/createprofile"
            element={<CreateProfilePage />}
          />
          <Route path="/editprofile" element={<EditProfilePage />} />
          <Route path="/rundiary" element={<FullRunDiaryPage />} />
          <Route path="/createrundiary" element={<CreateRunDiaryPage />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
