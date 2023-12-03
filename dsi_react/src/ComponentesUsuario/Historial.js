import React, { useState, useEffect } from "react";
import './Historial.css';

const Historial = ({ mostrarCompras, cliente }) => {
    const [ordenVenta, setordenVenta] = useState([]);
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/orden-venta/select?idCliente=${cliente.idCliente}`)
            .then(response => response.json())
            .then(data => {
                setordenVenta(data);
            })
            .catch(error => console.error(error));
    }, [cliente.idCliente]);

    useEffect(() => {
        fetch("http://localhost:8080/producto/all")
            .then(response => response.json())
            .then(data => {
                setproducts(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={mostrarCompras ? 'producto-contenedor' : 'ocultar'}>
            <div className='productos-compra'>
                <div className='parte1'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tarjeta</th>
                                <th>Precio</th>
                                <th>Unidades</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordenVenta.length > 0 && products.length > 0 ? (
                                // Verifica que los arrays estén cargados antes de mapearlos
                                ordenVenta.map(item => {
                                    const productoCorrespondiente = products.find(producto => producto.idProducto === item.producto);
                                    return (
                                        <tr key={item.idOrdenVenta}>
                                            <td>{cliente.nombre}</td>
                                            <td>{item.metodoPago}</td>
                                            <td>{item.monto}</td>
                                            {productoCorrespondiente ? (
                                                <>
                                                    <td>{Math.round(item.monto / productoCorrespondiente.precio)}</td>
                                                    <td>{productoCorrespondiente.nombre}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>...</td>
                                                    <td>Producto no encontrado</td>
                                                </>
                                            )}
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5">Cargando datos...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Historial;