package br.com.ecoalerta.controller;

import br.com.ecoalerta.dto.OccurrenceRequestDto;
import br.com.ecoalerta.dto.OccurrenceResponseDto;
import br.com.ecoalerta.service.OccurrenceService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/occurrences")
public class OccurrenceController {

    private final OccurrenceService service;

    public OccurrenceController(
            OccurrenceService service) {

        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OccurrenceResponseDto create(
            @RequestBody
            @Valid
            OccurrenceRequestDto dto) {

        return service.create(dto);
    }

    @GetMapping
    public List<OccurrenceResponseDto> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public OccurrenceResponseDto findById(
            @PathVariable Long id) {

        return service.findById(id);
    }
}