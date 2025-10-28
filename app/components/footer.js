import React from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 pt-10 pb-6 mt-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
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
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-3'>Follow Us</h3>
          <div className='flex space-x-4'>
            <Link
              href='https://facebook.com'
              className='hover:text-blue-500 transition'
              target='_blank'
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href='https://twitter.com'
              className='hover:text-sky-400 transition'
              target='_blank'
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href='https://instagram.com'
              className='hover:text-pink-500 transition'
              target='_blank'
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href='https://linkedin.com'
              className='hover:text-blue-300 transition'
              target='_blank'
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  )
}
