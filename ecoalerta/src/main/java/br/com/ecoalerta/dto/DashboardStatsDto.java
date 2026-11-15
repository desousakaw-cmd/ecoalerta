package br.com.ecoalerta.dto;

public class DashboardStatsDto {

    private Long total;
    private Long lowRisk;
    private Long mediumRisk;
    private Long highRisk;

    public DashboardStatsDto(
            Long total,
            Long lowRisk,
            Long mediumRisk,
            Long highRisk) {

        this.total = total;
        this.lowRisk = lowRisk;
        this.mediumRisk = mediumRisk;
        this.highRisk = highRisk;
    }

    public Long getTotal() {
        return total;
    }

    public Long getLowRisk() {
        return lowRisk;
    }

    public Long getMediumRisk() {
        return mediumRisk;
    }

    public Long getHighRisk() {
        return highRisk;
    }
}