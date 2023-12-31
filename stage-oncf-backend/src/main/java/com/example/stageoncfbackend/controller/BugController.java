package com.example.stageoncfbackend.controller;

import com.example.stageoncfbackend.dto.CreateBugRequestDTO;
import com.example.stageoncfbackend.model.Bug;
import com.example.stageoncfbackend.service.BugService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BugController {

    private final BugService bugService;

    @GetMapping("/api/bugs")
    public List<Bug> getAllBugs() {
        return bugService.getAllBugs();
    }

    @PostMapping("/api/bugs")
    public Bug createBug(@RequestBody CreateBugRequestDTO requestDTO) {
        return bugService.createBug(requestDTO);
    }

    @DeleteMapping("/api/bugs/{bugId}")
    public void getAllBugs(@PathVariable Long bugId) {
        bugService.deleteBug(bugId);
    }
}