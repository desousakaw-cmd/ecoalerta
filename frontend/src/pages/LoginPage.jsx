import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../services/api";

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin(event) {

        event.preventDefault();

        try {

            const response =
                await api.post(
                    "/auth/login",
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "user",
                JSON.stringify(
                    response.data
                )
            );

            navigate(
                "/dashboard"
            );

        } catch (error) {

            alert(
                "Usuário ou senha inválidos"
            );

        }
    }

    return (

        <div className="login-wrapper">

            <div className="login-card">

                <div className="text-center mb-4">

                    <div className="logo-circle">

                        🌱

                    </div>

                    <h2
                        className="fw-bold">

                        EcoAlerta

                    </h2>

                    <p
                        className="text-muted">

                        Plataforma colaborativa para monitoramento de ocorrências ambientais.

                    </p>

                </div>

                <form
                    onSubmit={handleLogin}>

                    <div className="mb-3">

                        <label
                            className="form-label">

                            E-mail

                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={
                                e =>
                                    setEmail(
                                        e.target.value
                                    )
                            }
                        />

                    </div>

                    <div className="mb-4">

                        <label
                            className="form-label">

                            Senha

                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={
                                e =>
                                    setPassword(
                                        e.target.value
                                    )
                            }
                        />

                    </div>

                    <button
                        className="btn eco-btn eco-btn-primary w-100">

                        Entrar

                    </button>

                </form>

                <div
                    className="text-center mt-4">

                    <span
                        className="text-muted">

                        Ainda não possui conta?

                    </span>

                    <br />

                    <Link
                        to="/register"
                        className="fw-semibold text-success">

                        Criar Conta

                    </Link>

                </div>

            </div>

        </div>

    );
}

export default LoginPage;