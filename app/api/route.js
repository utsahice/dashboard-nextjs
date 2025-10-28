import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }
  const res = NextResponse.json({ success: true });

  res.cookies.set({
    name: "user_email",
    value: email,
    httpOnly: true,      
    path: "/",            
    maxAge: 60 * 60 * 24, 
  });

  return res;
}
