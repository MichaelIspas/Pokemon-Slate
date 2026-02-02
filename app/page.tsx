import PokemonCard from '@/components/pokemoncard'
import RegionFilter from '@/components/regionfilter'

export default async function Home({ searchParams }: { searchParams: { region?: string } }) {  
  const params = await searchParams;
  
  // Decide range based on region selection
  // Default = National (1-1025 and counting)
  let start = 1
  let end = 1025

  if (params.region === 'kanto') {
    end = 151
  } else if (params.region === 'johto') {
    start = 152
    end = 251
  }
  
  // Fetch Pokemon IDs from 1 to 1025
  const pokemonIds = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  
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
          <RegionFilter currentRegion={params.region} />

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
  )
}