import React, { useEffect, useState } from 'react'
import Producto from './Producto';
import Tarjetas from './Tarjetas';
import Compra from './Compra';
import Historial from './Historial';

const Vista = ({ cliente, vista }) => {
    const [listasProductos, setListaProductos] = useState([]);
    const [mostrarInicio, setMostrarInicio] = useState(true);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [mostrarPagos, setMostrarPagos] = useState(false);
    const [mostrarCompras, setMostrarCompras] = useState(false);

    const handleAddProducto = (valor) => {
        setListaProductos(prevLista => [...prevLista, valor]);
    };

    const handleRemoveProducto = (idProducto) => {
        const index = listasProductos.findIndex(producto => producto.idProducto === idProducto);
    
        if (index !== -1) {
            const nuevolistasProductos = [...listasProductos];
            nuevolistasProductos.splice(index, 1); 
            setListaProductos(nuevolistasProductos);
        }
    };

    useEffect(() => {
        mostrarContenido(vista);
    }, [vista])

    const mostrarContenido = (seccion) => {
        setMostrarInicio(seccion === 'home');
        setMostrarPagos(seccion === 'card');
        setMostrarCompras(seccion === 'history');
        setMostrarCarrito(seccion === 'shop')
    };

    return (
        <div className='vista-contenedor'>
            <Producto mostrarInicio={mostrarInicio} handleAddProducto={handleAddProducto} handleRemoveProducto={handleRemoveProducto}></Producto>
            <Tarjetas mostrarPagos={mostrarPagos} cliente={cliente}></Tarjetas>
            <Compra mostrarCarrito={mostrarCarrito} listasProductos={listasProductos} cliente={cliente}></Compra>
            <Historial mostrarCompras={mostrarCompras} cliente={cliente}></Historial>
        </div>
    );
}

export default Vista;