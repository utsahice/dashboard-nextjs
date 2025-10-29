import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const userEmail = req.cookies.get('user_email')?.value;
  if (userEmail) {
    if (pathname === '/login' || pathname === '/signup') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    return NextResponse.next();
  }
  if (pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/login', '/signup', '/dashboard/:path*'],
};
