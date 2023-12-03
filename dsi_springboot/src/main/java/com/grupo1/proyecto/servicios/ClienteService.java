package com.grupo1.proyecto.servicios;

import java.util.List;

import com.grupo1.proyecto.modelo.Cliente;

public interface ClienteService {
    public Cliente saveCliente(Cliente cliente);
    public List<Cliente> selectAllCliente();
    public Cliente findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena);
    public Cliente selectClienteByIdCliente(Long idCliente);
}

