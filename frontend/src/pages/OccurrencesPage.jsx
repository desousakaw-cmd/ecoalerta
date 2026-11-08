import {
    useEffect,
    useState
} from "react";

import { Link } from "react-router-dom";

import api from "../services/api";

function OccurrencesPage() {

    const [occurrences,
        setOccurrences] =
        useState([]);

    useEffect(() => {

        loadOccurrences();

    }, []);

    async function loadOccurrences() {

        const response =
            await api.get("/occurrences");

        setOccurrences(
            response.data
        );
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between">

                <h2>Ocorrências</h2>

                <Link
                    to="/occurrences/new"
                    className="btn btn-success">

                    Nova Ocorrência

                </Link>

            </div>

            <hr />

            <table
                className="table table-striped">

                <thead>

                <tr>

                    <th>Título</th>
                    <th>Endereço</th>
                    <th>Risco</th>
                    <th>Status</th>

                </tr>

                </thead>

                <tbody>

                {
                    occurrences.map(
                        occurrence => (

                            <tr
                                key={
                                    occurrence.id
                                }>

                                <td>
                                    {occurrence.title}
                                </td>

                                <td>
                                    {occurrence.address}
                                </td>

                                <td>
                                    {occurrence.riskLevel}
                                </td>

                                <td>
                                    {occurrence.status}
                                </td>

                            </tr>

                        )
                    )
                }

                </tbody>

            </table>

        </div>

    );
}

export default OccurrencesPage;