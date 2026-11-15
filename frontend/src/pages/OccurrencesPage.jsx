import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import api from "../services/api";
import Footer from "../components/Footer.jsx";

import {
    translateRisk
} from "../utils/riskTranslator";

function OccurrencesPage() {

    const [occurrences,
        setOccurrences] =
        useState([]);

    const [filter,
        setFilter] =
        useState("ALL");

    useEffect(() => {

        loadOccurrences();

    }, []);

    async function loadOccurrences() {

        try {

            const response =
                await api.get(
                    "/occurrences"
                );

            setOccurrences(
                response.data
            );

        } catch (error) {

            console.error(error);
        }
    }

    const filteredOccurrences =
        occurrences.filter(
            occurrence => {

                if (
                    filter === "ALL"
                ) {

                    return true;
                }

                return (
                    occurrence.riskLevel ===
                    filter
                );
            }
        );

    function getRiskClass(risk) {

        switch (risk) {

            case "LOW":
                return "risk-low";

            case "MEDIUM":
                return "risk-medium";

            case "HIGH":
                return "risk-high";

            default:
                return "risk-low";
        }
    }

    return (

        <>
            <Navbar />

            <div className="container py-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h1
                            className="hero-title mb-2">

                            Ocorrências Ambientais

                        </h1>

                        <p
                            className="hero-subtitle">

                            Visualize e acompanhe todas as ocorrências registradas.

                        </p>

                    </div>

                    <Link
                        to="/occurrences/new"
                        className="btn eco-btn eco-btn-success">

                        Nova Ocorrência

                    </Link>

                </div>

                <div className="app-card p-4 mb-4">

                    <label
                        className="form-label fw-semibold">

                        Filtrar por nível de risco

                    </label>

                    <select
                        className="form-select"
                        value={filter}
                        onChange={
                            e =>
                                setFilter(
                                    e.target.value
                                )
                        }>

                        <option value="ALL">

                            Todos

                        </option>

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

                <div className="row g-4">

                    {
                        filteredOccurrences.map(
                            occurrence => (

                                <div
                                    key={occurrence.id}
                                    className="col-lg-4 col-md-6">

                                    <div
                                        className="card app-card h-100 overflow-hidden">

                                        {
                                            occurrence.imageUrl && (

                                                <img
                                                    src={`http://localhost:8080/uploads/${occurrence.imageUrl}`}
                                                    alt={occurrence.title}
                                                    className="card-img-top"
                                                    style={{
                                                        height: "240px",
                                                        objectFit: "cover"
                                                    }}
                                                />

                                            )
                                        }

                                        <div
                                            className="card-body d-flex flex-column">

                                            <div className="d-flex justify-content-between align-items-center mb-3">

                                                <h5
                                                    className="fw-bold mb-0">

                                                    {occurrence.title}

                                                </h5>

                                                <span
                                                    className={
                                                        getRiskClass(
                                                            occurrence.riskLevel
                                                        )
                                                    }>

                                                    {
                                                        translateRisk(
                                                            occurrence.riskLevel
                                                        )
                                                    }

                                                </span>

                                            </div>

                                            <p
                                                className="text-muted mb-3">

                                                {occurrence.description}

                                            </p>

                                            <div
                                                className="mb-3">

                                                <small
                                                    className="text-secondary">

                                                    📍 {occurrence.address}

                                                </small>

                                            </div>

                                            <div
                                                className="mt-auto">

                                                <Link
                                                    to={`/occurrences/${occurrence.id}`}
                                                    className="btn eco-btn eco-btn-primary w-100">

                                                    Ver Detalhes

                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )
                        )
                    }

                </div>

            </div>

            <Footer />

        </>

    );
}

export default OccurrencesPage;