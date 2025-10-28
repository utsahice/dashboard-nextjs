import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(
    new URL('/', req.url || 'http://localhost:3000'),
  )
  res.cookies.set('user_email', '', { maxAge: 0, path: '/' }) // delete cookie
  return res
}
