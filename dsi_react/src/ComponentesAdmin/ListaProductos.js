import React, { useState, useEffect } from "react";
import './ListaProductos.css';

const ListaProductos = ({ mostrarCarrito }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        actualizar();
    }, []);

    const actualizar = () => {
        fetch("http://localhost:8080/producto/all")
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }

    const actuState = (id, value) => {
        return fetch(`http://localhost:8080/producto/update/eliminado?idProducto=${id}&eliminado=${value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.text())
            .then(data => {
                actualizar();
            })
            .catch(error => console.error(error));
    }

    const cambiarEstado = (id, value) => {
        actuState(id, value === 'eliminado');
    }

    return (
        <div className={mostrarCarrito ? 'producto-contenedor' : 'ocultar'}>
            <div className='productos-compra'>
                <div className='parte1'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Estado Stock</th>
                                <th>Estado</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(item => (
                                <tr key={item.idProducto}>
                                    <td>{item.idProducto}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.marca}</td>
                                    <td>{item.precio}</td>
                                    <td>{item.unidadMedida}</td>
                                    <td>{item.estado ? 'Disponible' : 'Agotado'}</td>
                                    <td>{item.eliminado ? 'Eliminado' : 'En linea'}</td>
                                    <td><img className="imgButton"  src={item.eliminado ? "./images/R.png" : "./images/R.jpg"} width='40px' onClick={() => cambiarEstado(item.idProducto, item.eliminado ? "restaurar" : "eliminado")}></img></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListaProductos;