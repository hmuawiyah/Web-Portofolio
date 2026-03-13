import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from './ui/card'
import { PiGlobeSimpleDuotone, PiImageDuotone, PiLayoutDuotone } from 'react-icons/pi'

import { HeadsetIcon, PackageIcon, ChevronLeft, RefreshCwIcon } from 'lucide-react'

import { Accordion as AccordionPrimitive } from 'radix-ui'

const items = [
    {
        icon: <PiGlobeSimpleDuotone />,
        title: 'Complete Website Development',
        content: `Building complete websites that are fast, responsive, and easy to use, helping businesses or projects establish a strong online presence.`
    },
    {
        icon: <PiLayoutDuotone />,
        title: 'Modern UI Design',
        content: 'Designing clean and intuitive interfaces that make websites and apps simple, clear, and comfortable for users.'
    },
    {
        icon: <PiImageDuotone />,
        title: 'Graphic Design',
        content: 'Creating visuals such as social media graphics, promotional materials, and digital assets to make brands look more attractive and professional.'
    }
]

const WhatIcanDo = () => {
    return (

        <Card className=" w-full md:w-[80%] bg-transparent border-none shadow-none">

            <CardContent className="flex flex-row flex-wrap justify-center gap-4">

                <p className="font-display leading-[1.2] text-primary font-medium uppercase text-4xl md:text-5xl mb-4 relative z-10 w-full md:w-[30%]">What I can <br /> do for you</p>

                <Accordion type='single' collapsible className='w-full md:w-[60%]' defaultValue='item-1'>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionPrimitive.Header className='flex'>
                                <AccordionPrimitive.Trigger
                                    data-slot='accordion-trigger'
                                    className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:-rotate-90'
                                >
                                    <span className='flex items-center gap-4 text-base md:text-2xl font-medium'>
                                        <span className='size-5 shrink-0'>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </span>

                                    <ChevronLeft className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
                                </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className='text-muted-foreground text-sm md:text-base pt-2'>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>

    )
}

export default WhatIcanDo