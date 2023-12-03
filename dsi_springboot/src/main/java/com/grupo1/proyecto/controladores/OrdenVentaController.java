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

import com.grupo1.proyecto.modelo.OrdenVenta;
import com.grupo1.proyecto.servicios.OrdenVentaService;

@RestController
@CrossOrigin
@RequestMapping("/orden-venta")
public class OrdenVentaController {
    @Autowired
    private OrdenVentaService ordenVentaService;

    @PostMapping("/add")
    public OrdenVenta addOrdenVenta(@RequestBody OrdenVenta ordenVenta){
        return ordenVentaService.saveOrdenVenta(ordenVenta);
    }

    @GetMapping("/select")
    public List<OrdenVenta> selectOrdenVentaByCliente(@RequestParam Long idCliente){
        return ordenVentaService.selectByCliente(idCliente);
    }

    @GetMapping("/all")
    public List<OrdenVenta> selectAll(){
        return ordenVentaService.selectAll();
    }
}
