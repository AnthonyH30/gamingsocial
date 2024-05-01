import React from 'react'
import { Badge } from './ui/badge'

export default function LpBlock() {
  return (
    <section className='bg-black flex py-6 flex-col md:flex-row px-6 gap-10 md:gap-0'>
        <figure className='w-full md:w-1/2 flex items-center justify-center'>
            <img className='w-64 md:w-80' src="/images/character.png" alt="personagem de um jogo de video game" />
        </figure>
        <article className='text-white w-full md:w-1/2 flex flex-col gap-4 flex flex-col items-center md:items-start text-center md:text-left md:my-auto'>
            <Badge className='w-fit text-red-600'>Novidade</Badge>
            <h2 className='text-xl md:text-4xl'>Intense Survival Gameplay</h2>
            <p className='text-xs md:text-sm max-w-[450px]'>Test your skills and instincts as you navigate through hostile environments, scavenge for resources, and make crucial choices to survive in a world on the brink of collapse.</p>
            <div className='flex flex-nowrap gap-4 items-center'>
                <img className='w-10' src="/images/sword.svg" alt="icone de uma espada" />
                <p>Unveiling Clarity</p>
            </div>
            <div className='flex flex-nowrap gap-4 items-center'>
                <img className='w-10' src="/images/shield.svg" alt="icone de um escudo" />
                <p>Unveiling Clarity</p>
            </div>
        </article>
    </section>
  )
}
