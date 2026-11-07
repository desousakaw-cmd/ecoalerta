package br.com.ecoalerta.service;

import br.com.ecoalerta.dto.OccurrenceRequestDto;
import br.com.ecoalerta.dto.OccurrenceResponseDto;
import br.com.ecoalerta.entity.Occurrence;
import br.com.ecoalerta.entity.User;
import br.com.ecoalerta.exception.ResourceNotFoundException;
import br.com.ecoalerta.repository.OccurrenceRepository;
import br.com.ecoalerta.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OccurrenceService {

    private final OccurrenceRepository occurrenceRepository;
    private final UserRepository userRepository;

    public OccurrenceService(
            OccurrenceRepository occurrenceRepository,
            UserRepository userRepository) {

        this.occurrenceRepository = occurrenceRepository;
        this.userRepository = userRepository;
    }

    public OccurrenceResponseDto create(
            OccurrenceRequestDto dto) {

        User user = userRepository.findById(
                        dto.getUserId())
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Usuário não encontrado"));

        Occurrence occurrence = new Occurrence();

        occurrence.setTitle(dto.getTitle());
        occurrence.setDescription(dto.getDescription());
        occurrence.setAddress(dto.getAddress());
        occurrence.setRiskLevel(dto.getRiskLevel());
        occurrence.setImageUrl(dto.getImageUrl());
        occurrence.setUser(user);

        Occurrence saved =
                occurrenceRepository.save(occurrence);

        return mapToDTO(saved);
    }

    public List<OccurrenceResponseDto> findAll() {

        return occurrenceRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    public OccurrenceResponseDto findById(Long id) {

        Occurrence occurrence =
                occurrenceRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Ocorrência não encontrada"));

        return mapToDTO(occurrence);
    }

    private OccurrenceResponseDto mapToDTO(
            Occurrence occurrence) {

        return new OccurrenceResponseDto(
                occurrence.getId(),
                occurrence.getTitle(),
                occurrence.getDescription(),
                occurrence.getAddress(),
                occurrence.getImageUrl(),
                occurrence.getRiskLevel(),
                occurrence.getStatus(),
                occurrence.getCreatedAt(),
                occurrence.getUser().getName()
        );
    }
}