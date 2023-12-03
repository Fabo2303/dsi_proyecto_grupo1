package com.grupo1.proyecto.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.Envio;
import com.grupo1.proyecto.repositorios.EnvioRepository;

@Service
public class EnvioServiceImp implements EnvioService{

    @Autowired
    private EnvioRepository envioRepository;

    @Override
    public Envio saveEnvio(Envio envio) {
        return envioRepository.save(envio);
    }
    
}
