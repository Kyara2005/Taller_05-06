import { useState, useEffect } from "react"

const Decimo = () => {
  const [modoOscuro, setModoOscuro] = useState(false)

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("modo-oscuro"))
    if (guardado) {
      setModoOscuro(true)
      document.body.classList.add("bg-gray-900", "text-white")
    }
  }, [])

  const cambiarTema = () => {
    const nuevoEstado = !modoOscuro
    setModoOscuro(nuevoEstado)
    localStorage.setItem("modo-oscuro", JSON.stringify(nuevoEstado))

    if (nuevoEstado) {
      document.body.classList.add("bg-gray-900", "text-white")
    } else {
      document.body.classList.remove("bg-gray-900", "text-white")
    }
  }

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">LocalStorage - Modo Oscuro</h1>
      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          LocalStorage sirve para mantener información en el navegador incluso después de recargar o cerrar la página.
        </li>
        <li>
          Los datos se guardan en pares clave–valor (como un diccionario).
        </li>
        <li>
          Solo admite strings → si se quiere guardar se debe usar JSON.stringify() y para leerlos se usa JSON.parse()
        </li>
      </ul>
      
      <button 
        className={`py-2 px-4 rounded ${modoOscuro ? "bg-yellow-500" : "bg-gray-800 text-white"}`} 
        onClick={cambiarTema}
      >
        {modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
    </>
  )
}

export default Decimo
