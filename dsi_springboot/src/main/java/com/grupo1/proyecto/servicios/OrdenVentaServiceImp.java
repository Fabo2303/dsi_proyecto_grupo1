package com.grupo1.proyecto.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.OrdenVenta;
import com.grupo1.proyecto.repositorios.OrdenVentaRepository;

@Service
public class OrdenVentaServiceImp implements OrdenVentaService{

    @Autowired
    private OrdenVentaRepository ordenVentaRepository;

    @Override
    public OrdenVenta saveOrdenVenta(OrdenVenta ordenVenta) {
        return ordenVentaRepository.save(ordenVenta);
    }

    @Override
    public List<OrdenVenta> selectByCliente(Long idCliente) {
        return ordenVentaRepository.findByCliente(idCliente);
    }

    @Override
    public List<OrdenVenta> selectAll() {
        return ordenVentaRepository.findAll();
    }
    
}
