"use client"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { SiGithub } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { Button } from "./ui/button"
import { PiMapPinLineDuotone } from "react-icons/pi"
import FadeContent from "@/components/FadeContent"

const Hero = () => {

    const textContent = `Build and maintain end-to-end full-stack web applications 
    using JavaScript, TypeScript, React, Next.js, and Express, with experience in 
    RESTful APIs and SQL/NoSQL databases. Strong understanding of UI/UX, web design,
    and SEO, supported by 2 years of design experience, enabling the delivery of 
    functional, user-friendly, and visually consistent products.`

    return (
        <FadeContent
            className="flex flex-col justify-center items-center w-full md:w-[80%]"
        >

            <div
                className="
                    relative flex justify-center items-center border shadow-sm
                    rounded-full w-[45%] xl:w-[19%] h-fit aspect-1/1
                ">
                <div className="absolute inset-0 bg-[url(/me-3.jpg)] bg-size-[150%] bg-position-[50%_60%] rounded-full"></div>
                {false && (<div className="absolute inset-0 bg-linear-to-t from-black/20 from-0% to-transparent to-80% rounded-full"></div>)}
                {true && (<div className="absolute inset-0 bg-[url(/openToWork.png)] bg-cover rounded-full"></div>)}
            </div>

            <div className="flex flex-col w-full lg:w-[75%] gap-5">
                <Card className="flex justify-center items-center border-0 shadow-none bg-transparent">
                    <CardHeader className="flex flex-col items-center w-full gap- md:gap-3">
                        <CardTitle className="text-4xl md:text-5xl font-display font-[450] text-center text-primary uppercase">Husein Muawiyah</CardTitle>
                        <CardDescription className="text-lg md:text-xl font-[500] text-foreground">
                            Junior Web Developer
                        </CardDescription>
                        <CardDescription className="
                                flex justify-center items-center text-sm md:text-base py-1 px-3 rounded-md
                                bg-background border border-border font-[500] text-black/80 shadow-md 
                            "><PiMapPinLineDuotone className="text-sm md:text-base mr-2" />Bekasi, Indonesia</CardDescription>
                    </CardHeader>

                    <CardContent className="flex justify-center text-foreground text-center text-xs md:text-base font-medium w-[320] md:w-[730]">
                        {textContent}
                    </CardContent>

                    <CardContent className="flex justify-center items-center gap-0">
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={"https://www.linkedin.com/in/husein-muawiyah/"} target="_blank" className="">
                                <FaLinkedinIn className="w-5! md:w-6! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={"https://github.com/hmuawiyah"} target="_blank">
                                <SiGithub className="w-5! md:w-6! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={"mailto:huseinmuawiyah@gmail.com"} target="_blank">
                                <MdEmail className="w-6! md:w-7! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={"https://www.instagram.com/huseinmuawiyah/"} target="_blank">
                                <RiInstagramFill className="w-6! md:w-7! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </FadeContent>
    )
}

export default Hero


