import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';
import Footer from './components/Footer';
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import TeamOverview from './pages/entrenador/TeamOverview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

import Codigo from './pages/entrenador/landing-page/Codigo'
import Contrasena from './pages/entrenador/landing-page/Contrasena'
import ChangePassword from './components/regist-inisesion-input/ChangePassword'

function App() {
  return (
    // <Router>
    //   <div className="w-screen">
    //     <Header />
    //     <Routes>
    //       <Route path='/login' element={<Login />} />
    //     </Routes>
    //     <MainContent />
    //     <Footer />
    //   </div>
    // </Router>

    <div className='w-screen'>
      <DashboardTrainer />
      <TeamOverview />
    </div>
  );
    // <div className='w-full'>
    //   <Codigo />
    //   <Contrasena />
    //   <ChangePassword />
    // </div>
  
}

export default App;