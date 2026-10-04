import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion"
import { Card, CardContent } from "./ui/card"
import { PiGlobeSimpleDuotone, PiImageDuotone, PiLayoutDuotone } from "react-icons/pi"

import { ChevronLeft } from "lucide-react"

import { Accordion as AccordionPrimitive } from "radix-ui"
import FadeContent from "@/components/FadeContent"

const items = [
    {
        icon: <PiGlobeSimpleDuotone />,
        title: "Complete Website Development",
        content: `Building complete websites that are fast, responsive, and easy to use, helping businesses or projects establish a strong online presence.`
    },
    {
        icon: <PiLayoutDuotone />,
        title: "Modern UI Design",
        content: "Designing clean and intuitive interfaces that make websites and apps simple, clear, and comfortable for users."
    },
    {
        icon: <PiImageDuotone />,
        title: "Graphic Design",
        content: "Creating visuals such as social media graphics, promotional materials, and digital assets to make brands look more attractive and professional."
    }
]

const WhatIcanDo = () => {
    return (
        <FadeContent
            className="w-full max-w-6xl"
        >
            <Card className="selection-inverse overflow-hidden rounded-none border-foreground bg-primary text-primary-foreground">

                <CardContent className="flex flex-row flex-wrap justify-center gap-4">

                    <div className="relative z-10 mb-4 w-full md:w-[30%]">
                        <span className="section-kicker mb-6 text-primary-foreground">04 / Services</span>
                        <h2 className="font-display text-5xl uppercase leading-[0.86] tracking-[-0.06em] text-primary-foreground md:text-7xl">What I can do for you</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full md:w-[60%]" defaultValue="item-1">
                        {items.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`} className="border-primary-foreground/40">
                                <AccordionPrimitive.Header className="flex">
                                    <AccordionPrimitive.Trigger
                                        data-slot="accordion-trigger"
                                        className="flex flex-1 items-center justify-between gap-4 rounded-none py-4 text-left text-sm font-medium outline-none transition-colors hover:bg-primary-foreground hover:px-3 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary-foreground disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:-rotate-90"
                                    >
                                        <span className="flex items-center gap-4 text-base md:text-2xl font-medium">
                                            <span className="size-5 shrink-0">{item.icon}</span>
                                            <span>{item.title}</span>
                                        </span>

                                        <ChevronLeft className="pointer-events-none size-4 shrink-0 transition-transform duration-150" />
                                    </AccordionPrimitive.Trigger>
                                </AccordionPrimitive.Header>
                                <AccordionContent className="pt-2 text-sm leading-relaxed text-primary-foreground/80 md:text-base">{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </CardContent>
            </Card>
        </FadeContent>

    )
}

export default WhatIcanDo
