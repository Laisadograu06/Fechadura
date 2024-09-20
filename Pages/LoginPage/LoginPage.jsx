import React, { useState } from "react";
import '../LoginPage/LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Username:", username, "Password:", password);
    };

    return (
        <div className="fundo">
           
            <div className="login-container-login">
                <div className="esquerda-login">
                    <h2>Login</h2>
                    <h2>Bem-vindo de volta!</h2>
                    <p>Por favor, faça login para continuar.</p>
                </div>
            
                <div className="direita">
                    <form onSubmit={handleLogin}>
                        <label>Email: </label>
                        <input 
                            className="input-login"
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />

                        <label>Senha: </label>
                        <input className="input-login"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        
                        <button className="botao-login" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;