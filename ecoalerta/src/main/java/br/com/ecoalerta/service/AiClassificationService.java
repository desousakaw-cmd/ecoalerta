package br.com.ecoalerta.service;

import br.com.ecoalerta.dto.AiClassificationResponseDto;
import org.springframework.stereotype.Service;

@Service
public class AiClassificationService {

    public AiClassificationResponseDto classify(
            String description) {

        String text =
                description.toLowerCase();

        if (

                text.contains("queimada")
                        ||
                        text.contains("fogo")
                        ||
                        text.contains("incêndio")
                        ||
                        text.contains("incendio")
                        ||
                        text.contains("enchente")
                        ||
                        text.contains("alagamento")
                        ||
                        text.contains("deslizamento")

        ) {

            return new AiClassificationResponseDto(

                    "HIGH",

                    0.92,

                    "Evento associado a risco elevado para pessoas e patrimônio."

            );
        }

        if (

                text.contains("lixo")
                        ||
                        text.contains("esgoto")
                        ||
                        text.contains("resíduo")
                        ||
                        text.contains("residuo")
                        ||
                        text.contains("entulho")

        ) {

            return new AiClassificationResponseDto(

                    "MEDIUM",

                    0.78,

                    "Existe potencial impacto ambiental e sanitário."

            );
        }

        return new AiClassificationResponseDto(

                "LOW",

                0.60,

                "Não foram encontrados indicadores críticos."

        );
    }
}