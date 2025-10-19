  /*
    1 - customHook
  */

  import { useState } from "react";
  import { useFetch } from "../customHook/useFecth"; // Importar tu hook personalizado

  const Cuarto = () => {
    const [characteres, setCharacteres] = useState(null); // usar null en lugar de [] para evitar errores
    const [pokemons, setPokemons] = useState(null);

    const fetchDataBackend = useFetch();

    // 🔹 Obtener personaje random de un anime específico (por ejemplo, id=20)
    const getDataCharacteres = async () => {
      try {
        const data = await fetchDataBackend("https://api.jikan.moe/v4/anime/20/characters");

        if (data?.data?.length > 0) {
          // Tomar un personaje random del array recibido
          const randomIndex = Math.floor(Math.random() * data.data.length);
          const randomCharacter = data.data[randomIndex];
          setCharacteres(randomCharacter);
          console.log("Character:", randomCharacter);
        }
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };

    // 🔹 Obtener Pokémon random (1–151)
    const getDataPokemons = async () => {
      try {
        const randomId = Math.floor(Math.random() * 151) + 1; // 1–151 Pokémons clásicos
        const data = await fetchDataBackend(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        setPokemons(data);
        console.log("Pokemon:", data);
      } catch (error) {
        console.error("Error al obtener Pokémon:", error);
      }
    };

    return (
      <>
        <h1 className="font-bold text-2xl">customHook</h1>
        <hr className="border-gray-400 mb-8" />

        <ul className="list-disc pl-5">
          <li>
            Un Custom Hook es una lógica que nos permite reutilizar código dentro de diferentes componentes de React.
            Es como una receta que puedes usar en varios lugares sin tener que copiar y pegar los mismos pasos, haciendo tu código más limpio, ordenado y fácil de mantener.
          </li>
        </ul>

        <div className="flex justify-center mb-8 mt-8">
          <div className="border rounded-lg p-4 w-80 text-center">
            <h2 className="text-lg font-semibold mb-2 underline">Más información</h2>

            {/* Mostrar el personaje */}
            <p className="mb-4 text-left">
              <strong>Character:</strong>{" "}
              {characteres ? characteres.character.name : "—"}
            </p>

            {/* Mostrar el Pokémon */}
            <p className="mb-4 text-left">
              <strong>Pokémon:</strong>{" "}
              {pokemons ? pokemons.name : "—"}
            </p>

            <button
              className="bg-violet-700 text-white py-1 px-3 mx-1 rounded mt-4"
              onClick={getDataCharacteres}
            >
              Obtener Character
            </button>

            <button
              className="bg-violet-700 text-white py-1 px-3 rounded mt-4"
              onClick={getDataPokemons}
            >
              Obtener Pokémon
            </button>
          </div>
        </div>
      </>
    );
  };

  export default Cuarto;
