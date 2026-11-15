import { useEffect, useState } from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import Navbar from "../components/Navbar";

import api from "../services/api";

function EditOccurrencePage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [address, setAddress] =
        useState("");

    const [riskLevel, setRiskLevel] =
        useState("LOW");

    useEffect(() => {

        loadOccurrence();

    }, []);

    async function loadOccurrence() {

        try {

            const response =
                await api.get(
                    `/occurrences/${id}`
                );

            const occurrence =
                response.data;

            setTitle(
                occurrence.title
            );

            setDescription(
                occurrence.description
            );

            setAddress(
                occurrence.address
            );

            setRiskLevel(
                occurrence.riskLevel
            );

        } catch (error) {

            console.error(error);
        }
    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            const user =
                JSON.parse(
                    localStorage.getItem(
                        "user"
                    )
                );

            await api.put(

                `/occurrences/${id}`,

                {
                    title,
                    description,
                    address,
                    riskLevel,
                    imageUrl: null,
                    userId: user.id
                }

            );

            alert(
                "Ocorrência atualizada com sucesso!"
            );

            navigate(
                `/occurrences/${id}`
            );

        } catch (error) {

            console.error(error);

            alert(
                "Erro ao atualizar ocorrência"
            );
        }
    }

    return (

        <>
            <Navbar />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="eco-form">

                            <h2 className="mb-4">

                                Editar Ocorrência

                            </h2>

                            <form
                                onSubmit={handleSubmit}>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Título

                                    </label>

                                    <input
                                        className="form-control"
                                        value={title}
                                        onChange={
                                            e =>
                                                setTitle(
                                                    e.target.value
                                                )
                                        }
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Descrição

                                    </label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        value={description}
                                        onChange={
                                            e =>
                                                setDescription(
                                                    e.target.value
                                                )
                                        }
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Endereço

                                    </label>

                                    <input
                                        className="form-control"
                                        value={address}
                                        onChange={
                                            e =>
                                                setAddress(
                                                    e.target.value
                                                )
                                        }
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Nível de Risco

                                    </label>

                                    <select
                                        className="form-select"
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

                                </div>

                                <button
                                    className="btn eco-btn eco-btn-success">

                                    Salvar Alterações

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default EditOccurrencePage;