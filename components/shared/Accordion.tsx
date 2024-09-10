'use client'

// accordion components
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


type AccordionItem = {
  id: number;
  title: string;
  content: string;
}

type CustomAccordionProps = {
  accordionItems: AccordionItem[];
}


const CustomAccordion = ({ accordionItems }: CustomAccordionProps) => {
  return (
    <>
      <Accordion type="single" collapsible className='mt-16'>
        {accordionItems.map((item) => {
          return (
            <AccordionItem key={item.id} value={`item-${item.id}`} className='bg-custom-lightBlack text-custom-white px-3'>
              <AccordionTrigger className='font-medium text-4xl tracking-wider'>{item.title}</AccordionTrigger>
              <AccordionContent className='font-normal text-xl'>
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