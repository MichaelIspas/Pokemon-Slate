// app/page.tsx

import Link from 'next/link'
import { login, signup } from '@/app/login/actions'
import { type User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/server'

export default async function Home({ user }: { user: User | null }) {    
    const supabase = await createClient()
    const { data: { user: currentUser } } = await supabase.auth.getUser()

    if (currentUser){
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                    Pokémon Slate
            </h1>
            <p>Your Ultimate Pokedex Monitor.</p>
            <p>Keep track of every single Pokémon you attain throughout your journey as a Pokémon Master.</p>

            <p className="mt-8 text-xl">
                Welcome USER:
                <input
                    type="text"
                    value={currentUser.email || ''}
                    disabled
                    className="ml-2 w-auto p-3 border rounded bg-gray-100"
                />
                    </p>
                </div>

                <Link href="/pokedex">
                    <button className="w-32 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 mt-8">
                        Pokédex
                    </button>
                </Link>

            <form action="/account" method="post">
                <button type="submit" className="w-32 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4">
                    Account
                </button>
            </form>

                <form action="/auth/signout" method="post">
                    <button type="submit" className="w-32 py-3 bg-red-600 text-white rounded hover:bg-red-700 mt-4">
                        Sign out
                    </button>
                </form>
            </main>
        )
    }

        return (
            <main className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                        Pokémon Slate
                    </h1>
                    <p>Your Ultimate Pokedex Monitor.</p>
                    <p>Keep track of every single Pokémon you attain throughout your journey as a Pokémon Master.</p>
            
            <div>
                <form method="post" className="flex flex-row gap-2">
                    <label htmlFor="email">EMAIL:</label>
                    <input id="email" name="email" type="email" required /> 
                    <label htmlFor="password">PASSWORD:</label>
                    <input id="password" name="password" type="password" required />
                    <button formAction={login}>SIGN IN</button>
                    <button formAction={signup}>SIGN UP</button>
                </form>
            </div>
        </div>
    </main>
    )
}