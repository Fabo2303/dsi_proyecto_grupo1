package com.grupo1.proyecto.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grupo1.proyecto.modelo.Cliente;
import com.grupo1.proyecto.servicios.ClienteService;

@RestController
@CrossOrigin
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping("/add")
    public String addCliente(@RequestBody Cliente cliente){
        clienteService.saveCliente(cliente);
        return "Cliente Registrado";
    }

    @GetMapping("/select")
    public List<Cliente> selectAllClientes(){
        return clienteService.selectAllCliente();
    }

    @GetMapping("/select/id")
    public Cliente selectCliente(@RequestParam Long idCliente){
        return clienteService.selectClienteByIdCliente(idCliente);
    }

    @GetMapping("/select/find")
    public Cliente selectClienteByUserAndContrasena(@RequestParam String nombreUsuario, @RequestParam String contrasena){
        return clienteService.findByNombreUsuarioAndContrasena(nombreUsuario, contrasena);
    }
}
