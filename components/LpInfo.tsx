import React from 'react'
import { Button } from './ui/button'

export default function LpInfo() {
  return (
    <section className='flex flex-col-reverse md:flex-row bg-zinc-900 px-6 md:px-24 py-6'>
        <aside className='text-center md:text-left w-full md:w-1/2 text-white h-full flex flex-col items-center justify-center md:items-start my-auto gap-4'>
            <h2 className='text-3xl md:text-4xl md:max-w-[550px]'>Unleash your survival instincts in a futuristic apocalypse.</h2>
            <p className='md:max-w-96 text-sm md:text-lg'>Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.</p>
            <p className='md:max-w-96 text-sm md:text-lg'>Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.</p>
            <div className='flex gap-4 mb-6 md:mb-0 items-center justify-center w-full md:w-fit'>
                <Button className='bg-red-900 text-white hover:bg-red-600 ease-in duration-200' variant={'secondary'}>Entrar</Button>
                <Button className='bg-black text-white hover:text-black ease-in duration-200' variant={'outline'}>Cadastrar</Button>
            </div>
        </aside>
        <figure className='w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0'>
            <img className='w-64 md:w-[330px]' src="images/character-front.png" alt="personagem de jogo de video game de frente com mascara de gás" />
        </figure>
    </section>
  )
}
