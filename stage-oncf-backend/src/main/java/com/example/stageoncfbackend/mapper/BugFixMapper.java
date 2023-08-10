package com.example.stageoncfbackend.mapper;

import com.example.stageoncfbackend.dto.CreateBugFixRequestDTO;
import com.example.stageoncfbackend.model.BugFix;

public class BugFixMapper {
    public static BugFix toEntity(CreateBugFixRequestDTO requestDTO) {
        return BugFix.builder()
                .title(requestDTO.getTitle())
                .bugFixType(requestDTO.getBugFixType())
                .manager(requestDTO.getManager())
                .application(requestDTO.getApplication())
                .dangerType(requestDTO.getDangerType())
                .openedBy(requestDTO.getOpenedBy())
                .channelType(requestDTO.getChannelType())
                .stuationType(requestDTO.getStuationType())
                .planifiedBugFixDate(requestDTO.getPlanifiedBugFixDate())
                .bugFixDate(requestDTO.getBugFixDate())
                .observation(requestDTO.getObservation())
                .build();
    }
}