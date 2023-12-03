package com.grupo1.proyecto.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grupo1.proyecto.modelo.Producto;
import com.grupo1.proyecto.servicios.ProductoService;

@RestController
@CrossOrigin
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @PostMapping("/add")
    public String addProduct(@RequestBody Producto producto){
        productoService.saveProducto(producto);
        return "Guardado con exito";
    }

    @GetMapping("/all")
    public List<Producto> getAllProducts() {
        return productoService.getAllProducts();
    }

    @PutMapping("/update")
    public Producto updateStock(@RequestParam Long idProducto, @RequestParam int cantidad){
        return productoService.updateStock(idProducto, cantidad);
    }

    @PutMapping("/update/eliminado")
    public Producto eliminarProducto(@RequestParam Long idProducto,@RequestParam boolean eliminado){
        return productoService.eliminarProducto(idProducto, eliminado);
    }
}
