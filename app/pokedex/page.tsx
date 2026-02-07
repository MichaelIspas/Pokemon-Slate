import PokemonCard from '@/components/pokemoncard'
import RegionFilter from '@/components/regionfilter'
import Link from 'next/link'

export default async function Pokedex({ searchParams }: { searchParams: { region?: string } }) {  
  const params = await searchParams;
  
  // Decide range based on region selection
  // Default = National (1-1025 and counting)
  let start = 1
  let end = 1025

  if (params.region === 'kanto') {
    end = 151;
  } else if (params.region === 'johto') {
    start = 152;
    end = 251;
  } else if (params.region === 'hoenn') {
    start = 252;
    end = 386;
  } else if (params.region === 'sinnoh') {
    start = 387;
    end = 493;
  } else if (params.region === 'unova') {
    start = 494;
    end = 649;
  } else if (params.region === 'kalos') {
    start = 650;
    end = 721;
  } else if (params.region === 'alola') {
    start = 722;
    end = 809;
  } else if (params.region === 'galar') {
    start = 810;
    end = 905;
  } else if (params.region === 'paldea') {
    start = 906;
    end = 1025;
  }
  
  // Fetch Pokemon IDs from 1 to 1025
  const pokemonIds = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  
  // Create array of promises, each promise fetches one Pokemon
  const pokemonPromises = pokemonIds.map(async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
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
      <div className="text-left w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-black dark:text-white md:text-6xl">
          Pokémon Slate
        </h1>
        <h2>
          <p>
            <Link href="/">
              <button className="inline-block py-1 px-5 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-3xl md:text-1xl font-bold tracking-tight">                
                Home
              </button>
            </Link>
          </p>
        </h2>

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