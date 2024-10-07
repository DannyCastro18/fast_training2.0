import { useNavigate } from "react-router-dom";

function Rol({ title }) {
    const navigate = useNavigate()

    const closeModal = () => {
        navigate(-1)
    }

    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
                <h1 className="text-center">Elige tu rol</h1>
                <button onClick={closeModal}>Cerrer</button>
                <section className="flex justify-center mb-5">
                    <button className="flex flex-col items-center p-5 mx-3 bg-gray-300 text-black transition duration-300 hover:bg-orange-600">
                        <img src="./public/entrenador.png" alt="Entrenador" className="mb-2" />
                        <p className="m-0 text-lg font-bold">Entrenador</p>
                    </button>
                    <button className="flex flex-col items-center p-5 mx-3 bg-gray-300 text-black transition duration-300 hover:bg-orange-600">
                        <img src="./public/jugador.png" alt="Jugador" className="mb-2" />
                        <p className="m-0 text-lg font-bold">Jugador</p>
                    </button>
                </section>
                <button className="w-64 py-2 px-5 bg-orange-600 text-white rounded-md hover:bg-orange-400 text-lg font-bold">
                    Continuar
                </button>
            </section>
        </>
    );
}

export default Rol;