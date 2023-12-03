package com.grupo1.proyecto.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo1.proyecto.modelo.Envio;
import com.grupo1.proyecto.servicios.EnvioService;

@RestController
@CrossOrigin
@RequestMapping("/envio")
public class EnvioController {
    @Autowired
    private EnvioService envioService;

    @PostMapping("/add")
    public String addEnvio(@RequestBody Envio envio){
        envioService.saveEnvio(envio);
        return "Envio Registrado";
    }
}
