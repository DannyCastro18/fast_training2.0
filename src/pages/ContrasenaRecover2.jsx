


import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContrasenaRecover2() {
  const [codigo, setCodigo] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!codigo) {
        throw new Error("Debe ingresar el código");
      }
      
      setShowAlert(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Link to='/recoverPass'>
          <button className="text-left mb-4 focus:outline-none w-full">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </Link>
        <h1 className="text-3xl font-bold mb-4 text-center">Recuperación de Contraseña</h1>
        <p className="text-center text-gray-600 mb-2">
          Para proteger tu cuenta, ingresa el código de 6 dígitos que acabamos de enviar a tu correo.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="codigo" className="block text-lg font-medium text-gray-700 text-left">
              Código
            </label>
            <input
              type="text"
              id="codigo"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200 rounded-lg"
            />
          </div>

          {showAlert && (
            <div className="flex justify-center items-center py-2 h-12 border rounded-lg border-yellow-500">
              <img className="h-8 text-color mx-4" src="/public/alert-icon.png" alt="alert" />
              <p className="text-yellow-600 text-left text-sm">
                Al continuar se cerrará sesión en todos los dispositivos.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="rounded-lg font-black my-4 bg-naranja text-white py-3 px-4 w-full hover:bg-naranja text-lg mb-2"
          >
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContrasenaRecover2;