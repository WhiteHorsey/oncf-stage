package com.example.stageoncfbackend.service;

import com.example.stageoncfbackend.dto.CreateBugFixRequestDTO;
import com.example.stageoncfbackend.model.BugFix;

import java.util.List;

public interface BugFixService {
    List<BugFix> getAllBugFix();
    BugFix createBugFix(CreateBugFixRequestDTO requestDTO);
    void deleteBugFix(Long id);
}