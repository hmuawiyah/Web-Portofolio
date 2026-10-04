"use client"
import { FaLinkedinIn } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { SiGithub } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { Button } from "./ui/button"
import { PiMapPinLineDuotone } from "react-icons/pi"
import FadeContent from "@/components/FadeContent"

const Hero = () => {

    const textContent = `I build and maintain end-to-end web applications with JavaScript, TypeScript, React, Next.js, and Express. My background in visual design helps me turn complex requirements into accessible, responsive, and visually consistent products.`

    return (
        <FadeContent className="w-full max-w-6xl border border-foreground bg-background">
            <div className="flex items-center justify-between border-b border-foreground px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em]">
                <span>Portfolio / 2026</span>
                <span className="hidden sm:inline">Web development</span>
            </div>

            {/* <div className="grid md:grid-cols-[minmax(0,1fr)_18rem] lg:grid-cols-[minmax(0,1fr)_22rem]"> */}
            <div className="grid md:grid-cols-[minmax(0,1fr)_18rem] lg:grid-cols-[minmax(0,1fr)_18rem]">
                <div className="flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-10">
                    <div>
                        <div className="flex items-center justify-between gap-4">
                            <span className="section-kicker">Husein Muawiyah</span>
                            {/* Mobile-only avatar photo */}
                            <div
                                className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-foreground bg-primary md:hidden"
                                role="img"
                                aria-label="Photo of Husein Muawiyah"
                            >
                                <div className="h-full w-full bg-[url(/me-3.jpg)] bg-cover bg-[position:50%_35%]" />
                            </div>
                        </div>

                        <h1
                            className="mt-4 sm:mt-6 text-[clamp(2.5rem,6.5vw,5rem)] font-display uppercase font-normal leading-[0.9] sm:leading-[0.85] tracking-tight text-primary"
                        >
                            Making Function <br className="hidden sm:inline" />
                            Feel Beautiful
                        </h1>
                    </div>

                    <div className="mt-8 sm:mt-10 grid gap-6 border-t border-foreground pt-6 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <p className="text-lg sm:text-xl font-bold leading-tight">Full-stack developer</p>
                            <div className="mt-3 sm:mt-4 flex items-center text-sm font-bold text-foreground">
                                <PiMapPinLineDuotone className="me-2 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                <span>Bekasi, Indonesia</span>
                            </div>
                        </div>
                        <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground md:text-base">{textContent}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button variant={"social"} size="icon" className="h-11 w-11 min-h-[44px] min-w-[44px]" asChild>
                            <Link href={"https://www.linkedin.com/in/husein-muawiyah/"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                <FaLinkedinIn className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant={"social"} size="icon" className="h-11 w-11 min-h-[44px] min-w-[44px]" asChild>
                            <Link href={"https://github.com/hmuawiyah"} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <SiGithub className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant={"social"} size="icon" className="h-11 w-11 min-h-[44px] min-w-[44px]" asChild>
                            <Link href={"mailto:huseinmuawiyah@gmail.com"} aria-label="Send Email to Husein">
                                <MdEmail className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant={"social"} size="icon" className="h-11 w-11 min-h-[44px] min-w-[44px]" asChild>
                            <Link href={"https://www.instagram.com/huseinmuawiyah/"} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                                <RiInstagramFill className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Desktop photo column */}
                <div className="relative hidden overflow-hidden border-s border-foreground bg-primary md:block">
                    <div
                        className="absolute inset-0 bg-[url(/me-3.jpg)] bg-cover bg-[position:50%_42%]"
                        role="img"
                        aria-label="Photo of Husein Muawiyah"
                    />
                </div>
            </div>
        </FadeContent>
    )
}

export default Hero


