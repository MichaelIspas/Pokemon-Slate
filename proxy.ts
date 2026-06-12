import { NextRequest, NextResponse } from 'next/server';

// 1. REMOVE this block:
// export const config = {
//   runtime: 'edge',
// };

// 2. ENSURE you have a proper function export named 'proxy' or as a default export:
export function proxy(request: NextRequest) {
  // Your proxy logic here
  return NextResponse.next();
}
