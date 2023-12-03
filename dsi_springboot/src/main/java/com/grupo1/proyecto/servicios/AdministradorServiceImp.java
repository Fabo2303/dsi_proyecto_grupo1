package com.grupo1.proyecto.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.Administrador;
import com.grupo1.proyecto.repositorios.AdministradorRepository;

@Service
public class AdministradorServiceImp implements AdministradorService{
    
    @Autowired
    private AdministradorRepository administradorRepository;

    @Override
    public Administrador saveAdministrador(Administrador administrador) {
        return administradorRepository.save(administrador);
    }

    @Override
    public List<Administrador> selectAllAdministrador() {
        return administradorRepository.findAll();
    }

    @Override
    public Administrador findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena) {
        return administradorRepository.findByNombreUsuarioAndContrasena(nombreUsuario, contrasena);
    }

    @Override
    public Administrador selectAdministradorByIdAdmin(Long idAdmin) {
        return administradorRepository.findById(idAdmin).orElse(null);
    }

    
}
