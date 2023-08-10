package com.example.stageoncfbackend.repository;

import com.example.stageoncfbackend.model.Bug;
import com.example.stageoncfbackend.model.Evolution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvolutionRepository extends JpaRepository<Evolution, Long> {
}