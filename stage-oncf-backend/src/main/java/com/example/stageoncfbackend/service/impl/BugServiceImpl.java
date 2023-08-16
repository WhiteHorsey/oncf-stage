package com.example.stageoncfbackend.service.impl;

import com.example.stageoncfbackend.dto.CreateBugRequestDTO;
import com.example.stageoncfbackend.exception.errors.NotFoundException;
import com.example.stageoncfbackend.mapper.BugMapper;
import com.example.stageoncfbackend.model.Bug;
import com.example.stageoncfbackend.repository.BugRepository;
import com.example.stageoncfbackend.service.BugService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class BugServiceImpl implements BugService {

    private final BugRepository bugRepository;


    @Override
    public List<Bug> getAllBugs() {
        return bugRepository.findAll();
    }

    @Override
    public Bug createBug(CreateBugRequestDTO requestDTO) {
        return bugRepository.save(BugMapper.toEntity(requestDTO));
    }

    @Override
    public void deleteBug(Long id) {
        bugRepository.delete(bugRepository.findById(id).orElseThrow(() -> new NotFoundException("Bug not found!")));
    }
}
