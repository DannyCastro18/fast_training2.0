import Info from '../../../components/perfilJugador/cuadro5'
import Configuracion from '../../../components/configuracionJugador/cuadro6'
import NavbarPlayer from '../../../components/NavbarJugador'
import Logo from '../../../components/Logo'

export default function ConfiguracionPlayer(){
    return <>
    <div className='ml-24 mt-2.5 '>
        <Logo/>
    </div>
    
    <div className='ml-28 w-11/12 h-11/12'>
        <Info/>
        <hr />
        <Configuracion />    
    </div>
        <NavbarPlayer/>
        
    </>
}