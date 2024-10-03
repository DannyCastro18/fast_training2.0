import Info from '../../../components/perfilEntrenador/cuadro3'
import Configuracion from '../../../components/configuracionEntrenador/cuadro4'
import NavbarTrainer from '../../../components/NavbarTrainer'
import Logo from '../../../components/Logo'

export default function ConfiguracionTrainer(){
    return <>
    <div className='px-32 py-4'>
        <Logo/>
    </div>
    
    <div className='ml-28 w-11/12 h-11/12'>
        <Info/>
        <hr className='mx-8' />
        <Configuracion />    
    </div>
        <NavbarTrainer/>
        
    </>
}