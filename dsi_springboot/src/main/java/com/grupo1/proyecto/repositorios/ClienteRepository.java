package com.grupo1.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo1.proyecto.modelo.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    Cliente findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena);
}
