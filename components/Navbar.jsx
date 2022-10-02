import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image className='object-fill' src='/../public/assets/navLogo.png' alt="/" width='125' height='50'/>
        <ul className='hidden md:flex'>
          <Link href=''>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
          </Link>
          <Link href=''>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link href=''>
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href=''>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
          </Link>
          <Link href=''>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contact Us</li>
          </Link>
        </ul>
        <div className='md:hidden'>
          {/* <AiOutlineClose/> */}
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 p-8'>
          <div className=''>
            <div className='flex w-full items-center justify-between'>
            <Image className='object-fill' src='/../public/assets/navLogo.png' alt="/" width='87' height='35'/>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose size={25}/>
            </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm cursor-pointer'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm cursor-pointer'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm cursor-pointer'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm cursor-pointer'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm cursor-pointer'>Contact us</li>
              </Link>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
