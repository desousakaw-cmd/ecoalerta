import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="eco-footer">

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-4">

                        <div className="d-flex align-items-center gap-3 mb-3">

                            <div className="logo-circle"
                                 style={{
                                     width: "50px",
                                     height: "50px",
                                     margin: 0,
                                     fontSize: "20px"
                                 }}>

                                🌱

                            </div>

                            <h5
                                className="mb-0">

                                EcoAlerta

                            </h5>

                        </div>

                        <p
                            className="text-white-50">

                            Plataforma colaborativa voltada para
                            identificação, monitoramento e registro
                            de ocorrências ambientais em comunidades
                            urbanas e rurais.

                        </p>

                    </div>

                    <div className="col-lg-3">

                        <h5
                            className="mb-3">

                            Navegação

                        </h5>

                        <div
                            className="d-flex flex-column gap-2">

                            <Link
                                to="/dashboard">

                                Dashboard

                            </Link>

                            <Link
                                to="/occurrences">

                                Ocorrências

                            </Link>

                            <Link
                                to="/occurrences/new">

                                Nova Ocorrência

                            </Link>

                        </div>

                    </div>

                    <div className="col-lg-3">

                        <h5
                            className="mb-3">

                            Contato

                        </h5>

                        <div
                            className="d-flex flex-column gap-2">

                            <span>

                                📧 contato@ecoalerta.com

                            </span>

                            <span>

                                📱 Plataforma Acadêmica

                            </span>

                            <span>

                                🌎 Brasil

                            </span>

                        </div>

                    </div>

                    <div className="col-lg-2">

                        <h5
                            className="mb-3">

                            Social

                        </h5>

                        <div
                            className="d-flex flex-column gap-2">

                            <a
                                href="#">

                                LinkedIn

                            </a>

                            <a
                                href="#">

                                GitHub

                            </a>

                        </div>

                    </div>

                </div>

                <hr
                    className="my-4"
                    style={{
                        borderColor:
                            "rgba(255,255,255,.15)"
                    }}
                />

                <div
                    className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

                    <span
                        className="text-white-50">

                        © 2026 EcoAlerta. Todos os direitos reservados.

                    </span>

                    <span
                        className="text-white">

                        🌱 Tecnologia a serviço do meio ambiente.

                    </span>

                </div>

            </div>

        </footer>

    );
}

export default Footer;