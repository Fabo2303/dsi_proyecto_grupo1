package com.grupo1.proyecto.servicios;

import java.util.List;

import com.grupo1.proyecto.modelo.MetodoPago;

public interface MetodoPagoService {
    public MetodoPago saveMetodoPago(MetodoPago metodoPago);
    public List<MetodoPago> selectMetodoPagoByCliente(Long cliente);
    public MetodoPago selectById(Long metodo);
    public MetodoPago selectByNumero(String numero);
}
