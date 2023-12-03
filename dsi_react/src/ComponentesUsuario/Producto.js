import React, { useEffect, useState } from 'react'
import './Producto.css'

const Producto = ({ mostrarInicio, handleAddProducto, handleRemoveProducto }) => {
    const [productos, setProductos] = useState([]);
    const [contadores, setContadores] = useState([]);
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/producto/all")
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                initContadores(data);
            })
            .catch(error => console.error(error))
    }, []);

    function initContadores(data) {
        const maxId = Math.max(...data.map(item => item.idProducto), 0);
        let contador = Array(maxId + 1).fill(0);
        let stock = Array(maxId).fill(0);
        data.map(item => {
            stock[item.idProducto] = item.unidadMedida;
        })
        setContadores(contador);
        setStock(stock);
    }

    function manejoClick(producto, indicador) {
        alterarContador(producto, indicador);
    }

    function addProduct(producto) {
        handleAddProducto(producto);
    }

    function removeProduct(producto){
        handleRemoveProducto(producto);
    }

    function alterarContador(producto, indicador) {
        const nuevosContadores = [...contadores];
        const id = producto.idProducto;
        nuevosContadores[id]+= indicador;
        if ((stock[id] >= nuevosContadores[id] && indicador === 1) || (nuevosContadores[id] >= 0 && indicador === -1)) {
            setContadores(nuevosContadores);
            if(indicador === 1)
                addProduct(producto);
            else
                removeProduct(id);
        }
    }

    return (
        <div className={mostrarInicio ? 'producto-contenedor' : 'ocultar'}>
            {productos.filter(producto => producto.eliminado === false).map(producto => (
                <div key={producto.idProducto}>
                    <div className='card' onClick={() => manejoClick(producto, 1)} onAuxClick={() => manejoClick(producto, -1)}>
                        <div className='face front'>
                            <img src={producto.imagen} alt={producto.nombre}></img>
                            <h3>{producto.nombre}</h3>
                            <p className='contador'>
                                {contadores[producto.idProducto]}
                            </p>
                            <div className={producto.estado ? 'disponible' : 'agotado'}>
                                AGOTADO
                            </div>
                        </div>
                        <div className='face back'>
                            <h3>{producto.nombre}</h3>
                            <p>Precio: {producto.precio}</p>
                            <p>Promocion: {producto.promocion}</p>
                            <p>Marca: {producto.marca}</p>
                            <p className='contador'>
                                {contadores[producto.idProducto]}
                            </p>
                            <div className={producto.estado ? 'disponible' : 'agotado'}>
                                AGOTADO
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Producto;