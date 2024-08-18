import React from 'react';
import './App.css';
import Notificaciones from './notificaciones-administrador/Notificaciones';
import Notificaciones2 from './Notificaciones-jugador/Notificaciones2'
import Rol from './eleccion-rol/rol'


function App() {
  return (
    <>
      <Notificaciones />
      <Notificaciones2 />
      <Rol />
    </>
  );
}

export default App
