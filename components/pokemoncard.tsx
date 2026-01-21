// components/pokemoncard.tsx
'use client'

import { useState } from 'react'

interface PokemonCardProps {
    pokemon: {
        id: number
        name: string
        sprites: { front_default: string }
    }
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    const [selected, setSelected] = useState(false)

    return (
        <div
            onClick={() => setSelected(!selected)}
            className={`
        border rounded-lg flex flex-col items-center justify-center h-full
        cursor-pointer transition-all duration-200
        hover:shadow-md hover:scale-105
        ${selected
                    ? 'bg-blue-100 border-blue-500 shadow-md scale-[1.02]'
                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'}
      `}
        >
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={80}
                height={80}
                className="object-contain"
            />
            <p className="mt-1 text-sm font-medium capitalize">
                {pokemon.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                #{pokemon.id.toString().padStart(3, '0')}
            </p>
        </div>
    )
}