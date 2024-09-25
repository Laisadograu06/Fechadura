import React, { useState } from "react";
import "./MinhasRPage.css";

const MinhasRPage = () => {
  const [usernome, setUsernome] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  
  const handleReservation = (e) => {
    e.preventDefault();
    console.log("Nome:", usernome);
    console.log("Data:", data);
    console.log("Horário:", horario);

    alert(`Reserva feita para ${usernome} na data ${data}, às ${horario}`);
  };

  return (
    <div className="fundo">
      <div className="sidebar">
        <h1 className="sidebar-title">SALAS</h1>
        <div className="buttons">
          <button className="btn">Salas Reservadas</button>
          <button className="btn">Salas Livres</button>
          <button className="btn active">Minhas Reservas</button>
        </div>
        <div className="profile">
          <img
            src="../../src/assets/image/foto.png"
            alt="Profile"
            className="profile-img"
          />
          <p className="profile-name">EDSON SIDRONE</p>
          <button className="logout">Sair</button>
        </div>
      </div>
      <div className="main-content">
        <div className="reservation-box">
          <h2>SALA B10</h2>
          <img
            src="../../src/assets/image/logoperfil.png"
            alt="User Icon"
            className="user-icon"
          />
          <form className="reservation-form" onSubmit={handleReservation}>
            <label>
              <input
                type="text"
                value={usernome}
                onChange={(e) => setUsernome(e.target.value)}
                placeholder="Nome"
              />
            </label>
            <label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </label>
            <label className="hr">
              Horário:
              <input
                className="hr"
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              />
              às
              <input
                className="hrs"
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              />
            </label>
            <button className="reserve-btn" type="submit">
              Reservar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MinhasRPage;
