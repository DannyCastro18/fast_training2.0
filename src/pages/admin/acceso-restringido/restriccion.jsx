function Iconescudo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12em"
      height="12em"
      viewBox="0 0 24 24"
    >
      <path
        fill="#ff5900"
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5M11 7h2v6h-2m0 2h2v2h-2"
      ></path>
    </svg>
  );
}

function Aviso() {
  return (
    <div className="items-center font-light grid place-items-center h-screen ">
      <div className="flex flex-col items-center max-w-lg w-full p-8 ">
        <Iconescudo />
        <h1 className="py-14 text-black font-semibold ">Acceso restringido</h1>
      </div>
    </div>
  );
}

function Botonpry() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className=" flex space-x-4 ">
          <button className="font-bold bg-orange-600 px-2.5 mb-7">
            Reenviar certificado
          </button>
          <button className="font-bold bg-orange-600 px-2.5 mb-7">
            Salir de Fast Training
          </button>
        </div>
      </div>
    </>
  );
}

export default function Acceso() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <Aviso />
      <Botonpry />
    </div>
  );
}
