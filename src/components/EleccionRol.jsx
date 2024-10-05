import { Link } from "react-router-dom";

function EleccionRol() {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-fit h-fit py-20 rounded-xl bg-gray-200">
                <h1 className="text-center mb-8 text-2xl font-black">Elige tu rol</h1>
                <section className="flex justify-center mb-5">
                    <Link to="/trainer/home">
                        <button className="flex flex-col items-center p-5 mx-3 bg-gray-300 text-black transition duration-300 hover:bg-orange-600">
                            <img src="./public/entrenador.png" alt="Entrenador" className="mb-2" />
                            <p className="m-0 text-lg font-bold">Entrenador</p>
                        </button>
                    </Link>
                    <Link to="/player/home">
                        <button className="flex flex-col items-center p-5 mx-3 bg-gray-300 text-black transition duration-300 hover:bg-orange-600">
                            <img src="./public/jugador.png" alt="Jugador" className="mb-2" />
                            <p className="m-0 text-lg font-bold">Jugador</p>
                        </button>
                    </Link>
                </section>
                <button className="w-64 py-2 px-5 bg-orange-600 text-white rounded-md hover:bg-orange-400 text-lg font-bold">
                    Continuar
                </button>
            </section>
        </>
    );
}

export default EleccionRol;