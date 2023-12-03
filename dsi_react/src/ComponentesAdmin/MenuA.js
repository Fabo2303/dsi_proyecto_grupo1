import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet, faStore, faFile } from '@fortawesome/free-solid-svg-icons';
import './MenuA.css'

const MenuA = ({ toggleVista }) => {

    const setView = (value) => {
        toggleVista(value);
    }

    return (
        <div className="contenedor">
            <img src='https://hablemosdebronce.com/wp-content/uploads/2019/12/grupo-1-icono-azul.png' width='130px' alt='logo'></img>
            <FontAwesomeIcon icon={faUser} className="icon" onClick={() => setView('user')} />
            <FontAwesomeIcon icon={faStore} className="icon" onClick={() => setView('store')} />
            <FontAwesomeIcon icon={faFile} className="icon" onClick={() => setView('file')} />
        </div>
    );
}

export default MenuA;
