import React, { useEffect, useState } from "react"
import './Compra.css'
import Swal from 'sweetalert2';

const Compra = ({ mostrarCarrito, listasProductos, cliente }) => {
    const [unicos, setUnicos] = useState([]);
    const [conteo, setConteo] = useState({});
    const [fechaActual, setFechaActual] = useState(new Date());
    const [newOrden, setNewOrden] = useState([]);

    useEffect(() => {
        const distincts = () => {
            let unicosTemp = [];
            let conteoTemp = {};

            for (let i = 0; i < listasProductos.length; i++) {
                let elemento = listasProductos[i];
                let idProducto = elemento.idProducto;

                if (!conteoTemp[idProducto]) {
                    conteoTemp[idProducto] = 1;
                    unicosTemp.push(elemento);
                } else {
                    if (conteoTemp[idProducto] === 1) {
                    }
                    conteoTemp[idProducto]++;
                }
            }
            setUnicos(unicosTemp);
            setConteo(conteoTemp);
        };

        distincts();
    }, [listasProductos]);

    useEffect(() => {
        const intervalo = setInterval(() => {
            // Actualiza la fecha cada segundo
            setFechaActual(new Date());
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(intervalo);
    }, []);

    const handleAddOrdenVenta = () => {
        let dataJSON = [];
        Promise.all(
            newOrden.map(orden => {
                return fetch('http://localhost:8080/orden-venta/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orden)
                })
                    .then(response => response.text())
                    .then(data => {
                        dataJSON.push(JSON.parse(data));
                        handleUpdateStock();
                    })
                    .catch(error => console.error(error));
            })
        )
            .then(() => {
                console.log('Todas las órdenes han sido enviadas');
                handleAddEnvio(dataJSON);
            })
            .catch(error => console.error(error));
    }

    const handleAddEnvio = (array) => {
        Promise.all(
            array.map(orden => {
                const envio = {
                    transportista: "Jeremy Yari",
                    estado: false,
                    ordenVenta: orden.idOrdenVenta,
                    costoEnvio: 60.00
                };
                return fetch('http://localhost:8080/envio/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(envio)
                })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => console.error(error));
            })
        )
            .then(() => {
                Swal.fire({
                    title: "¡Compra Realizada con éxito!",
                    html: "Gracias Por realizar su compra",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                });
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        const nuevaOrden = unicos.map(producto => ({
            cliente: cliente.idCliente,
            producto: producto.idProducto,
            metodoPago: 1,
            monto: producto.precio * conteo[producto.idProducto]
        }));

        setNewOrden(nuevaOrden);
    }, [unicos, conteo, cliente]);

    const handleCambioMetodoPago = (event) => {
        const nuevoValorTarjeta = event.target.value;
        fetch(`http://localhost:8080/metodo-pago/select/numero?numero=${nuevoValorTarjeta}`)
            .then(response => response.json())
            .then(data => {
                const nuevosProductos = newOrden.map(producto => ({
                    ...producto,
                    metodoPago: data.idMetodoPago
                }));
                setNewOrden(nuevosProductos);
            })
            .catch(error => console.error(error));
    };

    function handleUpdateStock() {
        Promise.all(
            unicos.map(item => {
                let id = item.idProducto;
                return fetch(`http://localhost:8080/producto/update?idProducto=${id}&cantidad=${conteo[id]}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => console.error(error));
            })
        )
            .then(() => {})
            .catch(error => console.error(error));
    }

    return (
        <div className={mostrarCarrito ? 'productos-compra' : 'oculto'}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Unidades</th>
                    </tr>
                </thead>
                <tbody>
                    {unicos.map(item => (
                        <tr key={item.idProducto}>
                            <td>{item.nombre}</td>
                            <td>{item.marca}</td>
                            <td>{item.precio}</td>
                            <td><img src={item.imagen} alt={item.nombre} width='150px' height='150px' /></td>
                            <td>{conteo[item.idProducto]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Ingresar Numero de Tarjeta</p>
            <input type="text" id="contrasena" name="contrasena" onChange={handleCambioMetodoPago} />
            <button onClick={handleAddOrdenVenta}>Realizar Compra</button>
        </div>
    );
};

export default Compra;