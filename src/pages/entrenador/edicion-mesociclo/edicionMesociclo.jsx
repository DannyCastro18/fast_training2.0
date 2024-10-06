import Mesociclo from '../../../components/tabla-mesociclo/mesociclo';
import NavbarEdicion from '../../../components/navbar-edicion';
import Logo from '../../../components/Logo';

export default function EdicionMesociclo(){
    return(
        <>
        <div className='px-32 py-4'>
        <Logo/>
        </div>
        <NavbarEdicion/>
        <Mesociclo/>
        </>
    )
}