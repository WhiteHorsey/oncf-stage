package com.example.stageoncfbackend.dto;

import com.example.stageoncfbackend.model.enumss.BugFixType;
import com.example.stageoncfbackend.model.enumss.ChannelType;
import com.example.stageoncfbackend.model.enumss.DangerType;
import com.example.stageoncfbackend.model.enumss.StuationType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

import java.util.Date;

@Getter
public class CreateBugFixRequestDTO {
    private String title;
    private BugFixType bugFixType;
    private String manager;
    private String application;
    private DangerType dangerType;
    private String openedBy;
    private ChannelType channelType;
    private StuationType stuationType;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date planifiedBugFixDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date bugFixDate;
    private String observation;
}