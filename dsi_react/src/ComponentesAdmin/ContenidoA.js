import React from 'react'
import './ContenidoA.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Vista from './Vista';

const ContenidoA = ({cliente, vista}) => {
    const handleClick = () => {
        const app = document.querySelector('.app');
        if (app) {
            app.classList.toggle('collapsed');
        }
    }

    return (
        <div className='main-contenedor'>
            <header className='main-contenedor-header'>
                <span onClick={handleClick} className='icon-menu'>&#9776;</span>
                <h3>DynamicSports</h3>
                <FontAwesomeIcon icon={faUser} />
            </header>
            <main className='main-contenedor-main'>
                <Vista cliente={cliente} vista={vista}></Vista>
            </main>
        </div>
    );
}

export default ContenidoA;