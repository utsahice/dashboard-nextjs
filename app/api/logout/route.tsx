import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.redirect('/login'); // relative redirect
  res.cookies.set('user_email', '', { maxAge: 0, path: '/' });
  return res;
}
