import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  // Your proxy or middleware logic here
  return NextResponse.next();
}

// Optional: Keep your matcher config if you use one
export const config = {
  matcher: '/api/:path*',
};
