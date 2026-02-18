'use client'

import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useState } from 'react'

interface BulkActionsProps {
    currentRegion: string
    pokemons: any[]
    currentUser: User
}

export default function BulkActions({ currentRegion, pokemons, currentUser }: BulkActionsProps) {
    const [isBulkLoading, setIsBulkLoading] = useState(false)
    
    const handleSelectAll = async () => {
        if (pokemons.length === 0 || isBulkLoading) return

        setIsBulkLoading(true)

        // Get the list of all visible Pokémon IDs
        const allIds = pokemons.map(p => p.id)

        try {
            // Loop through each ID and save if not already saved
            for (const id of allIds) {
                const supabase = await createClient()
                const { data: exists } = await supabase
                        .from('saved_pokemon')
                        .insert({
                            user_id: currentUser.id,
                            pokemon_id: id
                        })
                }
                console.log(`Successfully saved all ${allIds.length} visible Pokémon in ${currentRegion}`)
            } catch (err) {
                console.error('Select All failed:', err)
            } finally {
                setIsBulkLoading(false)
            }
        }

    const handleSelectNone = async () => {
        if (pokemons.length === 0 || isBulkLoading) return

        // Get the list of all visible Pokémon IDs
        const allIds = pokemons.map(p => p.id)

        setIsBulkLoading(true)

        try {
            // Loop through each ID and save if not already saved
            for (const id of allIds) {
                const supabase = await createClient()
                const { data: exists } = await supabase
                        .from('saved_pokemon')
                        .delete()
                        .eq('user_id', currentUser.id)
                        .eq('pokemon_id', id)
                }
                console.log(`Successfully unsaved all ${allIds.length} visible Pokémon in ${currentRegion}`)
            } catch (err) {
                console.error('Select None failed:', err)
            } finally {
                setIsBulkLoading(false)
            }
        }

        return (
            <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 sm:flex-row sm:gap-4">                
                <button
                    onClick={handleSelectAll}
                    className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    disabled={pokemons.length === 0 || isBulkLoading}
                >
                    Select All
                </button>

                <button
                    onClick={handleSelectNone}
                    className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    disabled={pokemons.length === 0 || isBulkLoading}
                >
                    Select None
                </button>
            </div>
        )
}