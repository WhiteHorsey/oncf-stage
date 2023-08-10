package com.example.stageoncfbackend.service.impl;

import com.example.stageoncfbackend.dto.CreateEvolutionRequestDTO;
import com.example.stageoncfbackend.exception.errors.NotFoundException;
import com.example.stageoncfbackend.mapper.EvolutionMapper;
import com.example.stageoncfbackend.model.Evolution;
import com.example.stageoncfbackend.repository.EvolutionRepository;
import com.example.stageoncfbackend.service.EvolutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class EvolutionServiceImpl implements EvolutionService {
    private final EvolutionRepository evolutionRepository;
    @Override
    public List<Evolution> getAllEvolutions() {
        return evolutionRepository.findAll();
    }

    @Override
    public Evolution createEvolution(CreateEvolutionRequestDTO requestDTO) {
        return evolutionRepository.save(EvolutionMapper.toEntity(requestDTO));
    }

    @Override
    public void deleteEvolution(Long id) {
        evolutionRepository.delete(evolutionRepository.findById(id).orElseThrow(() -> new NotFoundException("Bug not found!")));
    }
}