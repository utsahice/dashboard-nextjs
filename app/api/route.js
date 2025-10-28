import { error } from 'console'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { email, password } = await req.json()
  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and passsword are required' },
      { status: 400 },
    )
  }
  const res = NextResponse.json({
    success: true,
  })
  res.cookies.set({
    name: 'user_email',
    value: email,
    path: '/',
    maxAge: 60,
  })
  return res
}
