function IconAlert() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#f59e0b" d="M11.53 2.3A1.85 1.85 0 0 0 10 1.21A1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"></path></svg>
    )
}

function Seguridad() {
    return (
        <div>
            <h2 className="font-bold">Seguridad</h2>
            <p className="font-light">Al cambiar tu contraseña, se cerrará sesión en todos los dispositivos.</p>
            <button className="font-light bg-current w-36 h-46 text-center rounded-none p-0">Cambiar contraseña</button>
        </div>
    )
}

function Eliminar() {
    return (
        <div>
            <h2 className="font-bold">Eliminar</h2>
            <p className="font-light">Al eliminar tu cuenta ya no podrás interacturar con tus usuarios de Fast Training.</p>
            <button className="font-light bg-current w-36 h-46 text-center p-0 rounded-none text-black">Eliminar Cuenta</button>
            <section className="border-solid border bg-amber-200 mt-2 px-2 flex gap-2 items-center rounded border-amber-400" >
                <IconAlert />
                <p className="font-thin ">Si eliminas tu cuenta no podrás tener acceso a ningún tipo de información.</p>
            </section>
        </div>
    )
}
export default function Configuracion() {
    return (
        <div className="m-8">
            <Seguridad />
            <Eliminar />
        </div>
    )
}