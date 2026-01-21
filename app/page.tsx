import PokemonCard from '@/components/pokemoncard'

export default async function Home() {
  // Fetch Pokemon IDs from 1 to 30
  const pokemonIds = Array.from({ length: 30 }, (_, i) => i + 1);

  // Create array of promises, each promise fetches one Pokemon
  const pokemonPromises = pokemonIds.map(async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
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

          <div className="grid grid-cols-6 auto-rows-[140px] mt-4">
            {pokemons.map((pokemon) => (
              <PokemonCard 
                key={pokemon.id} 
                pokemon={pokemon} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}