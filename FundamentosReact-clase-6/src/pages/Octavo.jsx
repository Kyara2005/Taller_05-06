/*

  1- Zustand 

*/

import storeUniverso from "../context/storeUniverso"



const Octavo = () => {

  const {detalle} = storeUniverso()

  return (
    <>

      <h2 className="text-purple-900">Hijo</h2>

      <div className="flex justify-center mb-8">

        <div className="max-w-sm border-2 border-purple-500 bg-purple-100 rounded-lg p-4 w-80 text-center">

          <p>nombre: {detalle.nombre}</p>

          <p>tipo: {detalle.tipo}</p>

        </div>

      </div>

    </>
  )
  }

export default Octavo