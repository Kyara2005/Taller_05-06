/*
  1- Variable
  2- Fragment
  3- JSX
  4- Condicional
  5- Eventos
*/

import { useState } from "react";

const Primero = () => {
  const [user, setUser] = useState({ name: "Karmen", rol: "Invitado" });

  const handleLogout = () => {
    alert("Cierre de sesión exitoso");
    setUser(null);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">React</h1>
      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li><strong>Variable:</strong> Almacena información que se puede usar dentro de un componente.</li>
        <li><strong>Fragment:</strong> Agrupa varios elementos sin añadir etiquetas extra.</li>
        <li><strong>JSX:</strong> Mezcla de JavaScript y HTML para construir interfaces.</li>
        <li><strong>Condicional:</strong> Muestra contenido dependiendo de una condición.</li>
        <li><strong>Eventos:</strong> Responden a acciones del usuario (onClick, onChange, etc.).</li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-80 border rounded-2xl p-5 shadow-md text-center bg-white">
          {user ? (
            <>
              <h2 className="text-lg font-semibold mb-2">Bienvenido(a) - {user.name}</h2>
              <p className="mb-3 capitalize text-gray-700">{user.rol}</p>
              <button
                className="bg-red-700 text-white py-1 px-3 rounded w-full mb-2"
                onClick={handleLogout}
              >
                Salir
              </button>
              <button
                className="bg-violet-700 text-white py-1 px-3 rounded w-full"
                onClick={() =>
                  setUser((prev) => ({
                    ...prev,
                    rol: prev.rol === "Admin" ? "Invitado" : "Admin",
                  }))
                }
              >
                Cambiar Rol
              </button>
            </>
          ) : (
            <p className="text-gray-500">Sesión cerrada</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Primero;
