import React, { useState } from 'react'
import Menu from './ComponentesUsuario/Menu'
import Contenido from './ComponentesUsuario/Contenido'
import MenuA from './ComponentesAdmin/MenuA'
import ContenidoA from './ComponentesAdmin/ContenidoA'
import './DashBoard.css'

const DashBoard = ({ cliente, indicador }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [vista, setVista] = useState('');

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const toggleVista = (value) => {
        setVista(value);
    }

    const appClass = collapsed ? 'app collapsed' : 'app';

    return (
        <div>
            {indicador === 'administrador' ? ( // Verifica el valor de indicador
                <div className={appClass} name='admin'> {/* Dibuja para administrador */}
                    <aside className='aside'>
                        <MenuA toggleVista={toggleVista}></MenuA>
                    </aside>
                    <main className='main'>
                        <ContenidoA toggleCollapsed={toggleCollapsed} cliente={cliente} vista={vista}></ContenidoA>
                    </main>
                </div>
            ) : (
                <div className={appClass}> {/* Dibuja para cliente */}
                    <aside className='aside'>
                        <Menu toggleVista={toggleVista}></Menu>
                    </aside>
                    <main className='main'>
                        <Contenido toggleCollapsed={toggleCollapsed} cliente={cliente} vista={vista}></Contenido>
                    </main>
                </div>
            )}
        </div>
    );
}

export default DashBoard;