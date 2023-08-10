package com.example.stageoncfbackend.dto;

import com.example.stageoncfbackend.model.enums.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;

@Getter
public class CreateEvolutionRequestDTO {
    private EvolutionType evolutionType;
    private String title;
    private String recommendedBy;
    private String module;
    private PhaseType phase;
    private String application;
    private ChannelType channelType;
    private ExploitationType exploitationType;
    private int priority;
    private boolean needMeeting;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date planifiedMeetingDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date meetingDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date productionDate;
    private int percentage;
    @Enumerated(EnumType.STRING)
    private StuationType stuationType;
    private String observation;
}