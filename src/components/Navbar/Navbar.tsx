'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link href={'/'}>
        <picture className='navbar_picture'></picture>
      </Link>

      <ul className='navbar_menu'>
        <li></li>
      </ul>
    </nav>
  )
}

export default Navbar