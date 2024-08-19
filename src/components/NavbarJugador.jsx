import { HomeIcon, FolderIcon, ConfigIcon, NotificationIcon, ThemeIcon, HelpIcon, ExitIcon } from "./Icons"

function NavbarJugador() {
    return (
        <aside className="w-16 ml-3 my-3 p-1.5 bg-white/50 h-[96vh] fixed top-0 flex justify-center rounded ">
            <nav className="flex flex-col justify-between items-center w-full rounded bg-slate-50 group-hover:items-baseline group-hover:pl-4">
                <ul className="flex gap-2 flex-col justify-center py-2">
                    {/* Home icon */}
                    <li className="w-full h-fit list-none">
                        <a className="hover:bg-neutral-300 text-center flex justify-center items-center w-12 h-12 group-hover:w-full gap-4 group-hover:justify-start rounded" href=""><HomeIcon />
                            {/* <span className="hidden opacity-0 group-hover:inline group-hover:visible transition-opacity group-hover:opacity-100 duration-300 text-neutral-500">Inicio</span> */}
                        </a>
                    </li>

                    {/* Archivos Icon */}
                    <li className="w-fit h-fit" >
                        <a className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <FolderIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Documentos</span> */}
                        </a>
                    </li>

                    {/* Configuracion */}
                    <li className="w-fit h-fit" >
                        <a className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <ConfigIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Configuración</span> */}
                        </a>
                    </li>

                    {/* Notificaciones icon */}
                    <li className="w-fit h-fit" >
                        <a className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <NotificationIcon />
                            {/* <span className="hidden opacity-0 group-hover:inline transition-opacity group-hover:opacity-100 duration-300 text-neutral-500">Notificaciones</span> */}
                        </a>
                    </li>
                </ul>

                <ul className="flex gap-2 flex-col py-2">
                    <li className="w-fit h-fit" >
                        <a className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <ThemeIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Tema</span> */}
                        </a>
                    </li>
                    <li className="w-fit h-fit" >
                        <a className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <HelpIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Ayuda</span> */}
                        </a>
                    </li>
                    <li className="w-fit h-fit" >
                        <a className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <ExitIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Cerrar Sesión</span> */}
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavbarJugador;