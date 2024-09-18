import React, { useState } from "react";
import '../EsqueciPage/EsqueciPage.css'
const EsqueciPage = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };

    return (
        <div className="fundo">
            <div className="login-container">
                <div className="esquerda">
                    <h2>Recuperar Senha</h2>
                    <p>Informe seu e-mail para redefinir sua senha.</p>
                </div>
                <div className="direita">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EsqueciPage;