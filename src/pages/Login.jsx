import { Route, Routes, Link } from "react-router-dom";
import ContrasenaRecover from './ContrasenaRecover';

const Login = () => {
    return (
            <>
                <section className='flex items-center h-screen w-screen fixed z-10'>
                    <section className='w-1/2 h-full bg-cover bg-center' style={{backgroundImage:'url("/public/login-img.jpeg")'}}>
                    </section>
                    <section className="bg-white w-1/2 h-full">
                        <section>
                            <Link to="/"><i class="fa-solid fa-angle-left"></i></Link>
                            <h1 className='text-4xl font-bold'>Inicio de Sesión</h1>
                            <form>
                                <div>
                                    <input type="email" name="email" id="email" placeholder='user@gmail.com' />
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder='Contraseña' />
                                </div>
                                <Link to="/recoverPass">Olvide mi contraseña</Link>
                                <div>
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </section>
                    </section>
                </section>
                <Routes>
                    <Route path='/recoverPass' element={<ContrasenaRecover />} />
                </Routes>
            </>
    )
}

export default Login;