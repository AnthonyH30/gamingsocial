import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

export default function Questions() {
  return (
    <section className='py-6 px-6 md:px-24 flex flex-col items-center justify-center bg-black text-white text-center gap-8 pb-10'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-red-500 text-3xl md:text-4xl'>Your Questions Answered</h2>
            <p>Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles</p>
        </div>
        <Accordion type="single" collapsible className="w-full md:w-[550px]">
            <AccordionItem value="item-1" className=''>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className='text-left'>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className=''>
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent className='text-left'>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className=''>
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent className='text-left'>
                Yes. Its animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
  )
}
