import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/1.home/Home'
import Login from './pages/2.login/Login'


function App() {

  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
