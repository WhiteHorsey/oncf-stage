package com.example.stageoncfbackend.dto;

import com.example.stageoncfbackend.model.enums.BugType;
import com.example.stageoncfbackend.model.enums.DangerType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

import java.util.Date;

@Getter
public class CreateBugRequestDTO {
    private BugType bugType;
    private String title;
    private DangerType dangerType;
    private String managerProvider;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date  planifiedResolutionDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date  resolutionDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date productionDate;
    private String observation;
}
