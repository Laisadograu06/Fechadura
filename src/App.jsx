<<<<<<< HEAD
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage'
import CadastroPage from '../Pages/CadastroPage/CadastroPage'
import EsqueciPage from '../Pages/EsqueciPage/EsqueciPage'
import TodasPage from '../Pages/TodasPage/TodasPage'

=======
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CadastroPage from "../Pages/CadastroPage/CadastroPage";
import EsqueciPage from "../Pages/EsqueciPage/EsqueciPage";
import TodasPage from "../Pages/TodasPage/TodasPage";
import ReservadasPage from "../Pages/ReservadasPage/ReservadasPage";
import MinhasRPage from "../Pages/MinhasRPage/MinhasRPage";
>>>>>>> d15ffa2933b918b77bfe5fdaf00e1859a8c28f1e

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
<<<<<<< HEAD
        <Route path="/esqueci" element={<EsqueciPage/>} />
        <Route path="/todas" element={<TodasPage/>} />
       
=======
        <Route path="/esqueci" element={<EsqueciPage />} />
        <Route path="/todas" element={<TodasPage />} />
        <Route path="/reservadas" element={<ReservadasPage />} />
        <Route path="/minhasr" element={<MinhasRPage />} />
>>>>>>> d15ffa2933b918b77bfe5fdaf00e1859a8c28f1e
      </Routes>
    </Router>
  );
}

export default App;
