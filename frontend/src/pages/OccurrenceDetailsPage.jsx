import { useEffect, useState } from "react";
import {
    useParams,
    useNavigate
} from "react-router-dom";

import Navbar from "../components/Navbar";

import api from "../services/api";
import Footer from "../components/Footer.jsx";

import {
    translateRisk
} from "../utils/riskTranslator";

import {
    formatDate
} from "../utils/dateFormatter";

function OccurrenceDetailsPage() {

    const { id } = useParams();

    const navigate =
        useNavigate();

    const [occurrence,
        setOccurrence] =
        useState(null);

    useEffect(() => {

        loadOccurrence();

    }, []);

    async function loadOccurrence() {

        try {

            const response =
                await api.get(
                    `/occurrences/${id}`
                );

            setOccurrence(
                response.data
            );

        } catch (error) {

            console.error(error);
        }
    }

    async function handleDelete() {

        const confirmed =
            window.confirm(
                "Deseja realmente excluir esta ocorrência?"
            );

        if (!confirmed) {

            return;
        }

        try {

            await api.delete(
                `/occurrences/${id}`
            );

            alert(
                "Ocorrência excluída com sucesso!"
            );

            navigate(
                "/occurrences"
            );

        } catch (error) {

            console.error(error);

            alert(
                "Erro ao excluir ocorrência"
            );
        }
    }

    function getRiskClass() {

        switch (
            occurrence?.riskLevel
            ) {

            case "HIGH":
                return "risk-high";

            case "MEDIUM":
                return "risk-medium";

            default:
                return "risk-low";
        }
    }

    if (!occurrence) {

        return (

            <>
                <Navbar />

                <div className="container py-5">

                    <div className="app-card p-5 text-center">

                        Carregando ocorrência...

                    </div>

                </div>

            </>

        );
    }

    return (

        <>
            <Navbar />

            <div className="container py-5">

                <div className="app-card overflow-hidden">

                    {
                        occurrence.imageUrl && (

                            <img
                                src={`http://localhost:8080/uploads/${occurrence.imageUrl}`}
                                alt={occurrence.title}
                                className="w-100"
                                style={{
                                    maxHeight: "500px",
                                    objectFit: "cover"
                                }}
                            />

                        )
                    }

                    <div className="p-4 p-lg-5">

                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

                            <div>

                                <h1
                                    className="hero-title">

                                    {occurrence.title}

                                </h1>

                                <p
                                    className="hero-subtitle">

                                    Registrada por {occurrence.userName}

                                </p>

                            </div>

                            <span
                                className={
                                    getRiskClass()
                                }>

                                {
                                    translateRisk(
                                        occurrence.riskLevel
                                    )
                                }

                            </span>

                        </div>

                        <div className="row g-4">

                            <div className="col-lg-8">

                                <div
                                    className="app-card p-4 h-100">

                                    <h5
                                        className="fw-bold mb-3">

                                        Descrição

                                    </h5>

                                    <p
                                        className="text-muted">

                                        {
                                            occurrence.description
                                        }

                                    </p>

                                </div>

                            </div>

                            <div className="col-lg-4">

                                <div
                                    className="app-card p-4 h-100">

                                    <h5
                                        className="fw-bold mb-3">

                                        Informações

                                    </h5>

                                    <div className="mb-3">

                                        <strong>

                                            Status

                                        </strong>

                                        <br />

                                        {
                                            occurrence.status
                                        }

                                    </div>

                                    <div className="mb-3">

                                        <strong>

                                            Data

                                        </strong>

                                        <br />

                                        {
                                            formatDate(
                                                occurrence.createdAt
                                            )
                                        }

                                    </div>

                                    <div>

                                        <strong>

                                            Usuário

                                        </strong>

                                        <br />

                                        {
                                            occurrence.userName
                                        }

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div
                            className="app-card p-4 mt-4">

                            <h5
                                className="fw-bold mb-3">

                                Localização

                            </h5>

                            <p
                                className="text-muted mb-3">

                                📍 {occurrence.address}

                            </p>

                            <iframe
                                title="Mapa"
                                width="100%"
                                height="350"
                                frameBorder="0"
                                style={{
                                    border: 0,
                                    borderRadius: "16px"
                                }}
                                src={
                                    `https://maps.google.com/maps?q=${encodeURIComponent(
                                        occurrence.address
                                    )}&z=15&output=embed`
                                }
                            />

                        </div>

                        <div
                            className="d-flex gap-3 mt-4">

                            <button
                                className="btn eco-btn eco-btn-primary"
                                onClick={() =>
                                    navigate(
                                        "/occurrences"
                                    )
                                }>

                                Voltar

                            </button>

                            <button
                                className="btn eco-btn eco-btn-primary"
                                onClick={() =>
                                    navigate(
                                        `/occurrences/${occurrence.id}/edit`
                                    )
                                }>

                                Editar

                            </button>

                            <button
                                className="btn btn-outline-danger"
                                onClick={
                                    handleDelete
                                }>

                                Excluir Ocorrência

                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default OccurrenceDetailsPage;