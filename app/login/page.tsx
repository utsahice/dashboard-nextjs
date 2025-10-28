'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='p-8 bg-white shadow-md rounded-md w-80'
      >
        <h1 className='text-2xl mb-4 font-semibold text-center'>Login</h1>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full mb-5 p-5 border rounded'
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full mb-5 p-5 border rounded'
          required
        />

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded'
        >
          Log in
        </button>
      </form>
    </div>
  )
}
