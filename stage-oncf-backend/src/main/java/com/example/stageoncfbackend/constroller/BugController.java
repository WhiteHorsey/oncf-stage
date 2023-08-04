package com.example.stageoncfbackend.constroller;

import com.example.stageoncfbackend.dto.CreateBugRequestDTO;
import com.example.stageoncfbackend.model.Bug;
import com.example.stageoncfbackend.service.BugService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bugs")
@RequiredArgsConstructor
public class BugController {

    private final BugService bugService;

    @GetMapping
    public List<Bug> getAllBugs() {
        return bugService.getAllBugs();
    }

    @PostMapping
    public Bug createBug(@RequestBody CreateBugRequestDTO requestDTO) {
        return bugService.createBug(requestDTO);
    }

    @DeleteMapping("/{bugId}")
    public void getAllBugs(@PathVariable Long bugId) {
        bugService.deleteBug(bugId);
    }
}
