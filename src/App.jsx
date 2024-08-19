import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import TeamOverview from './pages/entrenador/TeamOverview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EleccionRol from './pages/EleccionRol';

import Codigo from './pages/Codigo'
import ContrasenaRecover from './pages/ContrasenaRecover'
import ContrasenaRecover2 from './pages/ContrasenaRecover2'
import ChangePassword from './components/regist-inisesion-input/ChangePassword'


function App() {
  return (
    <Router>
      <div className="w-screen">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register/*' element={<SignUp />} />
          <Route path='/recoverPass/*' element={<ContrasenaRecover />} />
          <Route path='/recoverPass2/*' element={<ContrasenaRecover2 />} />
          <Route path='/changePass/*' element={<ChangePassword />} />
          <Route path='/eleccionRol/*' element={<EleccionRol />} />
          <Route path='/dashboardTrainer' element={<DashboardTrainer />} />
        </Routes>
      </div>
    </Router>

    // <div className='w-screen'>
    //   {/* <DashboardTrainer />
    //   <TeamOverview /> */}

    //   <Login />
    // </div>
  );
    // <div className='w-full'>
    //   <Codigo />
    //   <Contrasena />
    //   <ChangePassword />
    // </div>
  
}

export default App;