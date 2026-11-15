import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import api from "../services/api";
import Footer from "../components/Footer.jsx";

function DashboardPage() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [stats, setStats] = useState({
        total: 0,
        lowRisk: 0,
        mediumRisk: 0,
        highRisk: 0
    });

    useEffect(() => {

        loadStats();

    }, []);

    async function loadStats() {

        try {

            const response =
                await api.get(
                    "/occurrences/stats"
                );

            setStats(
                response.data
            );

        } catch (error) {

            console.error(error);
        }
    }

    return (

        <>
            <Navbar />

            <div className="container py-5">

                <div className="mb-5">

                    <div
                        className="hero-title">

                        Bem-vindo, {user?.name} 👋

                    </div>

                    <div
                        className="hero-subtitle">

                        Acompanhe as ocorrências ambientais registradas pela comunidade.

                    </div>

                </div>

                <div className="row g-4 mb-5">

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card stats-card app-card">

                            <div className="card-body">

                                <div
                                    className="text-muted">

                                    Total de Ocorrências

                                </div>

                                <div
                                    className="stats-number">

                                    {stats.total}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card stats-card text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg,#16a34a,#22c55e)"
                            }}>

                            <div className="card-body">

                                <div>

                                    Baixo Risco

                                </div>

                                <div
                                    className="stats-number">

                                    {stats.lowRisk}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card stats-card text-dark"
                            style={{
                                background:
                                    "linear-gradient(135deg,#fbbf24,#fde047)"
                            }}>

                            <div className="card-body">

                                <div>

                                    Médio Risco

                                </div>

                                <div
                                    className="stats-number">

                                    {stats.mediumRisk}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card stats-card text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg,#dc2626,#ef4444)"
                            }}>

                            <div className="card-body">

                                <div>

                                    Alto Risco

                                </div>

                                <div
                                    className="stats-number">

                                    {stats.highRisk}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-8">

                        <div
                            className="app-card p-4">

                            <h4
                                className="mb-3">

                                Sobre o EcoAlerta

                            </h4>

                            <p
                                className="text-muted">

                                O EcoAlerta é uma plataforma desenvolvida para registrar,
                                monitorar e compartilhar ocorrências ambientais.
                                O objetivo é aproximar cidadãos e órgãos responsáveis,
                                oferecendo uma forma simples de reportar situações que
                                impactam o meio ambiente.

                            </p>

                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div
                            className="app-card p-4">

                            <h5
                                className="mb-4">

                                Ações Rápidas

                            </h5>

                            <div
                                className="d-grid gap-3">

                                <Link
                                    to="/occurrences"
                                    className="btn eco-btn eco-btn-primary">

                                    Ver Ocorrências

                                </Link>

                                <Link
                                    to="/occurrences/new"
                                    className="btn eco-btn eco-btn-success">

                                    Nova Ocorrência

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );
}

export default DashboardPage;