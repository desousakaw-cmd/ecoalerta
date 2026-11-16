package br.com.ecoalerta.service;

import br.com.ecoalerta.dto.OccurrenceRequestDto;
import br.com.ecoalerta.entity.Occurrence;
import br.com.ecoalerta.entity.RiskLevel;
import br.com.ecoalerta.entity.User;
import br.com.ecoalerta.repository.OccurrenceRepository;
import br.com.ecoalerta.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class OccurrenceServiceTest {

    @Mock
    private OccurrenceRepository occurrenceRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private OccurrenceService service;

    @Test
    void shouldCreateOccurrence() {

        User user = new User();

        OccurrenceRequestDto dto =
                new OccurrenceRequestDto();

        dto.setTitle("Teste");
        dto.setDescription("Descrição");
        dto.setAddress("Rua A");
        dto.setRiskLevel(RiskLevel.LOW);
        dto.setUserId(1L);

        when(
                userRepository.findById(1L)
        ).thenReturn(
                Optional.of(user)
        );

        when(
                occurrenceRepository.save(
                        any(Occurrence.class)
                )
        ).thenAnswer(
                i -> i.getArgument(0)
        );

        assertNotNull(
                service.create(dto)
        );
    }

    @Test
    void shouldFindOccurrenceById() {

        User user =
                new User();

        user.setName("Kawan");

        Occurrence occurrence =
                new Occurrence();

        occurrence.setUser(user);

        when(
                occurrenceRepository.findById(1L)
        ).thenReturn(
                Optional.of(occurrence)
        );

        assertNotNull(
                service.findById(1L)
        );
    }

    @Test
    void shouldDeleteOccurrence() {

        Occurrence occurrence =
                new Occurrence();

        when(
                occurrenceRepository.findById(1L)
        ).thenReturn(
                Optional.of(
                        occurrence
                )
        );

        service.delete(1L);

        verify(
                occurrenceRepository
        ).delete(
                occurrence
        );
    }
}