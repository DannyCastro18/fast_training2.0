function Title() {
  return (
    <>
      <section className="text-center ">
        <h1 className="font-bold p-6">Debemos Asegurarnos</h1>
        <p className="font-light">
          Para verificar que eres entrenador por favor adjunta el documento que
          lo certifique
        </p>
      </section>
    </>
  );
}

function IconClip() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10em"
      height="10em"
      viewBox="0 0 24 24"
    >
      <path
        fill="black"
        fillRule="evenodd"
        d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008l-.007.007l-.002.002l-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function File() {
  return (
    <div>
      <form className="text-center p-24  border-dashed border-4 cursor-pointer">
        <section className="relative  inline-block">
          <input
            className="absolute top-0 left-0 opacity-0  w-full h-full cursor-pointer"
            type="file"
          />
          <section className="mt-12 ">
            <IconClip />
          </section>
          <label className="block cursor-pointer font-light  p-2">
            Seleccionar archivo
          </label>
        </section>
      </form>
    </div>
  );
}

export default function Letra() {
  return (
    <section className="grid grid-cols-1 gap-12 ">
      <Title />
      <File />
    </section>
  );
}
