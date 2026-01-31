'use client'

import { useState } from 'react'

interface RegionFilterProps {
    onRegionClick?: (region: 'Kanto' | 'Johto' | null) => void;
}

export default function RegionFilter({ onRegionClick }: RegionFilterProps = {}) {
    const [activeRegion, setActiveRegion] = useState<'Kanto' | 'Johto' | null>(null);

    const handleClick = (region: 'Kanto' | 'Johto') => {
        const newActive = activeRegion === region ? null : region;
        setActiveRegion(newActive);
        onRegionClick?.(newActive);

        console.log('Region toggled →', newActive || 'All regions');
    };

    return (
        <div className="mt-6 flex flex-wrap items-end gap-8 md:gap-12">            
            {/* Kanto */}
            <h2
                className={`
                    text-2xl font-semibold cursor-pointer transition-colors
                    ${activeRegion === 'Kanto'
                    ? 'text-yellow-600 dark:text-yellow-400 underline underline-offset-4'
                    : 'text-yellow-800 hover:text-yellow-600 dark:text-gray-200 dark:hover:text-yellow-400'}
                md:text-3xl
            `}
                onClick={() => handleClick('Kanto')}
            >
                Kanto {activeRegion === 'Kanto' ? '✓' : ''}
                <span className="text-xl font-medium text-yellow-600 dark:text-yellow-400 md:text-2xl">
                    001-151
                </span>
            </h2>

            <h2
                className={`
                        mt-6 text-2xl font-semibold cursor-pointer transition-colors whitespace-nowrap
                        ${activeRegion === 'Johto'
                        ? 'text-blue-400 dark:text-blue-300 underline underline-offset-4'  // stronger active
                        : 'text-gray-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-300'}
                md:text-3xl
            `}
                onClick={() => handleClick('Johto')}
            >
                Johto {activeRegion === 'Johto' ? '✓' : ''}
                <span className="text-xl font-medium text-blue-400 dark:text-blue-400 md:text-2xl">
                    152-251
                </span>
            </h2>
            </div>
    );
}