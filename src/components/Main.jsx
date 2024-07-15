import React from 'react';

function MainContent() {
    return (
        <main className="main-content">
            <section className='w-screen h-screen bg-cover' style={{backgroundImage:'url("/public/hero-image-training.jpg")'}} id="about">
                <div className='bg-cyan-500/50 grayscale-0 z-10 w-full h-full flex justify-center items-center'>
                    <h2 color='black'>Acerca de</h2>
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
