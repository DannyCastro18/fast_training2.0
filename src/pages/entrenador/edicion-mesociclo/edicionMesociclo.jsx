import { TablaMesociclo } from '../../../components/mesociclo/Mesociclo';
import NavbarEdicion from '../../../components/Navbar/navbar-edicion';
import Logo from '../../../components/Logo';

export default function EdicionMesociclo(){
    return(
        <>
        <div className='px-32 py-4'>
        <Logo/>
        </div>
        <NavbarEdicion/>
        <TablaMesociclo />
        </>
    )
}