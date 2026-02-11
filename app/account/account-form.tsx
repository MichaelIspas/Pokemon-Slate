// app/account/account-form.tsx
import { type User } from '@supabase/supabase-js'
import Link from 'next/link';

export default function AccountForm({ user }: { user: User | null }) {
    if (!user) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                        Please log in to turn on your Pokédex.
                    </h1>
                </div>
                <form action="/" method="post">
                    <button type="submit" className="w-full py-3 bg-red-800 text-white rounded hover:bg-red-700 mt-4">
                        Home
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                    My Account
                </h1>
            </div>
        
            <div className="space-y-6 mt-8">
            <div>
                <input type="text" 
                value={user.email || ''} 
                disabled 
                className="w-auto p-3 border rounded bg-gray-100" />
            </div>

            <div>  
                <Link href="/pokedex">
                    <button className="w-32 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                        Pokédex
                    </button>
                </Link>

                <form action="/auth/signout" method="post">
                    <button type="submit" className="w-32 py-3 bg-red-600 text-white rounded hover:bg-red-700 mt-4">
                        Sign out
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}