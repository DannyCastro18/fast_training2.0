function Notificaciones2() {
    return (
        <>
        <h2>Notificaciones</h2>

        <article className="notification">
          <section className="icon">
            <i className="fas fa-comment"></i>
          </section>
          <section className="content">
            <h1 className="title">Preguntas, quejas, reclamos o sugerencias</h1>
            <p>El administrador ha dado respuesta a tu pregunta.</p>
          </section>
          <h3 className="date">03/02/2024</h3>
        </article>

        <article className="notification">
          <section className="icon">
            <i className="fas fa-comment"></i>
          </section>
          <section className="content">
            <h1 className="title">Preguntas, quejas, reclamos o sugerencias</h1>
            <p>El administrador ha dado respuesta a tu queja.</p>
          </section>
          <h3 className="date">17/01/2024</h3>
        </article>

        <article className="notification">
          <section className="icon">
            <i className="fas fa-chart-bar"></i>
            </section>
          <section className="content">
            <h1 className="title">Estadísticas</h1>
            <p>Los resultados de los mesociclos asignados a tus jugadores ya están disponibles. Ayudalos a potenciar su rendimiento en la cancha.</p>
          </section>
          <h3 className="date">09/01/2024</h3>
        </article>

        <article className="notification">
          <section className="icon">
            <i className="fas fa-chart-bar"></i>
            </section>
          <section className="content">
            <h1 className="title">Mesociclo público</h1>
            <p>Tu entrenador ya ha publicado tu Mesociclo.</p>
          </section>
          <h3 className="date">03/02/2024</h3>
        </article>
        </>
    )
}

export default Notificaciones2;