package br.com.ecoalerta.repository;

import br.com.ecoalerta.entity.Occurrence;
import br.com.ecoalerta.entity.RiskLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OccurrenceRepository
        extends JpaRepository<Occurrence, Long> {

    long countByRiskLevel(
            RiskLevel riskLevel
    );

}