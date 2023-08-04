package com.example.stageoncfbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.util.Date;

@Data
@MappedSuperclass
public abstract class DateAudit implements Serializable {
    @Column(updatable = false)
    @CreationTimestamp
    @JsonFormat(pattern = "dd/MM/yy HH:mm:ss")
    private Date createdAt;
}