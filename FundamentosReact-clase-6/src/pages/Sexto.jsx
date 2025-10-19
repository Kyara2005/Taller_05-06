/*
  1- Props 
*/

const Sexto = ({ data }) => {
  return (
    <>
      <h2 className="text-orange-800">Hijo</h2>

      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-orange-500 bg-orange-100 rounded-lg p-4 w-80 text-center">
          <h2 className="text-lg font-semibold mb-2">Bienvenido(a) - {data.name}</h2>
          <p className="mb-2">Rol: {data.rol}</p>
          <p className="mb-2">Email: {data.email}</p>
          <p className="mb-2">Password: {data.password}</p>
        </div>
      </div>
    </>
  );
};

export default Sexto;
