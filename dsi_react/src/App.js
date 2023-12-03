import React, { useState } from 'react';
import DashBoard from './DashBoard.js';
import Sesion from './Sesion.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cliente, setCliente] = useState('');
  const [indicador, setIndicador] = useState('');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  const bloquearClicDerecho = (e) => {
    e.preventDefault();
  };

  return (
    <div onContextMenu={bloquearClicDerecho}>
      <div className='inicio-sesion' style={{ display: isLoggedIn ? 'none' : 'block' }}>
        <Sesion onLoginSuccess={handleLoginSuccess} setCliente={setCliente} setIndicador={setIndicador}/>
      </div>
      <div className='dashboard' style={{ display: isLoggedIn ? 'grid' : 'none' }}>
        <DashBoard cliente={cliente} indicador={indicador} />
      </div>
    </div>
  );
}

export default App;
