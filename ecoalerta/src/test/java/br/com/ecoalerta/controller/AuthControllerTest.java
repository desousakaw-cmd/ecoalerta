package br.com.ecoalerta.controller;

import br.com.ecoalerta.service.AuthService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class AuthControllerTest {

    @Test
    void shouldInstantiateController() {

        AuthService service =
                mock(
                        AuthService.class
                );

        AuthController controller =
                new AuthController(
                        service
                );

        assert controller != null;
    }
}