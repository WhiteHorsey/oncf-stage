package com.example.stageoncfbackend.mapper;

import com.example.stageoncfbackend.dto.CreateEvolutionRequestDTO;
import com.example.stageoncfbackend.model.Evolution;

public class EvolutionMapper {
    public static Evolution toEntity(CreateEvolutionRequestDTO requestDTO) {
        return Evolution.builder()
                .evolutionType(requestDTO.getEvolutionType())
                .title(requestDTO.getTitle())
                .recommendedBy(requestDTO.getRecommendedBy())
                .module(requestDTO.getModule())
                .phase(requestDTO.getPhase())
                .application(requestDTO.getApplication())
                .channelType(requestDTO.getChannelType())
                .exploitationType(requestDTO.getExploitationType())
                .priority(requestDTO.getPriority())
                .needMeeting(requestDTO.isNeedMeeting())
                .planifiedMeetingDate(requestDTO.getPlanifiedMeetingDate())
                .meetingDate(requestDTO.getMeetingDate())
                .productionDate(requestDTO.getProductionDate())
                .percentage(requestDTO.getPercentage())
                .stuationType(requestDTO.getStuationType())
                .observation(requestDTO.getObservation())
                .build();

    }
}