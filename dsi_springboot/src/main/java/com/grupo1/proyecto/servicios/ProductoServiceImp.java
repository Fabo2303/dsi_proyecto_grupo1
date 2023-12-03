package com.grupo1.proyecto.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.proyecto.modelo.Producto;
import com.grupo1.proyecto.repositorios.ProductoRepository;

@Service
public class ProductoServiceImp implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public List<Producto> getAllProducts() {
        return productoRepository.findAll();
    }

    @Override
    public Producto updateStock(Long idProducto, int cantidad) {
        Producto producto = productoRepository.findById(idProducto).orElse(null);
        if (producto != null) {
            int currentStock = producto.getUnidadMedida();
            if (currentStock >= cantidad) {
                int newStock = currentStock - cantidad;
                producto.setUnidadMedida(newStock);
                if (newStock == 0)
                    producto.setEstado(false);
                productoRepository.save(producto);
            }
        }
        return producto;
        // Funciona para disminuir el producto, falta hacer las medidas para restock
    }

    @Override
    public Producto eliminarProducto(Long idProducto, boolean eliminado) {
        Producto producto = productoRepository.findById(idProducto).orElse(null);
        producto.setEliminado(eliminado);
        productoRepository.save(producto);
        return producto;
    }

}
