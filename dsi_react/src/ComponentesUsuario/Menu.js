import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCreditCard, faCartShopping, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import './Menu.css'

const Menu = ({toggleVista}) => {

    const setView = (value) => {
        toggleVista(value);
    }

    return (
        <div className="contenedor">
            <img src='https://hablemosdebronce.com/wp-content/uploads/2019/12/grupo-1-icono-azul.png' width='130px' alt='logo'></img>
            <FontAwesomeIcon icon={faHouse} className="icon" onClick={() =>setView('home')}/>
            <FontAwesomeIcon icon={faCreditCard} className="icon" onClick={() =>setView('card')}/>
            <FontAwesomeIcon icon={faCartShopping} className="icon" onClick={() =>setView('shop')}/>
            <FontAwesomeIcon icon={faMoneyBillTransfer} className="icon" onClick={() =>setView('history')}/>
        </div>
    );
}

export default Menu;
