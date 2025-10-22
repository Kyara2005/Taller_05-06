/*
  1- useEffect
*/

import { useEffect, useState } from "react";

const Tercero = () => {
  const [user, setUser] = useState({});
  const [buscar, setBuscar] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserIDApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const id = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) throw new Error("Error al obtener el usuario");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserIDApi();
  }, [buscar]);

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          <strong>useEffect:</strong> Permite ejecutar efectos secundarios, como
          peticiones a APIs o actualizar el DOM después del renderizado.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-2xl shadow-md p-5 w-80 text-center bg-white">
          {loading ? (
            <p className="text-gray-500">Cargando usuario...</p>
          ) : error ? (
            <p className="text-red-600">Error: {error}</p>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-2">
                Bienvenido(a) - {user.name}
              </h2>
              <p className="mb-2 text-left">Username: {user.username}</p>
              <p className="mb-2 text-left">Email: {user.email}</p>
              <p className="mb-2 text-left">Phone: {user.phone}</p>
              <p className="mb-2 text-left">City: {user.address?.city}</p>
              <p className="mb-2 text-left">
                Location: Lat {user.address?.geo?.lat}, Lng {user.address?.geo?.lng}
              </p>
              <button
                className="bg-violet-700 text-white py-1 px-3 rounded mt-4"
                onClick={() => setBuscar(buscar + 1)}
              >
                Obtener otro usuario
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tercero;
