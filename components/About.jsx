import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <div name='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-2 text-gray-600'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>//I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, omnis reprehenderit id enim quos optio laudantium est ab aliquam eum ad nesciunt necessitatibus, sequi excepturi voluptas natus, quisquam cum autem odio! Deserunt ipsam, architecto veniam autem nam praesentium eos at quae, soluta nihil alias? Incidunt quae consequatur quia, tenetur fugit debitis eligendi assumenda at esse quaerat aut molestias quas molestiae totam saepe eveniet minima quidem soluta? Porro aliquam ad provident architecto nemo, fuga consequuntur eveniet quo quisquam nulla. Voluptatem voluptatum consequuntur, quia impedit necessitatibus tempore nulla laboriosam. Repellendus doloremque impedit molestiae harum accusantium sapiente est necessitatibus aperiam consequatur molestias nihil dicta, quasi itaque ullam! Expedita dolore quaerat repudiandae repellat sunt reprehenderit doloremque! Voluptas cum veniam nam delectus, aspernatur quibusdam porro quidem at dolor saepe molestias facilis quos aut corporis facere quo, quis iusto animi enim perspiciatis. Recusandae quam reprehenderit laboriosam voluptatibus. Itaque eos ad repellendus hic similique, iste atque ratione.</p>
                    <Link href='https://react-spotify-clone-music-player.netlify.app'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image  className='rounded-xl' src='/../public/assets/about.jpg' alt='img' width={500} height={500} />
                </div>
            </div>

        </div>
    )
}

export default About
