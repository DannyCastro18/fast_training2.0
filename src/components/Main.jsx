import React from 'react';

function MainContent() {
    return (
        <main className="main-content">
        <section className='w-screen h-screen' id="about">
            <div className='bg-cyan-400 w-full h-full opacity-5'>
                <h2>Acerca de</h2>
                <p>Esta es una landing page creada con React.</p>
            </div>
        </section>
        <section id="features">
            <h2>Características</h2>
            <ul>
            <li>Fácil de usar</li>
            <li>Responsive</li>
            <li>Rápida</li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contacto</h2>
            <form>
            <label>
                Nombre:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <button type="submit">Enviar</button>
            </form>
        </section>
        </main>
    );
}

export default MainContent;
