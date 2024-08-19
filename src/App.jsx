import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import DashboardJugador from './pages/DashboardJugador';
import TeamOverview from './pages/entrenador/TeamOverview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Codigo from './pages/Codigo'
import ContrasenaRecover from './pages/ContrasenaRecover'
import ContrasenaRecover2 from './pages/ContrasenaRecover2'
import ChangePassword from './components/regist-inisesion-input/ChangePassword'
// import Notificaciones2 from './components/NotificacionesJugador'
import Rol from './components/Rol'
import DeleteUser from './pages/admin/deleteUser';
import Quejas from './pages/QuejasyAyudas'


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-sky-200 to-orange-200">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register/*' element={<SignUp />} />
          <Route path='/recoverPass/*' element={<ContrasenaRecover />} />
          <Route path='/recoverPass2/*' element={<ContrasenaRecover2 />} />
          <Route path='/changePass/*' element={<ChangePassword />} />
          <Route path='/eleccionRol/*' element={<Rol />} />
          <Route path='/dashboardTrainer' element={<DashboardTrainer />} />
          <Route path='/dashboardJugador' element={<DashboardJugador />}></Route>
          <Route path='/teamOverview' element={<TeamOverview />} />
          <Route path='/jugador/pqrs' element={<Quejas />}></Route>
          {/* <Route path='/notification-jugador*' element={<Notificaciones2 />}></Route> */}
          <Route path='/admin/deleteUser/*' element={<DeleteUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
    // <div className='w-full'>
    //   <Codigo />
    //   <Contrasena />
    //   <ChangePassword />
    // </div>
  
}

export default App;