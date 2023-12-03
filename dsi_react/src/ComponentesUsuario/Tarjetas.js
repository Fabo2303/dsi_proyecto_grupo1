import React, { useEffect, useState } from 'react';
import './Tarjetas.css'

const Tarjetas = ({ mostrarPagos, cliente }) => {
    const [tarjetas, setTarjetas] = useState([]);
    console.log(cliente);

    const fetchData = () => {
        fetch(`http://localhost:8080/metodo-pago/select?idCliente=${cliente.idCliente}`)
            .then(response => response.json())
            .then(data => setTarjetas(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        if (mostrarPagos && cliente.idCliente) {
            fetchData();
        }
    }, [mostrarPagos, cliente.idCliente]);


    const [nuevaTarjeta, setNuevaTarjeta] = useState({
        codigoSeguridad: '',
        nombre: '',
        numero: '',
        fecha: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNuevaTarjeta({ ...nuevaTarjeta, [name]: value });
    };

    const handleAddCard = () => {
        fetch('http://localhost:8080/metodo-pago/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaTarjeta)
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        fetchData();
    };

    return (
        <div className={mostrarPagos ? 'tarjeta-contenedor' : 'oculto'}>
            <div className='pay-container'>
                {tarjetas.map(tarjeta => (
                    <div key={tarjeta.idMetodoPago}>
                        <div className='card'>
                            <div className='face front'>
                                <img src="./images/Card2.jpg" alt={tarjeta.nombre}></img>
                                <h3 className='name'>{cliente.nombre}</h3>
                                <h3 className='numero'>{tarjeta.numero}</h3>
                                <h3 className='fecha'>{tarjeta.fecha}</h3>
                            </div>
                            <div className='face back'>
                                <img src="./images/Card3.jpg" alt={tarjeta.nombre}></img>
                                <h3 className='cv'>{tarjeta.codigoSeguridad}</h3>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='anyadirCard'>
                    <div className='input-label'>
                        <label for="numero">Número</label>
                        <input type="text" id="numero" name="numero" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="codigoSeguridad">Código</label>
                        <input type="text" id="codigoSeguridad" name="codigoSeguridad" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="fecha">Fecha</label>
                        <input type="text" id="fecha" name="fecha" onChange={handleInputChange} />
                    </div>
                    <button onClick={handleAddCard}>Añadir Tarjeta</button>
                </div>
            </div>
        </div>
    );
}

export default Tarjetas;