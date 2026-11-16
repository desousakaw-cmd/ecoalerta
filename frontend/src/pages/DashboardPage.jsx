import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import RiskChart from "../components/RiskChart";

import api from "../services/api";

function DashboardPage() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [stats, setStats] =
        useState({
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

                    <h1
                        className="hero-title">

                        Bem-vindo, {user?.name} 👋

                    </h1>

                    <p
                        className="hero-subtitle">

                        Monitore as ocorrências ambientais registradas na plataforma.

                    </p>

                </div>

                <div className="row g-4 mb-5">

                    <div className="col-lg-3">

                        <div
                            className="card stats-card app-card">

                            <div
                                className="card-body">

                                <div>
                                    Total
                                </div>

                                <div
                                    className="stats-number">

                                    {stats.total}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3">

                        <div
                            className="card stats-card text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg,#22c55e,#16a34a)"
                            }}>

                            <div
                                className="card-body">

                                <div>
                                    Baixo
                                </div>

                                <div
                                    className="stats-number">

                                    {stats.lowRisk}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3">

                        <div
                            className="card stats-card"
                            style={{
                                background:
                                    "linear-gradient(135deg,#fde047,#facc15)"
                            }}>

                            <div
                                className="card-body">

                                <div>
                                    Médio
                                </div>

                                <div
                                    className="stats-number">

                                    {stats.mediumRisk}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3">

                        <div
                            className="card stats-card text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg,#ef4444,#dc2626)"
                            }}>

                            <div
                                className="card-body">

                                <div>
                                    Alto
                                </div>

                                <div
                                    className="stats-number">

                                    {stats.highRisk}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="row g-4">

                    <div className="col-lg-8">

                        <RiskChart
                            stats={stats}
                        />

                    </div>

                    <div className="col-lg-4">

                        <div
                            className="app-card p-4 h-100">

                            <h4
                                className="mb-4">

                                Ações Rápidas

                            </h4>

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