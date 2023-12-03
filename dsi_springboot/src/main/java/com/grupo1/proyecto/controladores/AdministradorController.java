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

import com.grupo1.proyecto.modelo.Administrador;
import com.grupo1.proyecto.servicios.AdministradorService;

@RestController
@CrossOrigin
@RequestMapping("/administrador")
public class AdministradorController {
    @Autowired
    private AdministradorService administradorService;

    @PostMapping("/add")
    public String addCliente(@RequestBody Administrador administrador){
        administradorService.saveAdministrador(administrador);
        return "Administrador Registrado";
    }

    @GetMapping("/select")
    public List<Administrador> selectAllClientes(){
        return administradorService.selectAllAdministrador();
    }

    @GetMapping("/select/id")
    public Administrador selectCliente(@RequestParam Long idCliente){
        return administradorService.selectAdministradorByIdAdmin(idCliente);
    }

    @GetMapping("/select/find")
    public Administrador selectClienteByUserAndContrasena(@RequestParam String nombreUsuario, @RequestParam String contrasena){
        return administradorService.findByNombreUsuarioAndContrasena(nombreUsuario, contrasena);
    }
}
