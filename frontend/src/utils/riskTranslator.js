export function translateRisk(risk) {

    switch (risk) {

        case "LOW":
            return "Baixo";

        case "MEDIUM":
            return "Médio";

        case "HIGH":
            return "Alto";

        default:
            return risk;
    }
}