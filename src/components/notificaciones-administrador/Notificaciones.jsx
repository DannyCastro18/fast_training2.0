

function Notificaciones() {
    return (
        <>
        <h2>Notificaciones</h2>

        <article class="notification">
          <section class="icon">
            <i class="fas fa-comment"></i>
          </section>
          <section class="content">
            <h1 class="title">Preguntas, quejas, reclamos o sugerencias</h1>
            <p>El administrador a dado respuesta a tu pregunta.</p>
          </section>
          <h3 class="date">03/02/2024</h3>
        </article>

        <article class="notification">
          <section class="icon">
            <i class="fas fa-comment"></i>
          </section>
          <section class="content">
            <h1 class="title">Preguntas, quejas, reclamos o sugerencias</h1>
            <p>El administrador a dado respuesta a tu queja.</p>
          </section>
          <h3 class="date">17/01/2024</h3>
        </article>

        <article class="notification">
          <section class="icon">
            <i class="fas fa-chart-bar"></i>
            </section>
          <section class="content">
            <h1 class="title">Estadísticas</h1>
            <p>Los resultados de los mesociclos asignados a tus jugadores ya están disponibles. Ayudalos a potenciar su rendimiento en la canchal.</p>
          </section>
          <h3 class="date">09/01/2024</h3>
        </article>
        </>
    )
}

export default Notificaciones;