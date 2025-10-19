/*

  1- Zustand 

*/



import storeUniverso from "../context/storeUniverso.jsx"
import Octavo from "./Octavo"


const Septimo = () => {

  const {detalle,setGalaxia} = storeUniverso()

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand </h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es una librería global que nos permite usar el código desde cualquier parte, creando un contexto y un store para poder acceder a los componentes de manera sencilla.
        </li>
      </ul>


      <h2 className="text-blue-700 text-center mt-8">Padre</h2>

      <div className="flex flex-col justify-center items-center max-w-md mx-auto border-2 border-blue-500 bg-blue-100 rounded-lg p-4 mb-8">


        <Octavo/>
        
        <p>nombre: {detalle.nombre}</p>
        
        <p>tipo: {detalle.tipo}</p>

        <button className="bg-gray-600 text-white py-1 px-3 rounded w-full mt-4" onClick={()=>{setGalaxia({nombre: "Milky Way", tipo: "Galaxia espiral barrada"})}}>Cambiar</button>

        
      </div>

    </>
  )
}

export default Septimo