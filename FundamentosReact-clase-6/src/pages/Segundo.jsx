/*
  1- useState
*/

import { useState } from "react";

const Segundo = () => {
  const [reservas, setReservas] = useState(0);

  const handleReserve = () => setReservas(reservas + 1);
  const handleReset = () => setReservas(0);
  const handleCancel = () => {
    if (reservas > 0) setReservas(reservas - 1);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          <strong>useState:</strong> Es un Hook que permite manejar el estado dentro de un componente.
        </li>
      </ul>

      <div className="border rounded-2xl shadow-md p-6 w-80 mx-auto mt-8 text-center bg-white">
        <h2 className="text-xl font-semibold mb-4">
          Reservas actuales: {reservas}
        </h2>

        <button
          className="bg-green-700 text-white py-1 px-3 mx-1 rounded"
          onClick={handleReserve}
        >
          Reservar
        </button>

        <button
          className="bg-blue-700 text-white py-1 px-3 mx-1 rounded"
          onClick={handleCancel}
        >
          Cancelar
        </button>

        <button
          className="bg-red-700 text-white py-1 px-3 mx-1 rounded"
          onClick={handleReset}
        >
          Finalizar
        </button>
      </div>
    </>
  );
};

export default Segundo;
