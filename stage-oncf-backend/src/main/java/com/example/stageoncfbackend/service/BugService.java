package com.example.stageoncfbackend.service;

import com.example.stageoncfbackend.dto.CreateBugRequestDTO;
import com.example.stageoncfbackend.model.Bug;

import java.util.List;

public interface BugService {
    List<Bug> getAllBugs();
    Bug createBug(CreateBugRequestDTO requestDTO);
    void deleteBug(Long id);
}
