package com.grupo1.proyecto.servicios;

import java.util.List;
import com.grupo1.proyecto.modelo.Producto;

public interface ProductoService {
    public Producto saveProducto(Producto producto);
    public List<Producto> getAllProducts();
    public Producto updateStock(Long idProducto, int cantidad);
    public Producto eliminarProducto(Long idProducto, boolean eliminado);
}
