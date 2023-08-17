package com.example.stageoncfbackend.controller;

import com.example.stageoncfbackend.dto.CreateBugFixRequestDTO;
import com.example.stageoncfbackend.model.BugFix;
import com.example.stageoncfbackend.service.BugFixService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bugFix")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BugFixController {

    private final BugFixService bugFixService;

    @GetMapping
    public List<BugFix> getAllBugFix() {
        return bugFixService.getAllBugFix();
    }

    @PostMapping
    public BugFix createBugFix(@RequestBody CreateBugFixRequestDTO requestDTO) {
        return bugFixService.createBugFix(requestDTO);
    }

    @DeleteMapping("/{bugFixId}")
    public void deleteBugFix(@PathVariable Long bugFixId) {
        bugFixService.deleteBugFix(bugFixId);
    }
}