import { Link } from "react-router-dom";

function DashboardPage() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    return (

        <div className="container mt-5">

            <h2>

                Bem-vindo, {user?.name}

            </h2>

            <hr />

            <Link
                to="/occurrences"
                className="btn btn-primary me-2">

                Ver Ocorrências

            </Link>

            <Link
                to="/occurrences/new"
                className="btn btn-success">

                Nova Ocorrência

            </Link>

        </div>

    );
}

export default DashboardPage;