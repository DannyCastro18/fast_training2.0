import Info from '../../components/perfilJugador/cuadro5'
import Configuracion from '../../components/configuracionJugador/cuadro6'
import NavbarPlayer from '../../components/Navbar/NavbarJugador'
import Logo from '../../components/Logo'

export default function ConfiguracionPlayer(){
    return <>
    <div className='px-32 py-4'>
        <Logo/>
    </div>
    
    <div className='ml-28 w-11/12 h-11/12'>
        <Info/>
        <hr className='mx-8' />
        <Configuracion />    
    </div>
        <NavbarPlayer/>
        
    </>
}