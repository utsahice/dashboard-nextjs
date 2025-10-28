import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export function middleware(req : NextRequest) {
  const { pathname } = req.nextUrl;
  const userEmail = req.cookies.get('user_email')?.value;

  if (pathname.startsWith('/')) {
    if (!userEmail) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  if (pathname.startsWith('/login') && userEmail) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login'],
};
