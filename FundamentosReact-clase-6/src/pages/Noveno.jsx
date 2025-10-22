/*
  1- Renderizado condicional
  2- Renderizado de listas
*/

import { useState } from "react"

const Noveno = () => {

  const [verLibros, setVerLibros] = useState(false)
  const [libros] = useState([
    { titulo: "Las alas de Sophie", autor: "Alice Kellen", emoji: "🪽" },
    { titulo: "Un cuento perfecot", autor: "Elisabet Benavent", emoji: "🧿" },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", emoji: "⭐" },
    { titulo: "Harry Potter", autor: "J.K. Rowling", emoji: "⚡" },
    { titulo: "Llámame cuando no te encuentres", autor: "Gilraen Eärfalas", emoji: "😶‍🌫️" },
  ])

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado</h1>
      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          <strong>Renderizado condicional:</strong> Sirve para mostrar información solo si se cumple una condición.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite recorrer un arreglo y mostrar varios elementos en pantalla.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">

          <h2 className="text-1xl font-bold text-left underline mb-4">Condicional</h2>

          {libros.length > 0 
            ? <p>Tenemos libros disponibles para leer 📚</p>
            : <p>No hay libros por el momento 😢</p>
          }

          <button 
            className="mt-2 bg-indigo-600 text-white py-1 px-3 rounded" 
            onClick={() => setVerLibros(!verLibros)}
          >
            {verLibros ? "Ocultar lista" : "Mostrar libros"}
          </button>
        </div>
      </div>

      {verLibros && (
        <div className="flex justify-center mb-8">
          <div className="border rounded-lg p-4 w-120 mx-auto text-center">

            <h2 className="text-1xl font-bold text-left underline mb-4">Listas</h2>

            <ul className="list-disc pl-5 text-left">
              {libros.map((libro, index) => (
                <li key={index}>
                  {libro.emoji} <strong>{libro.titulo}</strong> — {libro.autor}
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </>
  )
}

export default Noveno
