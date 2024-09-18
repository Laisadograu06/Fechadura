import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Username:", username, "Password:", password);
    };

    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="bg-primary text-white p-3 shadow p-3 mb-5 bg-white rounded w-200 h-700 bg-info">
                    <h2 className="text-center mb-4 text-dark">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
            );
        };
        
        export default LoginPage;