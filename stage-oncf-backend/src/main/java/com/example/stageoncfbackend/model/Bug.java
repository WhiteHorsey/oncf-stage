package com.example.stageoncfbackend.model;


import com.example.stageoncfbackend.model.enums.BugType;
import com.example.stageoncfbackend.model.enums.DangerType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Bug extends DateAudit {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private BugType bugType;
    private String title;
    private String status; // etat
    @Enumerated(EnumType.STRING)
    private DangerType dangerType;
    private String managerProvider; // responsablePrestataire
    @JsonFormat(pattern = "dd/MM/yy")
    private Date  planifiedResolutionDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date  resolutionDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date productionDate;
    private String observation;

}