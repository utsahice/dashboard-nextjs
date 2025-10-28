import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.redirect(
    new URL('/login', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  )
  res.cookies.set('user_email', '', { maxAge: 0, path: '/' }) // delete cookie
  return res
}
