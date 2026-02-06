// app/page.tsx
import Link from 'next/link';
import { login, signup } from '@/app/login/actions'


export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                    Pokémon Slate
            </h1>

            <p>Your Ultimate Pokedex Monitor.</p>
            <p>Keep track of every single Pokémon you attain throughout your journey as a Pokémon Master.</p>
            
            <p>
                <Link href="/pokedex">View your Pokédex</Link>
            </p>
            
            {/* Email and password fields */}
            <form method="post">
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={login}>Log in</button>
                <button formAction={signup}>Sign up</button>
            </form>
            </div>
        </main>
    );
}