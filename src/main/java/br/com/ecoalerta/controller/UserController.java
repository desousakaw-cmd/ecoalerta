package br.com.ecoalerta.controller;

import br.com.ecoalerta.dto.UserRequestDto;
import br.com.ecoalerta.entity.User;
import br.com.ecoalerta.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User create(
            @RequestBody
            @Valid
            UserRequestDto dto
    ) {
        return service.create(dto);
    }
}