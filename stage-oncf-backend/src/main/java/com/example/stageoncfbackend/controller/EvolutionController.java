package com.example.stageoncfbackend.controller;

import com.example.stageoncfbackend.dto.CreateEvolutionRequestDTO;
import com.example.stageoncfbackend.model.Evolution;
import com.example.stageoncfbackend.service.EvolutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evolutions")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class EvolutionController {

    private final EvolutionService evolutionService;

    @GetMapping
    public List<Evolution> getAllEvolutions() {
        return evolutionService.getAllEvolutions();
    }

    @PostMapping
    public Evolution createEvolution(@RequestBody CreateEvolutionRequestDTO requestDTO) {
        return evolutionService.createEvolution(requestDTO);
    }

    @DeleteMapping("/{evolutionId}")
    public void deleteEvolution(@PathVariable Long evolutionId) {
        evolutionService.deleteEvolution(evolutionId);
    }
}