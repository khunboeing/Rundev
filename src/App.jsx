import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import CreateProfilePage from './Pages/CreateProfilePage/CreateProfilePage'
import EditProfilePage from './Pages/EditProfilePage/EditProfilePage'
import FullRunDiaryPage from './Pages/FullRunDiaryPage/FullRunDiaryPage'
import CreateRunDiaryPage from './Pages/CreateRunDiaryPage/CreateRunDiaryPage'

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/profile' element={<CreateProfilePage />} />
      <Route path='/editprofile' element={<EditProfilePage/>} />
      <Route path='/rundiary' element={<FullRunDiaryPage />} />
      <Route path='/createrundiary' element={<CreateRunDiaryPage/>} />
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
