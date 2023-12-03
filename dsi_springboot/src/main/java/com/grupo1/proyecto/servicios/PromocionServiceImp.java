package com.grupo1.proyecto.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.Promocion;
import com.grupo1.proyecto.repositorios.PromocionRepository;

@Service
public class PromocionServiceImp implements PromocionService{

    @Autowired
    private PromocionRepository promocionRepository;

    @Override
    public Promocion savePromocion(Promocion promocion) {
        return promocionRepository.save(promocion);
    }
    
}
