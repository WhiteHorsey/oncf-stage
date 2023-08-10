package com.example.stageoncfbackend.model;


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
public class BugFix extends DateAudit {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String title;
    @Enumerated(EnumType.STRING)
    private BugFixType bugFixType;
    private String manager;
    private String application;
    @Enumerated(EnumType.STRING)
    private DangerType dangerType;
    private String openedBy;
    @Enumerated(EnumType.STRING)
    private ChannelType channelType;
    @Enumerated(EnumType.STRING)
    private StuationType stuationType;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date planifiedBugFixDate;
    @JsonFormat(pattern = "dd/MM/yy")
    private Date bugFixDate;
    private String observation;
}