package br.com.ecoalerta.controller;

import br.com.ecoalerta.dto.LoginRequestDto;
import br.com.ecoalerta.dto.LoginResponseDto;
import br.com.ecoalerta.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@Tag(name = "Autenticação")
public class AuthController {

    private final AuthService service;

    public AuthController(
            AuthService service) {

        this.service = service;
    }

    @Operation(summary = "Realizar login")
    @PostMapping("/login")
    public LoginResponseDto login(
            @RequestBody
            @Valid
            LoginRequestDto dto) {

        return service.login(dto);
    }
}