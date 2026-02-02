'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function RegionFilter({ currentRegion }: { currentRegion?: string }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const activeRegion = currentRegion || 'national'

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
                <span className="text-xl font-medium text-gray-600 dark:text-yellow-400 md:text-2xl">
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
                <span className="text-xl font-medium text-gray-600 dark:text-yellow-400 md:text-2xl">
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
                <span className="text-xl font-medium text-gray-600 dark:text-yellow-400 md:text-2xl">
                    <br/>
                    152-251
                </span>
            </h2>
            </div>
    )
}