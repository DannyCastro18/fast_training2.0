function IconPerfil() {
  return (
    <svg
      className="h-40 w-40"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <g fill="black">
        <path
          d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128"
          opacity={1}
        ></path>
        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"></path>
      </g>
    </svg>
  );
}

function IconPencil() {
  return (
    <svg
      className="h-4 w-4 m-2"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="black"
        d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21A1 1 0 0 0 4 21M18 4.41L19.59 6L18 7.59L16.42 6zM5.91 16.51L15 7.41L16.59 9l-9.1 9.1l-2.11.52z"
      ></path>
    </svg>
  );
}

function Icontrainer() {
  return (
    <svg
      className="h-16 w-16"
      xmlns="http://www.w3.org/2000/svg"
      width="0.88em"
      height="1em"
      viewBox="0 0 448 512"
    >
      <path
        fill="black"
        d="M96 128a128 128 0 1 0 256 0a128 128 0 1 0-256 0m94.5 200.2l18.6 31l-33.3 123.9l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9l-33.3-123.9l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2h-39.5c-12.4 0-20.1 13.6-13.7 24.2z"
      ></path>
    </svg>
  );
}

function Titulo() {
  return <h2 className="font-bold text-black">Mi Cuenta</h2>;
}

function Foto() {
  return (
    <div>
      <h2 className="text-center font-bold ">Foto de perfil</h2>
      <IconPerfil />
    </div>
  );
}

function Nombre() {
  return (
    <div>
      <h2 className="font-bold ">Nombre</h2>
      <p className="font-light py-2">Raúl Gómez Arboleda </p>
    </div>
  );
}

function Email() {
  return (
    <div>
      <h2 className="font-bold">Correo electrónico</h2>
      <div className="flex font-light py-2">
        <p>rau1g0m3x@gmail.com</p>
        <IconPencil />
      </div>
    </div>
  );
}

function Rol() {
  return (
    <div>
      <h2 className="font-bold">Rol</h2>
      <div className="flex flex-col items-center w-fit font-light">
        <Icontrainer />
        <p>Entrenador</p>
      </div>
    </div>
  );
}

function IconAlert() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
    >
      <path
        fill="#ff5900"
        d="M11.53 2.3A1.85 1.85 0 0 0 10 1.21A1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
      ></path>
    </svg>
  );
}

function Linea() {
  return (
    <>
      <hr />
    </>
  );
}

function Seguridad() {
  return (
    <div className="pt-8">
      <section>
        <Linea />
      </section>
      <h2 className="font-bold py-2 text-black">Seguridad</h2>
      <p className="font-light py-2 text-black">
        Al cambiar tu contraseña, se cerrará sesión en todos los dispositivos.
      </p>
      <button className="font-light bg-neutral-400 w-36 h-46 text-center rounded-none p-0 ">
        <p className="text-black ">Cambiar contraseña</p>
      </button>
    </div>
  );
}

function Eliminar() {
  return (
    <div className="pt-8">
      <section>
        <Linea />
      </section>
      <h2 className="font-bold py-2 text-black">Eliminar</h2>
      <p className="font-light py-2 text-black">
        Al eliminar tu cuenta ya no podrás interacturar con tus usuarios de Fast
        Training.
      </p>
      <button className="font-light bg-neutral-400 w-36 h-46 text-center p-0 rounded-none ">
        <p className="text-black ">Eliminar Cuenta</p>
      </button>
      <section className="border-solid border bg-amber-200 mt-2 px-2 flex gap-2 items-center rounded border-amber-600 ">
        <IconAlert />
        <p className="font-thin text-amber-600 ">
          Si eliminas tu cuenta no podrás tener acceso a ningún tipo de
          información.
        </p>
      </section>
    </div>
  );
}

export default function Confi2() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Titulo />
      <section className="flex flex-1 text-black">
        <section className="m-14 mr-40 ">
          <Foto />
        </section>
        <section className="mt-14 flex-1">
          <Nombre />
          <Email />
          <Rol />
        </section>
      </section>
      <div className="m-8 ">
        <Seguridad />
        <Eliminar />
      </div>
    </div>
  );
}
