package com.example.stageoncfbackend.mapper;

import com.example.stageoncfbackend.dto.CreateBugRequestDTO;
import com.example.stageoncfbackend.model.Bug;

public class BugMapper {

    public static Bug toEntity(CreateBugRequestDTO requestDTO){
        return Bug.builder()
                .bugType(requestDTO.getBugType())
                .title(requestDTO.getTitle())
                .status("Nouveau")
                .dangerType(requestDTO.getDangerType())
                .managerProvider(requestDTO.getManagerProvider())
                .planifiedResolutionDate(requestDTO.getPlanifiedResolutionDate())
                .resolutionDate(requestDTO.getResolutionDate())
                .productionDate(requestDTO.getProductionDate())
                .observation(requestDTO.getObservation())
                .build();
    }
}
