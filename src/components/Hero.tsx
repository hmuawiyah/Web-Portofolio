"use client"

import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import type { IconType } from "react-icons"
import { RiInstagramFill } from "react-icons/ri"
import { SiGithub } from "react-icons/si"
import FadeContent from "@/components/FadeContent"

import { Button } from "./ui/button"

const textContent =
    "I build and maintain end-to-end web applications with JavaScript, TypeScript, React, Next.js, and Express. My background in visual design helps me turn complex requirements into accessible, responsive, and visually consistent products."

const socialLinks: {
    href: string
    label: string
    Icon: IconType
    external?: boolean
}[] = [
    {
        href: "https://www.linkedin.com/in/husein-muawiyah/",
        label: "LinkedIn Profile",
        Icon: FaLinkedinIn,
        external: true,
    },
    {
        href: "https://github.com/hmuawiyah",
        label: "GitHub Profile",
        Icon: SiGithub,
        external: true,
    },
    {
        href: "mailto:huseinmuawiyah@gmail.com",
        label: "Send Email to Husein",
        Icon: MdEmail,
    },
    {
        href: "https://www.instagram.com/huseinmuawiyah/",
        label: "Instagram Profile",
        Icon: RiInstagramFill,
        external: true,
    },
]

const Hero = () => {
    return (
        <FadeContent className="w-full max-w-6xl border border-foreground bg-background">
            <div className="flex items-center justify-between border-b border-foreground px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em]">
                <span>Portfolio / 2026</span>
                <span className="hidden sm:inline">Web development</span>
            </div>

            <div className="grid md:grid-cols-[minmax(0,1fr)_18rem] lg:grid-cols-[minmax(0,1fr)_18rem]">
                <div className="flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-10">
                    <div>
                        <h1
                            className="mt-4 sm:mt-6 text-[clamp(2.5rem,6.5vw,5rem)] font-display uppercase font-normal leading-[0.9] sm:leading-[0.85] tracking-tight text-primary"
                        >
                            Making Function <br className="hidden sm:inline" />
                            Feel Beautiful
                        </h1>
                    </div>

                    <div className="mt-8 grid grid-cols-[0.75fr_1.25fr] gap-6 border-t border-foreground pt-6 sm:mt-10">
                        <div>
                            <div
                                className="block sm:hidden bg-[url(/me-3.jpg)] bg-[position:50%_80%] bg-size-[auto_160px] h-40 w-full"
                                role="img"
                                aria-label="Photo of Husein Muawiyah"
                            />
                            <div className="hidden sm:flex flex-col gap-1.5">
                                <p className="text-lg sm:text-2xl font-semibold leading-tight">Husein Muawiyah</p>
                                <p className="tet-sm sm:text-base uppercase text-muted-foreground">Full-stack developer</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">

                            <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground md:text-base">{textContent}</p>

                            <div className="sm:hidden flex flex-col gap-1">
                                <p className="text-lg md:text-2xl font-semibold leading-tight">Husein Muawiyah</p>
                                <p className="text-sm md:text-base uppercase text-muted-foreground">Full-stack developer</p>
                            </div>

                            <div />

                            <div className="mt-6 flex flex-wrap gap-3">
                                {socialLinks.map(({ href, label, Icon, external }) => (
                                    <Button key={href} variant="social" size="icon" className="h-8 w-8 md:h-11 md:w-11" asChild>
                                        <Link
                                            href={href}
                                            target={external ? "_blank" : undefined}
                                            rel={external ? "noopener noreferrer" : undefined}
                                            aria-label={label}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
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


