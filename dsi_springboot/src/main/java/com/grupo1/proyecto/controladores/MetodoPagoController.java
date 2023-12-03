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

import com.grupo1.proyecto.modelo.MetodoPago;
import com.grupo1.proyecto.servicios.MetodoPagoService;

@RestController
@CrossOrigin
@RequestMapping("/metodo-pago")
public class MetodoPagoController {
    @Autowired
    private MetodoPagoService metodoPagoService;

    @PostMapping("/add")
    public String addMetodoPago(@RequestBody MetodoPago metodoPago){
        metodoPagoService.saveMetodoPago(metodoPago);
        return "Metodo de pago registrado";
    }

    @GetMapping("/select")
    public List<MetodoPago> selectMetodoPagoByCliente(@RequestParam Long idCliente){
        return metodoPagoService.selectMetodoPagoByCliente(idCliente);
    }

    @GetMapping("/select/numero")
    public MetodoPago selecMetodoPagoByNumero(@RequestParam String numero){
        return metodoPagoService.selectByNumero(numero);
    }
}
