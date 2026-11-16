package br.com.ecoalerta.controller;

import br.com.ecoalerta.dto.AiClassificationResponseDto;
import br.com.ecoalerta.service.AiClassificationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
public class AiController {

    private final AiClassificationService service;

    public AiController(
            AiClassificationService service) {

        this.service = service;
    }

    @PostMapping("/classify")
    public AiClassificationResponseDto classify(

            @RequestBody String description

    ) {

        return service.classify(
                description
        );
    }
}