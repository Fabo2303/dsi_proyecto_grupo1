package com.grupo1.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo1.proyecto.modelo.Reembolso;

@Repository
public interface ReembolsoRepository extends JpaRepository<Reembolso, Long>{
    
}
