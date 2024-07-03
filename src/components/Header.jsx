import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <header className="flex w-screen px-8 h-28 fixed items-center justify-between flex-wrap top-0 ">
            <nav className='flex '>
                <Logo />
                
                <ul className='flex items-center gap-4 mx-20'>
                    <li><a className='text-zinc-50' href="#about">Acerca de</a></li>
                    <li><a className='text-zinc-50' href="#features">Características</a></li>
                    <li><a className='text-zinc-50' href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <div className='flex gap-4 '>
                <a className='text-zinc-50 mx-4' href="">Iniciar Sesión</a>
                <a className='text-zinc-50 mx-4' href="">Registrate</a>
            </div>
        </header>
    );
}

export default Header;