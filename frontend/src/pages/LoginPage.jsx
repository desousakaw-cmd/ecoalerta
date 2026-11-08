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

            navigate("/dashboard");

        } catch (error) {

            alert(
                "Usuário ou senha inválidos"
            );
        }
    }

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-4">

                    <div className="card p-4">

                        <h2
                            className="text-center mb-4">

                            EcoAlerta

                        </h2>

                        <form
                            onSubmit={handleLogin}>

                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="E-mail"
                                value={email}
                                onChange={
                                    e =>
                                        setEmail(
                                            e.target.value
                                        )
                                }
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Senha"
                                value={password}
                                onChange={
                                    e =>
                                        setPassword(
                                            e.target.value
                                        )
                                }
                            />

                            <button
                                className="btn btn-primary w-100">

                                Entrar

                            </button>

                        </form>

                        <hr />

                        <Link
                            to="/register"
                            className="btn btn-outline-success">

                            Criar Conta

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default LoginPage;