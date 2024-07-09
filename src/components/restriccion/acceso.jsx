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
    <div className="flex flex-col items-center w-fit font-light  ">
      <Iconescudo />
      <h1 className="py-14 ">Acceso restringido</h1>
    </div>
  );
}

export default function Restriccion() {
  return <Aviso />;
}
