import Info from '../../../components/Perfiladministrador/cuadro1'
import Configuracion from '../../../components/configuraciónAdministrador/cuadro2'
import NavbarAdmin from '../../../components/NavbarAdmin'
import Logo from '../../../components/Logo'

export default function ConfiguracionTrainer(){
    return <>
    <div className='ml-24 mt-2.5 '>
        <Logo/>
    </div>
    
    <div className='ml-28 w-11/12 h-11/12'>
        <Info/>
        <hr />
        <Configuracion />    
    </div>
        <NavbarAdmin/>
    </>
}

