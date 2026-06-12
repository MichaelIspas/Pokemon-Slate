// File path: ./middleware.ts (or ./src/middleware.ts)
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/proxy'

export async function middleware(request: NextRequest) {
    // update user's auth session
    return await updateSession(request)
}

export const config = {
    // Standard runtime configuration for Next.js + Cloudflare
    runtime: 'edge', 
    
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - Common image formats
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
