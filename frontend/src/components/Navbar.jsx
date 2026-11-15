import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const location = useLocation();

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    function logout() {

        localStorage.removeItem(
            "user"
        );

        navigate("/");
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light navbar-eco">

            <div className="container">

                <Link
                    to="/dashboard"
                    className="navbar-brand d-flex align-items-center gap-2">

                    <div className="logo-circle" style={{
                        width: "42px",
                        height: "42px",
                        margin: 0,
                        fontSize: "18px"
                    }}>

                        🌱

                    </div>

                    EcoAlerta

                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent">

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">

                            <Link
                                to="/dashboard"
                                className={`nav-link ${
                                    location.pathname === "/dashboard"
                                        ? "fw-bold text-success"
                                        : ""
                                }`}>

                                Dashboard

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                to="/occurrences"
                                className={`nav-link ${
                                    location.pathname === "/occurrences"
                                        ? "fw-bold text-success"
                                        : ""
                                }`}>

                                Ocorrências

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                to="/occurrences/new"
                                className={`nav-link ${
                                    location.pathname === "/occurrences/new"
                                        ? "fw-bold text-success"
                                        : ""
                                }`}>

                                Nova Ocorrência

                            </Link>

                        </li>

                    </ul>

                    <div className="d-flex align-items-center gap-3">

                        <div
                            className="text-end">

                            <div
                                style={{
                                    fontSize: ".75rem",
                                    color: "#6b7280"
                                }}>

                                Usuário Logado

                            </div>

                            <div
                                className="fw-semibold">

                                {user?.name}

                            </div>

                        </div>

                        <button
                            className="btn btn-outline-danger"
                            onClick={logout}>

                            Sair

                        </button>

                    </div>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;