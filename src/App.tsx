import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'
import CadastroPage from './Pages/CadastroPage.jsx'
import EsqueciPage from './Pages/EsqueciPage.jsx'
import InicioPage from './Pages/InicioPage.jsx'
import ReservaPage from './Pages/ReservaPage/Reserva.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/esqueci" element={<EsqueciPage/>} />
        <Route path="/inicio" element={<InicioPage/>} />
        <Route path="/reserva" element={<ReservaPage/>} />
      </Routes>
    </Router>
    
  )
}

export default App
