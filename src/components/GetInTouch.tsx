import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { SiLinkedin, SiGithub } from "react-icons/si"
// import { FaBehanceSquare } from "react-icons/fa"
import { ImBehance2 } from "react-icons/im"
import { HiMail } from "react-icons/hi"
import { FaInstagramSquare } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import Link from "next/link"

const ButtonGetInTouch = ({ children }
    : Readonly<{
        children: React.ReactNode;
    }>) => {
    return (
        <Card className="
            flex flex-row items-center p-4 rounded-xl cursor-pointer gap-3
            transition-all ease-in-out duration-300
            bg-[#c7ff04] hover:bg-[#b7e023]
            text-xl font-[500]
            ">{children}</Card>
            
            // bg-linear-to-t from-[#c7ff0490] from-0% to-transparent to-100%
            // hover:bg-linear-to-t hover:from-[#abd02790] hover:from-0% hover:to-transparent hover:to-100%
    )
}

const GetInTouch = () => {
    // const data = [
    //     {
    //         name: "Linkedin",
    //         link: "https://www.linkedin.com/in/husein-muawiyah/"
    //     },
    //     {
    //         name: "Github",
    //         link: "https://github.com/hmuawiyah"
    //     },
    //     {
    //         name: "Behance",
    //         link: "https://www.behance.net/huseinmuawiyah"
    //     },
    //     {
    //         name: "Email",
    //         link: "huseinmuawiyah@gmail.com"
    //     },
    // ]

    return (
        <div id="getInTouch" className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Get in touch</div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5">

                <div className="w-full md:w-[48%] lg:w-1/4 h-15" >
                <Link href={'https://www.linkedin.com/in/husein-muawiyah/'} target="_blank">
                    <ButtonGetInTouch><SiLinkedin /> Linkedin</ButtonGetInTouch>
                </Link>
                </div>
                <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://github.com/hmuawiyah'} target="_blank">
                    <ButtonGetInTouch><SiGithub />Github</ButtonGetInTouch>
                </Link>
                </div>
                <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://www.behance.net/huseinmuawiyah'} target="_blank">
                    <ButtonGetInTouch><ImBehance2 />Behance</ButtonGetInTouch>
                </Link>
                </div>
                <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://www.instagram.com/huseinmuawiyah/'} target="_blank">
                    <ButtonGetInTouch><RiInstagramFill className="text-2xl md:text-3xl" />Instagram</ButtonGetInTouch>
                </Link>
                </div>
                {/* <div className="w-full md:w-1/2 lg:w-1/4 h-15">
                    <ButtonGetInTouch><HiMail className="text-3xl" />Email</ButtonGetInTouch>
                </div> */}

            </div>
        </div>
    )
}

export default GetInTouch
