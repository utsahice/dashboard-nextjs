import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-gray-900 text-white shadow-md'>
      <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-xl font-bold tracking-wide'>
          <Link href='/'>MyWebsite</Link>
        </h1>

        {/* Navigation Links */}
        <ul className='flex space-x-6'>
          <li>
            <Link
              href='/'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/login'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href='/signup'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
