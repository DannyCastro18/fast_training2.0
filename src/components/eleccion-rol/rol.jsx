function Rol() {
    return (
        <>
        <section className="container">
        <h1>Elige tu rol</h1>
        <section className="roles">
            <button className="rol" id="entrenador">
                <img src="img/entrenador.png" alt="Entrenador" />
                <p>Entrenador</p>
            </button>
            <button className="rol" id="jugador">
                <img src="img/jugador.png" alt="Jugador" />
                <p>Jugador</p>
            </button>
        </section>
        <button className="continuar">Continuar</button>
    </section>
        </>
    )
}

export default Rol;