import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

function RegisterPage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleRegister(event) {

        event.preventDefault();

        try {

            await api.post(
                "/users",
                {
                    name,
                    email,
                    password
                }
            );

            alert(
                "Usuário cadastrado com sucesso!"
            );

            navigate("/");

        } catch (error) {

            alert(
                error?.response?.data?.message ||
                "Erro ao cadastrar usuário"
            );
        }
    }

    return (

        <div className="register-wrapper">

            <div className="register-card">

                <div className="text-center mb-4">

                    <div className="logo-circle">

                        🌱

                    </div>

                    <h2 className="fw-bold">

                        Criar Conta

                    </h2>

                    <p className="text-muted">

                        Junte-se à comunidade EcoAlerta e ajude a monitorar ocorrências ambientais.

                    </p>

                </div>

                <form
                    onSubmit={handleRegister}>

                    <div className="mb-3">

                        <label
                            className="form-label">

                            Nome Completo

                        </label>

                        <input
                            className="form-control"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={
                                e =>
                                    setName(
                                        e.target.value
                                    )
                            }
                        />

                    </div>

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
                            placeholder="Crie uma senha"
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
                        className="btn eco-btn eco-btn-success w-100">

                        Criar Conta

                    </button>

                </form>

                <div
                    className="text-center mt-4">

                    <span
                        className="text-muted">

                        Já possui conta?

                    </span>

                    <br />

                    <Link
                        to="/"
                        className="fw-semibold text-success">

                        Voltar para Login

                    </Link>

                </div>

            </div>

        </div>

    );
}

export default RegisterPage;