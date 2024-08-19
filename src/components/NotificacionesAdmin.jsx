function Notificaciones() {
  return (
      <>
          <h2>Notificaciones</h2>

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
      </>
  );
}

export default Notificaciones;