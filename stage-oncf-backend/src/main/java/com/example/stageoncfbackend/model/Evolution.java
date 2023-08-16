package com.example.stageoncfbackend.model;

import com.example.stageoncfbackend.model.enumss.*;
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
public class Evolution extends DateAudit {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private EvolutionType evolutionType;
    private String title;
    private String recommendedBy;
    private String module;
    @Enumerated(EnumType.STRING)
    private PhaseType phase;
    private String application;
    @Enumerated(EnumType.STRING)
    private ChannelType channelType;
    @Enumerated(EnumType.STRING)
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