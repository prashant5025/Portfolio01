import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill, BsPersonBadgeFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Typed from 'react-typed'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>let's build something together</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Prashant</span></h1>

                    <Typed
                        className='@apply text-4xl sm:text-5xl md:text-6xl text-gray-600 font-bold'
                        strings={['I am a Full-Stack Developer', 'I am a Data Scientist', 'I am a Content Creator']}
                        typeSpeed={40}
                        backSpeed={40}
                        loop
                    />

                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, aliquam natus commodi ipsum odio iure dolorum provident ipsam facere quidem consectetur harum expedita debitis quis reprehenderit, deserunt quam placeat nam?
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <Link href=''>
                                <FaLinkedin size={24} />
                            </Link>
                        </div>
                        <div className='rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <Link href=''>
                                <FaGithub size={24} />
                            </Link>
                        </div>
                        <div className='rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <Link href=''>
                                <AiOutlineMail size={24} />
                            </Link>
                        </div>
                        <div className='rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <Link href=''>
                                <BsFillPersonLinesFill size={24} />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
