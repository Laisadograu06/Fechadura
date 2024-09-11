import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage'
import CadastroPage from '../Pages/CadastroPage/CadastroPage'
import EsqueciPage from '../Pages/EsqueciPage/EsqueciPage'
import InicioPage from '../Pages/InicioPage/InicioPage'
import ReservaPage from '../Pages/ReservaPage/ReservaPage'

import './App.css'

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
