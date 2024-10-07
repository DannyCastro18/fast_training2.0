import Tabla  from '../../../components/mesociclo/Mesociclo';
import NavbarEdicion from '../../../components/Navbar/navbar-edicion';
import HeaderApp from '../../../components/HeaderApp';
import Logo from '../../../components/Logo';

export default function EdicionMesociclo(){
    return(
        <>
        <div className='flex p-3 w-screen h-screen'>
        <NavbarEdicion/>
        <div className=" w-full h-full flex flex-col">
            <HeaderApp/>
            <main className='w-full h-[90vh] rounded-md bg-white overflow-y-scroll flex'>
                <Tabla />
            </main>
        </div>
    </div>
        
        </>
    )
}