import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
