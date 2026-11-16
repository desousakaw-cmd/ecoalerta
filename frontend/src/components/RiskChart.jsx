import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    Tooltip
} from "chart.js";

import {
    Doughnut
} from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function RiskChart({ stats }) {

    const data = {

        labels: [
            "Baixo",
            "Médio",
            "Alto"
        ],

        datasets: [

            {
                data: [
                    stats.lowRisk,
                    stats.mediumRisk,
                    stats.highRisk
                ],

                backgroundColor: [
                    "#22c55e",
                    "#facc15",
                    "#ef4444"
                ],

                borderWidth: 0
            }

        ]

    };

    return (

        <div
            className="app-card p-4">

            <h4
                className="mb-4">

                Distribuição por Risco

            </h4>

            <Doughnut
                data={data}
            />

        </div>

    );
}

export default RiskChart;