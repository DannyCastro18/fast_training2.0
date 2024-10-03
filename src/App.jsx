import './App.css';
import LandingPage from './pages/LandingPage';
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import DashboardJugador from './pages/DashboardJugador';
import TeamOverview from './pages/entrenador/TeamOverview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

// import Codigo from './pages/Codigo'
import ContrasenaRecover from './pages/ContrasenaRecover'
import ContrasenaRecover2 from './pages/ContrasenaRecover2'
import ChangePassword from './components/regist-inisesion-input/ChangePassword'
// import Notificaciones2 from './components/NotificacionesJugador'
import Rol from './components/Rol'
import DeleteUser from './pages/admin/deleteUser';
import Quejas from './pages/QuejasyAyudas'
import Perfil from './components/Perfiladministrador/cuadro1'


import Configuracion from './components/configuraciónAdministrador/cuadro2'
// import Confi from './pages/admin/configuracion/confi'
import ConfiguracionAdmin from './pages/admin/configuracion/configuracionAdmin';
import NavbarAdmin from './components/NavbarAdmin';
import Logo from './components/Logo';
import Restriccion from './pages/admin/acceso-restringido/restriccion';
import NavbarEdicion from './components/navbar-edicion';
import ConfiguracionTrainer from './pages/entrenador/configuracion/confiTrainer';
import PerfilTrainer from './components/perfilEntrenador/cuadro3';
import ConfiguracionPlayer from './pages/jugador/configuracion/confiplayer';


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br m-0 from-sky-200 to-white-200">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register/*' element={<SignUp />} />
          <Route path='/recoverPass/*' element={<ContrasenaRecover />} />
          <Route path='/recoverPass2/*' element={<ContrasenaRecover2 />} />
          <Route path='/changePass/*' element={<ChangePassword />} />
          <Route path='/dashboardJugador' element={<DashboardJugador />}></Route>
          <Route path='/teamOverview' element={<TeamOverview />} />
          <Route path='/jugador/pqrs' element={<Quejas />}></Route>
          {/* <Route path='/notification-jugador*' element={<Notificaciones2 />}></Route> */}
          {/* Rutas Jugador */}
          <Route path='/perfil/user' element={<Perfil/>}></Route>
          <Route path='/configuracion/user' element={<Configuracion/>}></Route>
          <Route path='/jugador/configuracion' element={<ConfiguracionPlayer />} />
          {/* Rutas Entrenador */}
          <Route path='/eleccionRol/*' element={<Rol />} />
          <Route path='/trainer/home' element={<DashboardTrainer />} />
          <Route path='/trainer/configuracion' element={<ConfiguracionTrainer />} />
          {/* <Route path='/trainer/configuracion' element={<TrainerConfiguration/>}></Route>
          <Route path='/trainer/changePass'></Route>
          <Route path='/trainer/newTeam' element={createTeam}></Route>
          <Route path='/trainer/notifications' element={<Notifications/>}></Route>
          <Route path='/trainer/team' element={<TeamOverview/>}></Route>
          <Route path='/trainer/documents' element={<Documents/>}></Route>
          <Route path='/trainer/pqrs' element={<Quejas/>}></Route>
          <Route path='/trainer/editMesocycle' element={<EditMesocycle/>}></Route> */}

          {/* Rutas de admin */}
          {/* <Route path='/admin/home' element={<AdminDashboard />}></Route> */}
          <Route path='/admin/deleteUser/*' element={<DeleteUser />}></Route>
          <Route path='/admin/configuration' element={<ConfiguracionAdmin/>}></Route>
          <Route path='/admin/deleteUser' element={<DeleteUser />}></Route>
          {/* <Route path='/admin/incidents' element={<AdminIncidents />}></Route>
          <Route path='/admin/incidents/info' element={<IncidentInfo />}></Route>
          <Route path='/admin/archivos' element={<AdminFiles />}></Route> */}
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