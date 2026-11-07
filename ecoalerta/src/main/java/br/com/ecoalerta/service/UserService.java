package br.com.ecoalerta.service;

import br.com.ecoalerta.dto.UserRequestDto;
import br.com.ecoalerta.dto.UserResponseDto;
import br.com.ecoalerta.entity.User;
import br.com.ecoalerta.exception.BusinessException;
import br.com.ecoalerta.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public UserResponseDto create(UserRequestDto dto) {

        repository.findByEmail(dto.getEmail())
                .ifPresent(user -> {
                    throw new BusinessException(
                            "Já existe usuário com este e-mail"
                    );
                });

        User user = new User();

        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());

        User saved = repository.save(user);

        return new UserResponseDto(
                saved.getId(),
                saved.getName(),
                saved.getEmail(),
                saved.getCreatedAt()
        );
    }

}