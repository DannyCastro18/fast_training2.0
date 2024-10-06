import './App.css';
import LandingPage from './pages/LandingPage';
import Exp from './components/Exp';

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
import EleccionRol from './components/EleccionRol'
import DeleteUser from './pages/admin/deleteUser';
import Quejas from './pages/jugador/QuejasyAyudas'
// import Perfil from './components/Perfil/cuadro1'


// import Configuracion from './components/configuración/cuadro2'

// Trainer imports
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import NotificacionesAdmin from './components/NotificacionesAdmin';
import CreacionEquipo from './pages/entrenador/CreacionEquipo';
import DocumentsTrainer from './pages/entrenador/DocumentsTrainer';
import EditMesocycle from './pages/entrenador/EditMesocycle';
import TrainerHelp from './pages/entrenador/TrainerHelp';
import ConfigurationTrainer from './pages/entrenador/configTrainer';

// Admin imports
import AdminDashboard from './pages/admin/AdminDashboard';
import ConfiguracionAdmin from './pages/admin/configuracion/configuracionAdmin';
import NavbarAdmin from './components/NavbarAdmin';
import Logo from './components/Logo';
import Restriccion from './pages/admin/acceso-restringido/restriccion';
import NavbarEdicion from './components/navbar-edicion';
import PerfilTrainer from './components/perfilEntrenador/cuadro3';
import ConfigurationPlayer from './pages/jugador/configuracion/confiplayer';
import TablaMesociclo from './components/tabla-mesociclo/mesociclo';
import EdicionMesociclo from './pages/entrenador/edicion-mesociclo/edicionMesociclo';


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br m-0 from-sky-200 to-white-200 w-screen h-screen">
        <Routes>
          <Route path='/exp' element={<Exp />}></Route>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register/*' element={<SignUp />} />
          <Route path='/recoverPass/*' element={<ContrasenaRecover />} />
          <Route path='/recoverPass2/*' element={<ContrasenaRecover2 />} />
          <Route path='/changePass/*' element={<ChangePassword />} />
          <Route path='/dashboardJugador' element={<DashboardJugador />}></Route>
          <Route path='/teamOverview' element={<TeamOverview />} />
          <Route path='/jugador/pqrs' element={<Quejas />}></Route>
          <Route path='/restriccion' element={<Restriccion/>}></Route>
          <Route path='/navbarEdicion' element={<NavbarEdicion/>}></Route>
          {/* <Route path='/notification-jugador*' element={<Notificaciones2 />}></Route> */}
          {/* Rutas Jugador */}
          {/* <Route path='/perfil/user' element={<Perfil/>}></Route>
          <Route path='/configuracion/user' element={<Configuracion/>}></Route> */}


          {/* Rutas Entrenador */}
          <Route path='/eleccionRol/*' element={<EleccionRol />} />
          <Route path='/trainer/home' element={<DashboardTrainer />} />
          <Route path='/trainer/config' element={<ConfigurationTrainer/>}></Route>
          <Route path='/trainer/changePass'></Route>
          <Route path='/trainer/newTeam' element={<CreacionEquipo />}></Route>
          <Route path='/trainer/notifications' element={<NotificacionesAdmin/>}></Route>
          <Route path='/trainer/team' element={<TeamOverview/>}></Route>
          <Route path='/trainer/documents' element={<DocumentsTrainer/>}></Route>
          <Route path='/trainer/help' element={<TrainerHelp />}></Route>
          <Route path='/trainer/editMesocycle' element={<EditMesocycle/>}></Route>

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