import React, { useState } from 'react';
import './Sesion.css'

const Sesion = ({ onLoginSuccess, setCliente, setIndicador}) => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [inicio, setInicio] = useState(true);
    const [crear, setCrear] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const [newCliente, setNewCliente] = useState({
        apellido: '',
        nombre: '',
        correo: '',
        contrasena: '',
        nombreUsuario: '',
        telefono: '',
        direccion: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCliente({ ...newCliente, [name]: value });
    };

    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
    }

    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
    }

    const handleAddCard = () => {
        fetch(`http://localhost:8080/${isAdmin ? 'administrador' : 'cliente'}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCliente)
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error));
        console.log(newCliente);
    };

    const handleInicioSesion = () => {
        fetch(`http://localhost:8080/${isAdmin ? 'administrador' : 'cliente'}/select/find?nombreUsuario=${usuario}&contrasena=${contrasena}`)
            .then(response => response.json())
            .then(data => {
                setCliente(data);
                setIndicador(isAdmin ? 'administrador' : 'cliente');
                onLoginSuccess();
            })
            .catch(error => console.error(error));
    };

    const changeState = (value) => {
        if (value === 'i') {
            setCrear(true);
            setInicio(false);
        } else {
            setCrear(false);
            setInicio(true);
        }
    }

    const adminState = () => {
        setIsAdmin(!isAdmin);
    }

    return (
        <div className='login-container'>
            <div className='login-card'>
                <div className={inicio ? 'face inicio' : 'oculto'}>
                    <h2>{isAdmin ? 'Bienvenido Administrador' : 'Iniciar Sesion'}</h2>
                    <div className='input-label'>
                        <label for="nombreUsuario">Usuario</label>
                        <input type="text" id="nombreUsuario" name="nombreUsuario" onChange={handleUsuarioChange} />
                    </div>
                    <div className='input-label'>
                        <label for="contrasena">Contraseña</label>
                        <input type="password" id="contrasena" name="contrasena" onChange={handleContrasenaChange} />
                    </div>
                    <div className='footer'>
                        <button className='ses' onClick={handleInicioSesion}>Iniciar Sesión</button>
                        <div className='activador-crear-cuenta'>
                            <p>¿Desea crear una&nbsp;</p>
                            <p className='activar' onClick={() => changeState('i')}> cuenta nueva</p>
                            <p>?</p>
                        </div>
                        <button className='admin' onClick={() => adminState()}>{isAdmin ? 'Cliente' : 'Administrador'}</button>
                    </div>
                </div>
                <div className={crear ? 'face crear' : 'oculto'}>
                    <h2>Crear cuenta</h2>
                    <div className='input-label'>
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="apellido">Apellido</label>
                        <input type="text" id="apellido" name="apellido" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="correo">Correo</label>
                        <input type="text" id="correo" name="correo" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="telefono">Telefono</label>
                        <input type="text" id="telefono" name="telefono" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="direccion">Direccion</label>
                        <input type="text" id="direccion" name="direccion" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="nombreUsuario">Usuario</label>
                        <input type="text" id="nombreUsuario" name="nombreUsuario" onChange={handleInputChange} />
                    </div>
                    <div className='input-label'>
                        <label for="contrasena">Contraseña</label>
                        <input type="password" id="contrasena" name="contrasena" onChange={handleInputChange} />
                    </div>
                    <button onClick={handleAddCard}>Crear Cuenta</button>
                    <div className='activador-crear-cuenta'>
                        <p>¿Ya tiene una cuenta?&nbsp;</p>
                        <p className='activar' onClick={() => changeState('p')}> Inicie sesión</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sesion;