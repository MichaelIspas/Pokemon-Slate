// File path: ./proxy.ts (or ./src/proxy.ts if using a src directory)
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/proxy'

export async function proxy(request: NextRequest) {
    // update user's auth session
    return await updateSession(request)
}

export const config = {
    // Satisfies the Next.js v16 build constraint for Cloudflare Pages
    runtime: 'experimental-edge', 
    
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
