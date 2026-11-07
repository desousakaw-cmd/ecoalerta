package br.com.ecoalerta.repository;

import br.com.ecoalerta.entity.Occurrence;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OccurrenceRepository extends JpaRepository<Occurrence, Long> {
}
