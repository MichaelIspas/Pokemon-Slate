export default async function Home() {
  // Fetch Pokemon IDs from 1 to 30
  const pokemonIds = Array.from({ length: 30 }, (_, i) => i + 1);

  // Create array of promises, each one fetches one Pokemon
  const pokemonPromises = pokemonIds.map(async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      // Optional: cache for better performance in development/production
      next: { revalidate: 3600 }, // revalidate every hour (or use 0 for SSR every request)
    });

    if (!res.ok) {
      throw new Error('Failed to fetch Pokémon #${id}')
    }

    return res.json();
  });

  // Wait for all fetches to complete
  let pokemons = [];
  try {
    pokemons = await Promise.all(pokemonPromises);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center pt-16 px-4">
      <div className="text-center w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-black dark:text-white md:text-6xl">
          Pokémon Slate
        </h1>

      <div className="text-left w-full max-w-5xl">
        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
          Generation 1
        </h2>
          <h3 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
            001-030
          </h3>

          <div className="grid grid-cols-6 auto-rows-[100px] mt-4">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center bg-white dark:bg-gray-900 hover:shadow-md transition-shadow"
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width="80"
                  height="80"
                />
                <p>{pokemon.name}
                </p>
                <p>#{pokemon.id.toString().padStart(3, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}