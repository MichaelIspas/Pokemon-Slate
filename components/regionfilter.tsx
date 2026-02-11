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
        <div className="flex flex-nowrap gap-2 overflow-x-auto items-start mt-4">            
        
        {/* National */}
            <button
                onClick={() => handleClick(null)}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('national')
                        ? 'bg-red-100text-red-600 dark:text-red-400 underline underline-offset-4'
                        : 'text-red-800 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400'}
  `}
            >
                <span>National</span>
                <span className="text-[14px] leading-none opacity-70">001-1025</span>
            </button>

         
            {/* Kanto */}
            <button
                onClick={() => handleClick('kanto')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('kanto')
                        ? 'text-yellow-600 underline underline-offset-4'
                        : 'text-yellow-800 hover:text-yellow-600 dark:text-gray-200 dark:hover:text-yellow-400'}
                `}
                >
                <span>Kanto</span>
                <span className="text-[14px] leading-none opacity-70">
                    001-151
                </span>
            </button>


            {/* Johto */}
            <button
                onClick={() => handleClick('johto')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('johto')
                        ? 'text-blue-400 dark:text-blue-300 underline underline-offset-4'
                        : 'text-blue-800 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-300'}
  `}
            >
                <span>Johto</span>
                <span className="text-[14px] leading-none opacity-70">152-251</span>
            </button>


            {/* Hoenn */}
            <button
                onClick={() => handleClick('hoenn')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('hoenn')
                        ? 'text-emerald-500 dark:text-emerald-300 underline underline-offset-4'
                        : 'text-emerald-700 hover:text-emerald-500 dark:text-emerald-600 dark:hover:text-emerald-300'}
  `}
            >
                <span>Hoenn</span>
                <span className="text-[14px] leading-none opacity-70">252-386</span>
            </button>


            {/* Sinnoh */}
            <button
                onClick={() => handleClick('sinnoh')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('sinnoh')
                        ? 'text-gray-500 dark:text-gray-300 underline underline-offset-4'
                        : 'text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-200'}
  `}
            >
                <span>Sinnoh</span>
                <span className="text-[14px] leading-none opacity-70">387-493</span>
            </button>


            {/* Unova */}
            <button
                onClick={() => handleClick('unova')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('unova')
                        ? 'text-black dark:text-white underline underline-offset-4'
                        : 'text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white'}
  `}
            >
                <span>Unova</span>
                <span className="text-[14px] leading-none opacity-70">494-649</span>
            </button>


            {/* Kalos */}
            <button
                onClick={() => handleClick('kalos')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('kalos')
                        ? 'text-blue-500 dark:text-blue-300 underline underline-offset-4'
                        : 'text-blue-700 hover:text-blue-500 dark:text-blue-600 dark:hover:text-blue-300'}
  `}
            >
                <span>Kalos</span>
                <span className="text-[14px] leading-none opacity-70 text-red-500">650-721</span>
            </button>


            {/* Alola */}
            <button
                onClick={() => handleClick('alola')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('alola')
                        ? 'text-orange-500 dark:text-orange-300 underline underline-offset-4'
                        : 'text-orange-700 hover:text-orange-500 dark:text-orange-600 dark:hover:text-orange-300'}
  `}
            >
                <span>Alola</span>
                <span className="text-[14px] leading-none opacity-70 text-purple-500">722-809</span>
            </button>


            {/* Galar */}
            <button
                onClick={() => handleClick('galar')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('galar')
                        ? 'text-[#00A1E9] dark:text-[#59C2F1] underline underline-offset-4'
                        : 'text-[#00A1E9] hover:text-[#00B5FF] dark:text-[#59C2F1] dark:hover:text-[#7AD7FF]'}
  `}
            >
                <span>Galar</span>
                <span className="text-[14px] leading-none opacity-70 text-red-300">810-905</span>
            </button>


            {/* Paldea */}
            <button
                onClick={() => handleClick('paldea')}
                className={`
                        shrink-0 px-3 py-1 rounded-full font-medium text-xl
                        flex flex-col items-center leading-tight transition-colors
                        ${isActive('paldea')
                        ? 'text-[#E60012] dark:text-[#FF4D4D] underline underline-offset-4'
                        : 'text-[#E60012] hover:text-[#FF3333] dark:text-[#FF4D4D] dark:hover:text-[#FF8080]'}
  `}
            >
                <span>Paldea</span>
                <span className="text-[14px] leading-none opacity-70 text-[#6F42C1]">906-1025</span>
            </button>

        </div>
    )
}