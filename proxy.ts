import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// ADD THIS EXACT BLOCK BELOW YOUR MIDDLEWARE FUNCTION:
export const config = {
  runtime: 'edge',
};
