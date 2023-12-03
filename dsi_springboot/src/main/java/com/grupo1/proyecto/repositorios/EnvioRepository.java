package com.grupo1.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo1.proyecto.modelo.Envio;

@Repository
public interface EnvioRepository extends JpaRepository<Envio, Long>{
    
}
