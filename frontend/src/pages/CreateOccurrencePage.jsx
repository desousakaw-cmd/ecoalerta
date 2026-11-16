import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import api from "../services/api";

function CreateOccurrencePage() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [address, setAddress] =
        useState("");

    const [riskLevel, setRiskLevel] =
        useState("LOW");

    const [imageFile, setImageFile] =
        useState(null);

    const [aiSuggestion,
        setAiSuggestion] =
        useState(null);

    async function analyzeWithAi() {

        if (!description) {

            alert(
                "Informe uma descrição para análise."
            );

            return;
        }

        try {

            const response =
                await api.post(

                    "/ai/classify",

                    description,

                    {
                        headers: {
                            "Content-Type":
                                "text/plain"
                        }
                    }

                );

            setAiSuggestion(
                response.data
            );

            setRiskLevel(
                response.data.suggestedRisk
            );

        } catch (error) {

            console.error(error);

            alert(
                "Erro ao executar IA."
            );
        }
    }

    async function uploadImage() {

        if (!imageFile) {

            return null;
        }

        const formData =
            new FormData();

        formData.append(
            "file",
            imageFile
        );

        const response =
            await api.post(
                "/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            );

        return response.data;
    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            let imageUrl = null;

            if (imageFile) {

                imageUrl =
                    await uploadImage();
            }

            await api.post(

                "/occurrences",

                {
                    title,
                    description,
                    address,
                    riskLevel,
                    imageUrl,
                    userId: user.id
                }

            );

            alert(
                "Ocorrência cadastrada com sucesso!"
            );

            navigate(
                "/occurrences"
            );

        } catch (error) {

            console.error(error);

            alert(
                "Erro ao cadastrar ocorrência."
            );
        }
    }

    return (

        <>
            <Navbar />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="text-center mb-4">

                            <h1
                                className="hero-title">

                                Registrar Ocorrência

                            </h1>

                            <p
                                className="hero-subtitle">

                                Compartilhe informações sobre problemas ambientais da sua região.

                            </p>

                        </div>

                        <div className="eco-form">

                            <form
                                onSubmit={handleSubmit}>

                                <div className="mb-4">

                                    <label
                                        className="form-label fw-semibold">

                                        Título

                                    </label>

                                    <input
                                        className="form-control"
                                        placeholder="Ex.: Descarte irregular de lixo"
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

                                    <label
                                        className="form-label fw-semibold">

                                        Descrição

                                    </label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        placeholder="Descreva a situação encontrada..."
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

                                    <button
                                        type="button"
                                        className="btn eco-btn eco-btn-primary"
                                        onClick={analyzeWithAi}>

                                        🤖 Analisar com IA

                                    </button>

                                </div>

                                {
                                    aiSuggestion && (

                                        <div
                                            className="alert alert-success mb-4">

                                            <strong>

                                                Resultado da IA

                                            </strong>

                                            <hr />

                                            <p>

                                                <strong>
                                                    Risco Sugerido:
                                                </strong>

                                                {" "}

                                                {
                                                    aiSuggestion.suggestedRisk
                                                }

                                            </p>

                                            <p>

                                                <strong>
                                                    Confiança:
                                                </strong>

                                                {" "}

                                                {
                                                    (
                                                        aiSuggestion.confidence * 100
                                                    ).toFixed(
                                                        0
                                                    )
                                                }%

                                            </p>

                                            <p>

                                                <strong>
                                                    Justificativa:
                                                </strong>

                                                {" "}

                                                {
                                                    aiSuggestion.rationale
                                                }

                                            </p>

                                        </div>

                                    )
                                }

                                <div className="mb-4">

                                    <label
                                        className="form-label fw-semibold">

                                        Endereço

                                    </label>

                                    <input
                                        className="form-control"
                                        placeholder="Informe o local da ocorrência"
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

                                    <label
                                        className="form-label fw-semibold">

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

                                <div className="mb-4">

                                    <label
                                        className="form-label fw-semibold">

                                        Foto da Ocorrência

                                    </label>

                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={
                                            e =>
                                                setImageFile(
                                                    e.target.files[0]
                                                )
                                        }
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn eco-btn eco-btn-success w-100">

                                    Registrar Ocorrência

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default CreateOccurrencePage;