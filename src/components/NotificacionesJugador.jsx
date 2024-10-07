import { useNavigate } from "react-router-dom";

function PlayerNotifications({ title }) {
    const navigate = useNavigate()

    const closeModal = () => {
        navigate(-1)
    }
    
    return (
        <div className="w-full fixed inset-0 h-full flex items-center justify-center bg-gray-800/50">
            <div className="bg-white z-10 fixed p-6 w-96 rounded shadow-md">
            <h2>Notificaciones</h2>
            <button onClick={closeModal}>Cerrar</button>

            <article className="border border-gray-300 p-2 mb-2">
                <section className="inline-block w-5 h-5 bg-red-600 text-white rounded-full text-center leading-5 mr-2">
                    <i className="fas fa-comment"></i>
                </section>
                <section className="clear-both">
                    <h1 className="font-bold">Preguntas, quejas, reclamos o sugerencias</h1>
                    <p>El administrador ha dado respuesta a tu pregunta.</p>
                </section>
                <h3 className="float-right text-xs text-gray-500">03/02/2024</h3>
            </article>

            <article className="border border-gray-300 p-2 mb-2">
                <section className="inline-block w-5 h-5 bg-red-600 text-white rounded-full text-center leading-5 mr-2">
                    <i className="fas fa-comment"></i>
                </section>
                <section className="clear-both">
                    <h1 className="font-bold">Preguntas, quejas, reclamos o sugerencias</h1>
                    <p>El administrador ha dado respuesta a tu queja.</p>
                </section>
                <h3 className="float-right text-xs text-gray-500">17/01/2024</h3>
            </article>

            <article className="border border-gray-300 p-2 mb-2">
                <section className="inline-block w-5 h-5 bg-red-600 text-white rounded-full text-center leading-5 mr-2">
                    <i className="fas fa-chart-bar"></i>
                </section>
                <section className="clear-both">
                    <h1 className="font-bold">Estadísticas</h1>
                    <p>Los resultados de los mesociclos asignados a tus jugadores ya están disponibles. Ayúdalos a potenciar su rendimiento en la cancha.</p>
                </section>
                <h3 className="float-right text-xs text-gray-500">09/01/2024</h3>
            </article>

            <article className="border border-gray-300 p-2 mb-2">
                <section className="inline-block w-5 h-5 bg-red-600 text-white rounded-full text-center leading-5 mr-2">
                    <i className="fas fa-chart-bar"></i>
                </section>
                <section className="clear-both">
                    <h1 className="font-bold">Mesociclo público</h1>
                    <p>Tu entrenador ya ha publicado tu Mesociclo.</p>
                </section>
                <h3 className="float-right text-xs text-gray-500">03/02/2024</h3>
            </article>
            </div>
        </div>
    )
}

export default PlayerNotifications;