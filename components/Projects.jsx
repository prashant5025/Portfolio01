import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div name='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <div className='relative py-2 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>

                        <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/netflix.jpg' alt='/' width='400px' height='300px' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Netflix Clone</h3>
                            <p className='pb-4 pt-2 text-white text-center'>
                                React js
                            </p>
                            <Link href='/'>
                                <p className='text-center py-3 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>

                    </div>
                    <div className='relative py-2 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>

                        <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/property.jpg' alt='/' width='400px' height='300px' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Property Finder</h3>
                            <p className='pb-4 pt-2 text-white text-center'>
                                React js
                            </p>
                            <Link href='/'>
                                <p className='text-center py-3 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>

                    </div>
                    <div className='relative py-2 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>

                        <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/twitch.jpg' alt='/' width='400px' height='300px' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Twitch Clone</h3>
                            <p className='pb-4 pt-2 text-white text-center'>
                                React js
                            </p>
                            <Link href='/'>
                                <p className='text-center py-3 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>

                    </div>
                    <div className='relative py-2 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>

                        <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/crypto.jpg' alt='/' width='400px' height='300px' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Crypto App</h3>
                            <p className='pb-4 pt-2 text-white text-center'>
                                React js
                            </p>
                            <Link href='/'>
                                <p className='text-center py-3 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects
