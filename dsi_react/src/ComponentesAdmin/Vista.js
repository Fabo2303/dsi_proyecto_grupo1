import React, { useEffect, useState } from 'react'
import ListaClientes from './ListaClientes';
import ListaProductos from './ListaProductos';
import ListaEnvios from './ListaEnvios';

const Vista = ({ vista }) => {
    const [mostrarInicio, setMostrarInicio] = useState(true);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [mostrarCompras, setMostrarCompras] = useState(false);

    useEffect(() => {
        mostrarContenido(vista);
    }, [vista])

    const mostrarContenido = (seccion) => {
        setMostrarInicio(seccion === 'user');
        setMostrarCompras(seccion === 'file');
        setMostrarCarrito(seccion === 'store');
    };

    return (
        <div className='vista-contenedor'>
            <ListaClientes mostrarInicio={mostrarInicio}></ListaClientes>
            <ListaProductos mostrarCarrito={mostrarCarrito}></ListaProductos>
            <ListaEnvios mostrarCompras={mostrarCompras}></ListaEnvios>
        </div>
    );
}

export default Vista;