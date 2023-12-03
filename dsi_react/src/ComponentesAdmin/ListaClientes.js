import React, { useState, useEffect } from "react";
import './ListaClientes.css';

const ListaClientes = ({ mostrarInicio }) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/cliente/select")
            .then(response => response.json())
            .then(data => {
                setClientes(data);
                console.log(data)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={mostrarInicio ? 'producto-contenedor' : 'ocultar'}>
            <div className='productos-compra'>
                <div className='parte1'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Usuario</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(item => (
                                <tr key={item.idCliente}>
                                    <td>{item.idCliente}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.nombreUsuario}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.telefono}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ListaClientes;