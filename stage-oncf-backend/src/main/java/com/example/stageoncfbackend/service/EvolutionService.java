package com.example.stageoncfbackend.service;

import com.example.stageoncfbackend.dto.CreateEvolutionRequestDTO;
import com.example.stageoncfbackend.model.Evolution;

import java.util.List;

public interface EvolutionService {
    List<Evolution> getAllEvolutions();
    Evolution createEvolution(CreateEvolutionRequestDTO requestDTO);
    void deleteEvolution(Long id);
}