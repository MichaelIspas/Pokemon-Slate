'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function RegionFilter({ currentRegion }: { currentRegion?: string }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const activeRegion = currentRegion || 'kanto'

    const handleClick = (region: string | null) => {
        const params = new URLSearchParams(searchParams.toString())

        if (region) {
            params.set('region', region)
        } else {
            params.delete('region')
        }

        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const isActive = (r: string) => activeRegion === r

    return (
        <div className="mt-6 flex flex-wrap items-end gap-8 md:gap-12">
            {/* National */}
            <h2
                className={`
                text-2xl font-semibold cursor-pointer transition-colors
                ${isActive('national')
                    ? 'text-red-600 dark:text-red-400 underline underline-offset-4'
                    : 'text-red-800 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400'}
                md:text-3xl
            `}
                onClick={() => handleClick(null)}
            >
                National
                <br />
                <span className="text-xl font-medium md:text-2xl">
                    001-1025
                </span>
            </h2>
         
            {/* Kanto */}
            <h2
                className={`
                    text-2xl font-semibold cursor-pointer transition-colors
                    ${isActive('kanto')
                    ? 'text-yellow-600 dark:text-yellow-400 underline underline-offset-4'
                    : 'text-yellow-800 hover:text-yellow-600 dark:text-gray-200 dark:hover:text-yellow-400'}
                md:text-3xl
            `}
                onClick={() => handleClick('kanto')}
            >
                Kanto
                <span className="text-xl font-medium md:text-2xl">
                    <br/>
                    001-151
                </span>
            </h2>

            {/* Johto */}
            <h2
                className={`
                        mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                        ${isActive('johto')
                        ? 'text-blue-400 dark:text-blue-300 underline underline-offset-4'  
                        : 'text-blue-800 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-300'}
                md:text-3xl
            `}
                onClick={() => handleClick('johto')}
            >
                Johto
                <span className="text-xl font-medium md:text-2xl">
                    <br/>
                    152-251
                </span>
            </h2>

            {/* Hoenn */}
            <h2
                className={`
                    mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                    ${isActive('hoenn')
                    ? 'text-emerald-500 dark:text-emerald-300 underline underline-offset-4'
                    : 'text-emerald-700 hover:text-emerald-500 dark:text-emerald-600 dark:hover:text-emerald-300'}
                    md:text-3xl
                `}
                onClick={() => handleClick('hoenn')}
            >
                Hoenn
                <br />
                <span className="text-xl font-medium md:text-2xl">
                    252-386
                </span>
            </h2>

            {/* Sinnoh */}
            <h2
                className={`
                    mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                    text-silver-500 dark:text-silver-300 
                    ${isActive('sinnoh')
                        ? 'underline underline-offset-4'
                        : 'hover:text-silver-400 dark:hover:text-silver-200'}
                    md:text-3xl
                `}
                onClick={() => handleClick('sinnoh')}
            >
                Sinnoh
                <br />
                <span className="text-xl font-medium text-gray-600 dark:text-gray-400 md:text-2xl">                    
                    387-493
                </span>
            </h2>

            {/* Unova */}
            <h2
                className={`
                mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                ${isActive('unova')
                    ? 'text-black dark:text-white underline underline-offset-4'
                    : 'text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white'}
                md:text-3xl
            `}
                onClick={() => handleClick('unova')}
            >
                Unova
                <br />
                <span className="text-xl font-medium text-white md:text-2xl">
                    494-649
                </span>
            </h2>

            {/* Kalos */}
            <h2
                className={`
                    mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                    ${isActive('kalos')
                    ? 'text-blue-500 dark:text-blue-300 underline underline-offset-4'
                    : 'text-blue-700 hover:text-blue-500 dark:text-blue-600 dark:hover:text-blue-300'}
                    md:text-3xl
                `}
                onClick={() => handleClick('kalos')}
            >
                Kalos
                <br />
                <span className="text-xl font-medium md:text-2xl text-red-500">
                    650-721
                </span>
            </h2>

            {/* Alola */}
            <h2
                className={`
                    mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                    ${isActive('alola')
                    ? 'text-orange-500 dark:text-orange-300 underline underline-offset-4'
                    : 'text-orange-700 hover:text-orange-500 dark:text-orange-600 dark:hover:text-orange-300'}
                    md:text-3xl
                `}
                onClick={() => handleClick('alola')}
            >
                Alola
                <br />
                <span className="text-xl font-medium md:text-2xl text-purple-500">
                    722-809
                </span>
            </h2>

            {/* Galar */}
            <h2
                className={`
                    mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                        text-[#00A1E9] dark:text-[#59C2F1]                
                        ${isActive('galar')
                    ? 'underline underline-offset-4'
                    : 'hover:text-[#00B5FF] dark:hover:text-[#7AD7FF]'}
                    md:text-3xl
            `}
                onClick={() => handleClick('galar')}
            >
                Galar
                <br />
                <span className="text-xl font-medium text-red-300 md:text-2xl">                    810-905
                </span>
            </h2>

            {/* Paldea */}
            <h2
                className={`
                    mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                    text-[#E60012] dark:text-[#FF4D4D]
                    ${isActive('paldea')
                        ? 'underline underline-offset-4'
                        : 'hover:text-[#FF3333] dark:hover:text-[#FF8080]'}
                    md:text-3xl
                `}
                onClick={() => handleClick('paldea')}
            >
                Paldea
                <br />
                <span className="text-xl font-medium text-[#6F42C1] md:text-2xl">                    
                    906-1025
                </span>
            </h2>

            
        </div>
    )
}