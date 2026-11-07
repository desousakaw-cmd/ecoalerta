package br.com.ecoalerta.exception;

public class BusinessException
        extends RuntimeException {

    public BusinessException(
            String message) {

        super(message);
    }
}