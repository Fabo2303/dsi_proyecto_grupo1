package com.grupo1.proyecto.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.Cliente;
import com.grupo1.proyecto.repositorios.ClienteRepository;

@Service
public class ClienteServiceImp implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> selectAllCliente() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena) {
        return clienteRepository.findByNombreUsuarioAndContrasena(nombreUsuario, contrasena);
    }

    @Override
    public Cliente selectClienteByIdCliente(Long idCliente) {
        return clienteRepository.findById(idCliente).orElse(null);
    }
    
}
