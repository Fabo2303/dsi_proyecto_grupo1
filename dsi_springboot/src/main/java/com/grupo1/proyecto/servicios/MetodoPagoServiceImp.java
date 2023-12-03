package com.grupo1.proyecto.servicios;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.MetodoPago;
import com.grupo1.proyecto.modelo.OrdenVenta;
import com.grupo1.proyecto.repositorios.MetodoPagoRepository;
import com.grupo1.proyecto.repositorios.OrdenVentaRepository;

@Service
public class MetodoPagoServiceImp implements MetodoPagoService{

    @Autowired
    private MetodoPagoRepository metodoPagoRepository;
    @Autowired
    private OrdenVentaRepository ordenVentaRepository;

    @Override
    public MetodoPago saveMetodoPago(MetodoPago metodoPago) {
        return metodoPagoRepository.save(metodoPago);
    }

    @Override
    public List<MetodoPago> selectMetodoPagoByCliente(Long cliente) {
        List<MetodoPago> metodos = new ArrayList<>();
        List<OrdenVenta> ordenes = ordenVentaRepository.findByCliente(cliente);
        for(OrdenVenta i : ordenes){
            Long idMetodo = i.getMetodoPago();
            MetodoPago metodo = selectById(idMetodo);
            if(!metodos.contains(metodo)){
                metodos.add(metodo);
            }
        }
        return metodos;
    }

    @Override
    public MetodoPago selectById(Long metodo) {
        return metodoPagoRepository.findById(metodo).orElse(null);
    }

    @Override
    public MetodoPago selectByNumero(String numero) {
        return metodoPagoRepository.findByNumero(numero);
    }
}
