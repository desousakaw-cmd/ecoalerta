package br.com.ecoalerta.controller;

import br.com.ecoalerta.service.OccurrenceService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class OccurrenceControllerTest {

    @Test
    void controllerShouldCallService() {

        OccurrenceService service =
                mock(
                        OccurrenceService.class
                );

        OccurrenceController controller =
                new OccurrenceController(
                        service
                );

        controller.findAll();

        verify(service)
                .findAll();
    }
}