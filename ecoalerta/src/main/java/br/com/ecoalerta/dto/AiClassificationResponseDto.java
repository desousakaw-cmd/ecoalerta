package br.com.ecoalerta.dto;

public class AiClassificationResponseDto {

    private String suggestedRisk;

    private Double confidence;

    private String rationale;

    public AiClassificationResponseDto(
            String suggestedRisk,
            Double confidence,
            String rationale) {

        this.suggestedRisk = suggestedRisk;
        this.confidence = confidence;
        this.rationale = rationale;
    }

    public String getSuggestedRisk() {
        return suggestedRisk;
    }

    public Double getConfidence() {
        return confidence;
    }

    public String getRationale() {
        return rationale;
    }
}