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

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-4">

                    <div className="card p-4">

                        <h2 className="text-center mb-4">
                            Criar Conta
                        </h2>

                        <form
                            onSubmit={handleRegister}>

                            <input
                                className="form-control mb-3"
                                placeholder="Nome"
                                value={name}
                                onChange={
                                    e =>
                                        setName(
                                            e.target.value
                                        )
                                }
                            />

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
                                className="btn btn-success w-100">

                                Cadastrar

                            </button>

                        </form>

                        <hr />

                        <Link
                            to="/"
                            className="btn btn-outline-secondary">

                            Voltar para Login

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default RegisterPage;