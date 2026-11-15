package br.com.ecoalerta.service;

import br.com.ecoalerta.dto.DashboardStatsDto;
import br.com.ecoalerta.dto.OccurrenceRequestDto;
import br.com.ecoalerta.dto.OccurrenceResponseDto;
import br.com.ecoalerta.entity.Occurrence;
import br.com.ecoalerta.entity.RiskLevel;
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

    public OccurrenceResponseDto update(
            Long id,
            OccurrenceRequestDto dto) {

        Occurrence occurrence =
                occurrenceRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Ocorrência não encontrada"));

        occurrence.setTitle(dto.getTitle());
        occurrence.setDescription(dto.getDescription());
        occurrence.setAddress(dto.getAddress());
        occurrence.setRiskLevel(dto.getRiskLevel());
        occurrence.setImageUrl(dto.getImageUrl());

        Occurrence updated =
                occurrenceRepository.save(occurrence);

        return mapToDTO(updated);
    }

    public void delete(Long id) {

        Occurrence occurrence =
                occurrenceRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Ocorrência não encontrada"));

        occurrenceRepository.delete(
                occurrence
        );
    }

    public DashboardStatsDto getStatistics() {

        long total =
                occurrenceRepository.count();

        long low =
                occurrenceRepository.countByRiskLevel(
                        RiskLevel.LOW
                );

        long medium =
                occurrenceRepository.countByRiskLevel(
                        RiskLevel.MEDIUM
                );

        long high =
                occurrenceRepository.countByRiskLevel(
                        RiskLevel.HIGH
                );

        return new DashboardStatsDto(
                total,
                low,
                medium,
                high
        );
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