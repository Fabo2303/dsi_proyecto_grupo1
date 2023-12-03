package com.grupo1.proyecto.servicios;

import java.util.List;

import com.grupo1.proyecto.modelo.OrdenVenta;

public interface OrdenVentaService {
    public OrdenVenta saveOrdenVenta(OrdenVenta ordenVenta);
    public List<OrdenVenta> selectByCliente(Long idCliente);
    public List<OrdenVenta> selectAll();
}
