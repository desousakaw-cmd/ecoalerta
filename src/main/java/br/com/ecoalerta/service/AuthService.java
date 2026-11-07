package br.com.ecoalerta.service;

import br.com.ecoalerta.dto.LoginRequestDto;
import br.com.ecoalerta.dto.LoginResponseDto;
import br.com.ecoalerta.entity.User;
import br.com.ecoalerta.exception.BusinessException;
import br.com.ecoalerta.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public LoginResponseDto login(
            LoginRequestDto dto) {

        User user = userRepository
                .findByEmail(dto.getEmail())
                .orElseThrow(() ->
                        new BusinessException(
                                "Usuário ou senha inválidos"));

        if (!user.getPassword()
                .equals(dto.getPassword())) {

            throw new BusinessException(
                    "Usuário ou senha inválidos");
        }

        return new LoginResponseDto(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }
}