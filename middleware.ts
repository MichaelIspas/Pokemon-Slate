import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/proxy' // Keeps your existing Supabase logic

export async function middleware(request: NextRequest) {
    // Update the user's auth session exactly as your proxy did
    return await updateSession(request)
}

// CRITICAL CONFIG FOR BOTH NEXT.JS AND CLOUDFLARE
export const config = {
    runtime: 'edge', // Required for Cloudflare Pages compilation
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
