package com.example.stageoncfbackend.exception;


import com.example.stageoncfbackend.exception.errors.ApiError;
import com.example.stageoncfbackend.exception.errors.NotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.ArrayList;

import static org.springframework.http.HttpStatus.*;

@RestControllerAdvice
public class ControllerAdvice {


    @ExceptionHandler(value = {
            NotFoundException.class,
    })
    @ResponseStatus(NOT_FOUND)
    public ApiError CustomException(Exception ex, WebRequest request) {
        ArrayList<String> messages = new ArrayList<>();
        messages.add(ex.getMessage());
        return new ApiError(
                NOT_FOUND.value(),
                messages,
                request.getDescription(false));
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(BAD_REQUEST)
    public ApiError handleInvalidArgument(MethodArgumentNotValidException ex, WebRequest request) {
        ArrayList<String> messages = new ArrayList<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            messages.add(error.getDefaultMessage());
        });
        return new ApiError(
                BAD_REQUEST.value(),
                messages,
                request.getDescription(false));
    }


    @ExceptionHandler(Exception.class)
    @ResponseStatus(INTERNAL_SERVER_ERROR)
    public ApiError globalExceptionHandler(Exception ex, WebRequest request) {
        ArrayList<String> messages = new ArrayList<>();
        messages.add(ex.getMessage());
        return new ApiError(
                INTERNAL_SERVER_ERROR.value(),
                messages,
                request.getDescription(false));
    }

}
