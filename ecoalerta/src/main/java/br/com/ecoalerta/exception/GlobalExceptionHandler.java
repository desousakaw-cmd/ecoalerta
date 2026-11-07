package br.com.ecoalerta.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(
            ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorResponse>
    handleNotFound(
            ResourceNotFoundException ex) {

        ApiErrorResponse error =
                new ApiErrorResponse(
                        404,
                        ex.getMessage());

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(error);
    }

    @ExceptionHandler(
            BusinessException.class)
    public ResponseEntity<ApiErrorResponse>
    handleBusiness(
            BusinessException ex) {

        ApiErrorResponse error =
                new ApiErrorResponse(
                        400,
                        ex.getMessage());

        return ResponseEntity
                .badRequest()
                .body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorResponse>
    handleGeneric(
            Exception ex) {

        ApiErrorResponse error =
                new ApiErrorResponse(
                        500,
                        "Erro interno do servidor");

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(error);
    }
}