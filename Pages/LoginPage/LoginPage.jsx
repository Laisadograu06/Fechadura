import React, { useState, useEffect } from "react";
import '../LoginPage/LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Username:", username, "Password:", password);
    };

    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="fundo">
            <div className="login-container-login">
                <div className="esquerda-login">
                    <h2 className="bem-vindo">Bem-vindo!</h2>
                    <p className="motivacao">“O único modo de fazer um excelente trabalho é amar o que você faz.”</p>
                    <p className="autor">— Steve Jobs</p>
                    <p className="data-semana">{dayOfWeek}</p>
                    <p className="data">{formattedDate}</p>
                    <p className="hora">{time}</p>
                </div>
            
                <div className="direita">
                    <form onSubmit={handleLogin}>
                        <input 
                            className="input-login"
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Cadastre-se" 
                            required 
                        />

                        <input 
                            className="input-login"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Login" 
                            required 
                        />
                        
                        <button className="botao-login" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

//
