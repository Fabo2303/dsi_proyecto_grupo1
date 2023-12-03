package com.grupo1.proyecto.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.Reembolso;
import com.grupo1.proyecto.repositorios.ReembolsoRepository;

@Service
public class ReembolsoServiceImp implements ReembolsoService{

    @Autowired
    private ReembolsoRepository reembolsoRepository;

    @Override
    public Reembolso saveReembolso(Reembolso reembolso) {
        return reembolsoRepository.save(reembolso);
    }
    
}
