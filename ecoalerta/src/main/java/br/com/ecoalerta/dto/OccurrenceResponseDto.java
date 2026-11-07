package br.com.ecoalerta.dto;

import br.com.ecoalerta.entity.OccurrenceStatus;
import br.com.ecoalerta.entity.RiskLevel;

import java.time.LocalDateTime;

public class OccurrenceResponseDto {

    private Long id;

    private String title;

    private String description;

    private String address;

    private String imageUrl;

    private RiskLevel riskLevel;

    private OccurrenceStatus status;

    private LocalDateTime createdAt;

    private String userName;

    public OccurrenceResponseDto(
            Long id,
            String title,
            String description,
            String address,
            String imageUrl,
            RiskLevel riskLevel,
            OccurrenceStatus status,
            LocalDateTime createdAt,
            String userName) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.address = address;
        this.imageUrl = imageUrl;
        this.riskLevel = riskLevel;
        this.status = status;
        this.createdAt = createdAt;
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getAddress() {
        return address;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public RiskLevel getRiskLevel() {
        return riskLevel;
    }

    public OccurrenceStatus getStatus() {
        return status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getUserName() {
        return userName;
    }
}