import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export function proxy(request: NextRequest) {
  return NextResponse.next()
}
