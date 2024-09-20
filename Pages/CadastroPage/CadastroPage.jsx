import React, { useState } from "react";
import '../CadastroPage/CadastroPage.css';

const CadastroPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCadastro = (e) => {
        e.preventDefault();
        console.log("Usuário:", username, "Email:", email, "Senha:", password);
    };

    return (
        <div className="fundo">
            <div className="cadastro-container">
                <div className="esquerda-cadastro">
                    <h2>Cadastro</h2>
                    <p>Preencha os campos abaixo para se cadastrar.</p>
                </div>
                <div className="direita-cadastro">
                    <form onSubmit={handleCadastro}>
                        <input 
                            type="text" 
                            placeholder="Usuário"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Senha"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button className="button-cadastro" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;