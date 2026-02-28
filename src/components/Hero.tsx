import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLaptopCode, FaPaintBrush, FaMapMarkerAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { BiSolidJoystick } from "react-icons/bi"
import { RiFootballFill, RiInstagramFill } from "react-icons/ri"
import { SiGithub } from "react-icons/si"
import { MdEmail, MdOutlineMail } from "react-icons/md"
import Link from "next/link"
import { Button } from "./ui/button"
import { HiOutlineMail } from "react-icons/hi"

const Highlight = ({ children }
    : Readonly<{
        children: React.ReactNode
    }>) => {

    return (
        <div className="flex items-center rounded-md border bg-muted px-4 py-2 text-sm gap-1 md:gap-2">
            {children}
        </div>
    )
}

const Hero = () => {

    const textContent = `Build and maintain end-to-end full-stack web applications 
    using JavaScript, TypeScript, React, Next.js, and Express, with experience in 
    RESTful APIs and SQL/NoSQL databases. Strong understanding of UI/UX, web design,
    and SEO, supported by 2 years of design experience, enabling the delivery of 
    functional, user-friendly, and visually consistent products.`

    return (
        <div className="flex flex-col justify-center items-center w-full md:w-[80%]">
            <div className="
                relative flex justify-center items-center border shadow-sm
                rounded-full w-[40%] xl:w-[22.5%] h-fit aspect-1/1
            ">
                <div className="absolute inset-0 bg-[url(/me-3.jpg)] bg-size-[150%] bg-position-[50%_60%] rounded-full"></div>
                <div className="absolute inset-0 bg-[url(/openToWork.png)] bg-cover rounded-full"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/20 from-0% to-transparent to-80% rounded-full"></div>
            </div>
            <div className="flex flex-col w-full lg:w-[75%] gap-5">
                <Card className="flex justify-center items-center border-0 shadow-none bg-transparent">
                    <CardHeader className="flex flex-col items-center w-full gap- md:gap-3">
                        <CardTitle className="text-3xl md:text-5xl font-display font-[400] text-center text-primary uppercase">Husein Muawiyah</CardTitle>
                        <CardDescription className="text-lg md:text-2xl font-medium text-foreground/80">Junior Web Developer</CardDescription>
                        <CardDescription className="
                                flex justify-center items-center text-sm md:text-lg py-1 px-3 rounded-md
                                bg-gray-100 border text-black/80
                            "><FaMapMarkerAlt className="text-sm md:text-base mr-2" />Bekasi, Indonesia</CardDescription>
                    </CardHeader>

                    <CardContent className="flex justify-center text-foreground text-center text-xs md:text-lg font-medium w-[320] md:w-[730]">
                        {textContent}
                    </CardContent>

                    <CardContent className="flex justify-center items-center gap-0">
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={'https://www.linkedin.com/in/husein-muawiyah/'} target="_blank" className="">
                                <FaLinkedinIn className="w-5! md:w-6! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={'https://github.com/hmuawiyah'} target="_blank">
                                <SiGithub className="w-5! md:w-6! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={'mailto:huseinmuawiyah@gmail.com'} target="_blank">
                                <MdEmail className="w-6! md:w-7! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                        <Button variant={"social"} className="w-12 h-auto aspect-1/1">
                            <Link href={'https://www.instagram.com/huseinmuawiyah/'} target="_blank">
                                <RiInstagramFill className="w-6! md:w-7! h-auto! aspect-1/1" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Hero


