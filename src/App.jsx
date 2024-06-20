import './App.css'
import Codigo from './pages/entrenador/landing-page/Codigo'
import Contrasena from './pages/entrenador/landing-page/Contrasena'
import ChangePassword from './components/regist-inisesion-input/ChangePassword'

function App() {
  return (
    <div className='w-full'>
      <Codigo />
      <Contrasena />
      <ChangePassword />
    </div>
  )
}

export default App
