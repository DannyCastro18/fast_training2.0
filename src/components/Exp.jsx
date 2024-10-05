
const Exp = () => {
  return (
    <div className="flex h-screen">
      {/* Barra de Navegación Lateral */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-bold">Fast Training</span>
        </div>
        {/* Menú de navegación */}
        <nav className="flex-1">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
              <i className="fas fa-home mr-2"></i> Inicio
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
              <i className="fas fa-folder mr-2"></i> Archivos
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
              <i className="fas fa-cog mr-2"></i> Configuración
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
              <i className="fas fa-bell mr-2"></i> Notificaciones
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
              <i className="fas fa-question-circle mr-2"></i> Ayuda
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
              <i className="fas fa-sign-out-alt mr-2"></i> Salir
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        {/* Barra superior */}
        <header className="bg-gray-100 p-4 flex justify-between items-center">
          {/* Barra de búsqueda */}
          <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2">
            <i className="fas fa-search text-gray-400"></i>
            <input
              type="text"
              placeholder="Buscar"
              className="ml-2 bg-transparent focus:outline-none"
            />
          </div>
          {/* Foto de perfil (usuario) */}
          <img
            src="/user.png"
            alt="Usuario"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
        </header>

        {/* Contenido principal */}
        <main className="flex-1 bg-white p-4">
          {/* Aquí va el contenido, como la lista de archivos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h2 className="font-bold text-lg">Archivos</h2>
              <ul>
                <li className="py-1 hover:bg-gray-200 cursor-pointer">Leo R. López</li>
                <li className="py-1 hover:bg-gray-200 cursor-pointer">Andrés Escobar</li>
                <li className="py-1 hover:bg-gray-200 cursor-pointer">Mario Bross</li>
                {/* Otros nombres */}
              </ul>
            </div>
            <div className="col-span-1">
              <div className="bg-gray-100 p-4 shadow-md rounded">
                Mesociclo & Estadística
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Exp;
