import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CadastroPage from "../Pages/CadastroPage/CadastroPage";
import EsqueciPage from "../Pages/EsqueciPage/EsqueciPage";
import TodasPage from "../Pages/TodasPage/TodasPage";
import ReservadasPage from "../Pages/ReservadasPage/ReservadasPage";
import MinhasRPage from "../Pages/MinhasRPage/MinhasRPage";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/esqueci" element={<EsqueciPage />} />
        <Route path="/todas" element={<TodasPage />} />
        <Route path="/reservadas" element={<ReservadasPage />} />
        <Route path="/minhasr" element={<MinhasRPage />} />
      </Routes>
    </Router>
  );
}

export default App;
