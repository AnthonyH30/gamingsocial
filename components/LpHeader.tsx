import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function LpHeader() {
  return (
    <header className='bg-stone-900 h-20 w-full flex items-center justify-center md:justify-between md:px-24 sticky top-0'>
        <img className='w-[200px] h-auto' src="/images/logo.png" alt="logo" />
        <nav>
            <ul className='hidden md:flex gap-4'>
                <li><Button variant={'secondary'} className='bg-red-900 text-white hover:bg-red-600 ease-in duration-200'>Entrar</Button></li>
                <li><Button variant={'outline'} className='bg-black text-white hover:text-black ease-in duration-200'>Cadastrar</Button></li>
            </ul>
        </nav>
    </header>
  )
}
