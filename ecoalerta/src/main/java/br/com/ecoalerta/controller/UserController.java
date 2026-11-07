package br.com.ecoalerta.controller;

import br.com.ecoalerta.dto.UserRequestDto;
import br.com.ecoalerta.dto.UserResponseDto;
import br.com.ecoalerta.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@Tag(name = "Usuários")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @Operation(summary = "Cadastrar usuário")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponseDto create(
            @RequestBody
            @Valid
            UserRequestDto dto) {

        return service.create(dto);
    }
}