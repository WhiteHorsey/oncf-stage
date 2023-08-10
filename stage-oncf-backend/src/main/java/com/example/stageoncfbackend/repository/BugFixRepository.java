package com.example.stageoncfbackend.repository;

import com.example.stageoncfbackend.model.BugFix;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BugFixRepository extends JpaRepository<BugFix, Long> {
}