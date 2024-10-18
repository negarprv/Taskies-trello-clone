import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';

export function middleware(req: NextRequest) {
    const cookieHeader = req.headers.get('cookie') || ''; 
    const cookies = parse(cookieHeader); 

  if (!cookies.user_id && req.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], 
};