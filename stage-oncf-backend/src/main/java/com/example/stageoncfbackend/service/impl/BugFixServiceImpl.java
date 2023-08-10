package com.example.stageoncfbackend.service.impl;

import com.example.stageoncfbackend.dto.CreateBugFixRequestDTO;
import com.example.stageoncfbackend.dto.CreateEvolutionRequestDTO;
import com.example.stageoncfbackend.exception.errors.NotFoundException;
import com.example.stageoncfbackend.mapper.BugFixMapper;
import com.example.stageoncfbackend.mapper.EvolutionMapper;
import com.example.stageoncfbackend.model.BugFix;
import com.example.stageoncfbackend.model.Evolution;
import com.example.stageoncfbackend.repository.BugFixRepository;
import com.example.stageoncfbackend.repository.EvolutionRepository;
import com.example.stageoncfbackend.service.BugFixService;
import com.example.stageoncfbackend.service.EvolutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BugFixServiceImpl implements BugFixService {
    private final BugFixRepository bugFixRepository;

    @Override
    public List<BugFix> getAllBugFix() {
        return bugFixRepository.findAll();
    }

    @Override
    public BugFix createBugFix(CreateBugFixRequestDTO requestDTO) {
        return bugFixRepository.save(BugFixMapper.toEntity(requestDTO));
    }

    @Override
    public void deleteBugFix(Long id) {
        bugFixRepository.delete(bugFixRepository.findById(id).orElseThrow(() -> new NotFoundException("Bug not found!")));

    }
}