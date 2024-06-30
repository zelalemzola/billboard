import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full  p-3'>
        <div className=' flex items-center text-black gap-4 bg-white p-2 border-2 border-black shadow-md mx-auto w-fit rounded-full'>
        <Link href='/' className='rounded-lg hover:bg-black hover:text-white p-2 rounded-full'>Home</Link>
        <Link href='/' className='rounded-lg hover:bg-black hover:text-white p-2 rounded-full'>clients</Link>
        <Link href='/' className='rounded-lg hover:bg-black hover:text-white p-2 rounded-full'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar