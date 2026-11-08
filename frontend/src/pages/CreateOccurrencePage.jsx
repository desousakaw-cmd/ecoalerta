import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

function CreateOccurrencePage() {

    const navigate =
        useNavigate();

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [title,
        setTitle] =
        useState("");

    const [description,
        setDescription] =
        useState("");

    const [address,
        setAddress] =
        useState("");

    const [riskLevel,
        setRiskLevel] =
        useState("LOW");

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            await api.post(
                "/occurrences",
                {
                    title,
                    description,
                    address,
                    riskLevel,
                    userId: user.id
                }
            );

            alert(
                "Ocorrência cadastrada com sucesso!"
            );

            navigate(
                "/occurrences"
            );

        } catch {

            alert(
                "Erro ao cadastrar ocorrência"
            );
        }
    }

    return (

        <div className="container mt-4">

            <h2>
                Nova Ocorrência
            </h2>

            <hr />

            <form
                onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    placeholder="Título"
                    value={title}
                    onChange={
                        e =>
                            setTitle(
                                e.target.value
                            )
                    }
                />

                <textarea
                    className="form-control mb-3"
                    placeholder="Descrição"
                    value={description}
                    onChange={
                        e =>
                            setDescription(
                                e.target.value
                            )
                    }
                />

                <input
                    className="form-control mb-3"
                    placeholder="Endereço"
                    value={address}
                    onChange={
                        e =>
                            setAddress(
                                e.target.value
                            )
                    }
                />

                <select
                    className="form-select mb-3"
                    value={riskLevel}
                    onChange={
                        e =>
                            setRiskLevel(
                                e.target.value
                            )
                    }>

                    <option value="LOW">
                        Baixo
                    </option>

                    <option value="MEDIUM">
                        Médio
                    </option>

                    <option value="HIGH">
                        Alto
                    </option>

                </select>

                <button
                    className="btn btn-success">

                    Salvar

                </button>

            </form>

        </div>

    );
}

export default CreateOccurrencePage;