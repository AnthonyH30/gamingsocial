import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'

export default function LpCards() {

    const list = [1,2,3]

  return (
    <section className='px-12 md:px-0 bg-zinc-900 h-fit md:h-36 w-full flex gap-4 md:gap-20 justify-center flex-wrap py-6'>
        {list.map((item)=> (
            <Card key={item} className="w-[150px] h-fit bg-black border border-white rounded-none md:mt-[-80px] flex flex-col items-center text-center">
                <CardHeader>
                    <img className='w-10' src="/images/icon.png" alt="icone de video game com formas geometricas" />
                </CardHeader>
                <CardContent>
                <CardDescription>Gameplay and Features</CardDescription>
                </CardContent>
            </Card>
        ))}
    </section>
  )
}
