import React, { useState, useEffect } from "react";
import './ListaEnvios.css';

const ListaEnvios = ({ mostrarCompras }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        actualizar();
    }, []);

    const actualizar = () => {
        fetch("http://localhost:8080/orden-venta/all")
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className={mostrarCompras ? 'producto-contenedor' : 'ocultar'}>
            <div className='productos-compra'>
                <div className='parte1'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cliente</th>
                                <th>Metodo Pago</th>
                                <th>Monto</th>
                                <th>Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(item => (
                                <tr key={item.idOrdenVenta}>
                                    <td>{item.idOrdenVenta}</td>
                                    <td>{item.cliente}</td>
                                    <td>{item.metodoPago}</td>
                                    <td>{item.monto}</td>
                                    <td>{item.producto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListaEnvios;