import HeaderApp from '../../components/HeaderApp';
import NavbarJugador from '../../components/Navbar/NavbarJugador';

function   Quejas() {
  return (
    <>
      <HeaderApp />
      <NavbarJugador />
      <div className="container">
          <header>
            <h3>¿Tienes sugerencias, quejas o reclamos?</h3>
            <style >{`
            h3{
                  text-align:left;
                  margin:20px;
            }
              .container {
                width: 100vw;
                margin: 50px auto;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
          
            `}</style>
          </header>
          <section className='botonesjuntos'>
        <input type="text" />
        <section className='botones2'>
        <section className='botones'>
          <button>Sugerencias</button>
            <button>Quejas</button>
            <button>Reclamos</button>
        </section>
            <button className='enviar'>Enviar</button>
            </section>
            </section>
            <style >{`
              input {
                
                  background-color: #f7f7f7;
                  padding: 10px;
                  width:63%;
                  height: 100px;
                  border-right: 1px solid #ddd;
                  list-style: none;
                  padding: 10;
                  margin:10px;
                  border-bottom: 1px solid #ddd;
                display: flex;
                  justify-content: space-between;
                  text-decoration: none;
                  color: #337ab7;
                }
            .botones2{
            display:flex;
            justify-content:space-between;
            width:63%;

            }
              .botones {
              width: auto;
                display: flex;
                gap:20px;
              }
              main button hover {
                background-color: #23527c;
              }
                .enviar{
                background-color: #0085FF;
                color: #fff;
                }
            `}</style>
          <main>
          
            <h2>¿Necesitas ayuda con la app?</h2>
            <ul>
                <li></li>
              <li>¿Cómo descargar el menú?</li>
              <li>¿Cómo puedo agregar un nuevo jugador?</li>
              <li>¿Cómo puedo cambiar mi número de cuenta?</li>
              <li>¿Cómo puedo desactivar las notificaciones?</li>
              <li>¿Cómo puedo desactivar la habitación Wi-Fi?</li>
              <li>¿Cómo puedo desactivar el modo de entrenamiento?</li>
              <li>¿Cómo puedo desactivar los colores de la habitación?</li>
              <style >{`
              h2{
            color: red;
            text-decoration: none;
            font-size:22px;
              
              }
                main {
                  padding: 20px;
                  text-align:left;
                  margin:20px;
                }
                main h2 {
                  margin-top: 0;
                }
                main ul {
                  list-style: none;
                  padding: 0;
                  margin: 0;
                }
                main li {
                  padding: 10px;
                }
              `}</style>
            </ul>
            {/* <button>Avanzado</button>
            <button>Necesitas usar la app?</button>
            <style jsx>{`
              main button {
                display:flex;
                justify-content: space-between;
                background-color: #337ab7;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              main button:hover {
                background-color: #23527c;
              }
            `}</style> */}
          </main>
        </div>
    </>
  );
}

export default Quejas;