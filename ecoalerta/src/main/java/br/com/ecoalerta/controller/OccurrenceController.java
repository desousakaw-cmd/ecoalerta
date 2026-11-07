package br.com.ecoalerta.controller;

import br.com.ecoalerta.dto.OccurrenceRequestDto;
import br.com.ecoalerta.dto.OccurrenceResponseDto;
import br.com.ecoalerta.service.OccurrenceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/occurrences")
@Tag(name = "Ocorrências")
public class OccurrenceController {

    private final OccurrenceService service;

    public OccurrenceController(
            OccurrenceService service) {

        this.service = service;
    }

    @Operation(summary = "Cadastrar ocorrência")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OccurrenceResponseDto create(
            @RequestBody
            @Valid
            OccurrenceRequestDto dto) {

        return service.create(dto);
    }

    @Operation(summary = "Listar ocorrências")
    @GetMapping
    public List<OccurrenceResponseDto> findAll() {
        return service.findAll();
    }

    @Operation(summary = "Buscar ocorrência por ID")
    @GetMapping("/{id}")
    public OccurrenceResponseDto findById(
            @PathVariable Long id) {

        return service.findById(id);
    }
}