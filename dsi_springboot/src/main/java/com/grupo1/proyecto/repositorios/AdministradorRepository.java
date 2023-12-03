package com.grupo1.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo1.proyecto.modelo.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long>{
    Administrador findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena);
}
