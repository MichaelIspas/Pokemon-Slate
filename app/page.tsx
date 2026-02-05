// app/page.tsx
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                    Pokémon Slate
            </h1>

            <p>Your Ultimate Pokedex Monitor.</p>
            <p>Keep track of every single Pokémon you attain throughout your journey as a Pokémon master.</p>
            
            <p>
                <Link href="/pokedex">Check out your Pokédex</Link>
            </p>
            </div>
        </main>
    );
}