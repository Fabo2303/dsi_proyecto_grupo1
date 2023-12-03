package com.grupo1.proyecto.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo1.proyecto.modelo.OrdenVenta;

@Repository
public interface OrdenVentaRepository extends JpaRepository<OrdenVenta, Long>{
    List<OrdenVenta> findByCliente(Long cliente);
}
