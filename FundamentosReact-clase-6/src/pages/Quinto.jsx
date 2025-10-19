/*
  1- Props 
*/

import Sexto from "./Sexto";

const Quinto = () => {
  const userProfile = {
    name: "Damaris Lopez",
    rol: "Estudiante",
    email: "akashalopez72@gmail.com",
    password: "123456789",
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Props</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos del componente padre al componente hijo, funcionando de manera similar a la herencia.
          Una forma de entenderlo es con un ejemplo: cuando nuestros padres nos dan un juguete y nos dicen “cuídalo, esto me lo dio mamá”, estamos recibiendo algo valioso del “padre” que debemos usar en nuestro espacio, sin modificar la fuente original.
        </li>
      </ul>

      <h2 className="text-green-700 text-center mt-8">Padre</h2>

      {/* Cuadro verde pastel que contiene JSON y tarjeta del hijo */}
      <div className="bg-green-100 border border-green-300 rounded-lg p-4 max-w-lg mx-auto mb-8">

        {/* JSON del padre */}
        <pre className="text-left mb-4">
          {JSON.stringify(userProfile, null, 2)}
        </pre>

        {/* Hijo */}
        <Sexto data={userProfile} />

      </div>
    </>
  );
};

export default Quinto;
