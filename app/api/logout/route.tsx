import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const redirectUrl = new URL('/login', req.url);

  const res = NextResponse.redirect(redirectUrl);
  res.cookies.set('user_email', '', { maxAge: 0, path: '/' });

  return res;
}
