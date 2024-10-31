'use client'

// accordion components
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// TODO: FIX

const CustomAccordion = ({ accordionItems }: CustomAccordionProps) => {
  return (
    <>
      <Accordion type="single" collapsible className='mt-10 lg:mt-12 2xl:mt-16'>
        {accordionItems.map((item) => {
          return (
            <AccordionItem key={item.id} value={`item-${item.id}`} className='bg-custom-lightBlack text-custom-white px-3'>
              <AccordionTrigger className='text-left font-medium text-xl md:text-xl lg:text-2xl tracking-wider'>{item.title}</AccordionTrigger>
              <AccordionContent className='font-normal text-base md:text-lg'>
                {item.content}
              </AccordionContent>
            </AccordionItem>  
          )
        })}
        
      </Accordion>

    </>
  )
}

export default CustomAccordion;