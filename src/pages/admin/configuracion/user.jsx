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

function IconAdmi() {
  return (
    <svg
      className="h-16 w-16 "
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
    >
      <circle
        cx={14.67}
        cy={8.3}
        r={6}
        fill="black"
        className="clr-i-solid clr-i-solid-path-1"
      ></circle>
      <path
        fill="black"
        d="M16.44 31.82a2.15 2.15 0 0 1-.38-2.55l.53-1l-1.09-.33a2.14 2.14 0 0 1-1.5-2.1v-2.05a2.16 2.16 0 0 1 1.53-2.07l1.09-.33l-.52-1a2.17 2.17 0 0 1 .35-2.52a19 19 0 0 0-2.32-.16A15.58 15.58 0 0 0 2 23.07v7.75a1 1 0 0 0 1 1z"
        className="clr-i-solid clr-i-solid-path-2"
      ></path>
      <path
        fill="black"
        d="m33.7 23.46l-2-.6a6.7 6.7 0 0 0-.58-1.42l1-1.86a.35.35 0 0 0-.07-.43l-1.45-1.46a.38.38 0 0 0-.43-.07l-1.85 1a7.7 7.7 0 0 0-1.43-.6l-.61-2a.38.38 0 0 0-.36-.25h-2.08a.38.38 0 0 0-.35.26l-.6 2a7 7 0 0 0-1.45.61l-1.81-1a.38.38 0 0 0-.44.06l-1.47 1.44a.37.37 0 0 0-.07.44l1 1.82a7.2 7.2 0 0 0-.65 1.43l-2 .61a.36.36 0 0 0-.26.35v2.05a.36.36 0 0 0 .26.35l2 .61a7.3 7.3 0 0 0 .6 1.41l-1 1.9a.37.37 0 0 0 .07.44L19.16 32a.38.38 0 0 0 .44.06l1.87-1a7 7 0 0 0 1.4.57l.6 2.05a.38.38 0 0 0 .36.26h2.05a.38.38 0 0 0 .35-.26l.6-2.05a6.7 6.7 0 0 0 1.38-.57l1.89 1a.38.38 0 0 0 .44-.06L32 30.55a.38.38 0 0 0 .06-.44l-1-1.88a7 7 0 0 0 .57-1.38l2-.61a.39.39 0 0 0 .27-.35v-2.07a.4.4 0 0 0-.2-.36m-8.83 4.72a3.34 3.34 0 1 1 3.33-3.34a3.34 3.34 0 0 1-3.33 3.34"
        className="clr-i-solid clr-i-solid-path-3"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
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
      <p className="font-light py-2">Alejandra Savedra </p>
    </div>
  );
}

function Email() {
  return (
    <div>
      <h2 className="font-bold">Correo electrónico</h2>
      <div className="flex font-light py-2">
        <p>alejasavedra@gmail.com</p>
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
        <IconAdmi />
        <p>Administrador</p>
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

export default function Confi() {
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
