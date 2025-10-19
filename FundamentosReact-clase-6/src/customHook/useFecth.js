export function useFetch() { // Exportamos la función useFetch

  const fetchDataBackend = async (url) => { // Creamos una función asíncrona que recibe una URL como parámetro
    try { // ejecutar el código dentro del try
      const request = await fetch(url) // Hacemos una petición a la URL y esperamos la respuesta
      const response = await request.json() // Convertimos la respuesta a formato JSON y esperamos la respuesta
      return response      // Retornamos la respuesta
    } catch (error) { // Si ocurre un error, lo capturamos y lo mostramos en la consola
      console.log(error) // Mostramos el error en la consola
    }
  }
  
  return fetchDataBackend // Retornamos la función fetchDataBackend
}
