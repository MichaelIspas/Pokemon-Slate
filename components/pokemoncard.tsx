'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'

interface PokemonCardProps {
    pokemon: {
        id: number
        name: string
        sprites: { front_default: string }
    }
    user: User | null
}

export default function PokemonCard({ pokemon, user }: PokemonCardProps) {
    const [selected, setSelected] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const checkCardStatus = async () => {
            if (!user) {
                setLoading(false)
                return
            }

            const supabase = await createClient()

            const { data, error } = await supabase
                .from('saved_pokemon')
                .select('id')
                .eq('user_id', user.id)
                .eq('pokemon_id', pokemon.id)
                .limit(1)

            setSelected(!!data?.length)
            setLoading(false)

            if (error) {
                console.error('Check failed', error.message)
            }
        }
        checkCardStatus()
    }, [user?.id, pokemon.id])
    
    const handleClick = async () => {
        if (!user) return

        const supabase = await createClient()

        const { data: existing } = await supabase
            .from('saved_pokemon')
            .select('id')
            .eq('user_id', user.id)
            .eq('pokemon_id', pokemon.id)
            .limit(1)

        if (existing && existing.length > 0) {
            const { error } = await supabase
                .from('saved_pokemon')
                .delete()
                .eq('user_id', user.id)
                .eq('pokemon_id', pokemon.id)

            if (error) {
                console.error('Delete failed.', error.message)
                return
            }

        setSelected(false)
        } else {
            const { error } = await supabase
                .from('saved_pokemon')
                .insert({ 
                    user_id: user.id, pokemon_id: pokemon.id
                })

            if (error) {
                console.error('Insert failed.', error.message)
                return
            }

            setSelected(true)
            }
        }
                
        if (isLoading) return <div className="opacity-50">Loading...</div>

        return (
            <div
                onClick={handleClick}
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