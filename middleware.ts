import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be completely empty for now; it just forwards requests
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// THIS IS THE CRITICAL BLOCK FOR CLOUDFLARE
export const config = {
  runtime: 'edge', // Forces Next.js to bundle all middleware for the Edge runtime
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
