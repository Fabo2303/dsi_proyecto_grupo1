package com.grupo1.proyecto.servicios;

import java.util.List;

import com.grupo1.proyecto.modelo.Administrador;

public interface AdministradorService {
    public Administrador saveAdministrador(Administrador administrador);
    public List<Administrador> selectAllAdministrador();
    public Administrador findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena);
    public Administrador selectAdministradorByIdAdmin(Long idAdmin);
}
