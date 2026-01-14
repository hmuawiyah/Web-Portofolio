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
import { ImBehance2 } from "react-icons/im"
import { FaInstagram, FaLinkedinIn  } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import Link from "next/link"

const ButtonGetInTouch = ({ children }
    : Readonly<{
        children: React.ReactNode
    }>) => {
    return (
        <Card className="
            flex flex-row items-center p-4 rounded-xl cursor-pointer gap-3
            transition-all ease-in-out duration-300
            bg-[#c7ff04] hover:bg-[#b7e023]
            text-xl font-[500]
            ">{children}</Card>
            
    )
}

const GetInTouch = () => {

    return (
        <div id="getInTouch" className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Get in touch</div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5">

                <div className="w-full md:w-[48%] lg:w-1/4 h-15" >
                <Link href={'https://www.linkedin.com/in/husein-muawiyah/'} target="_blank">
                    <ButtonGetInTouch><FaLinkedinIn  /> Linkedin</ButtonGetInTouch>
                </Link>
                </div>
                <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://github.com/hmuawiyah'} target="_blank">
                    <ButtonGetInTouch><SiGithub />Github</ButtonGetInTouch>
                </Link>
                </div>
                <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'mailto:huseinmuawiyah@gmail.com'} target="_blank">
                    <ButtonGetInTouch><MdOutlineMail className="text-2xl" />Email</ButtonGetInTouch>
                </Link>
                </div>
                {/* <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://www.behance.net/huseinmuawiyah'} target="_blank">
                    <ButtonGetInTouch><ImBehance2 />Behance</ButtonGetInTouch>
                </Link>
                </div> */}
                <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://www.instagram.com/huseinmuawiyah/'} target="_blank">
                    <ButtonGetInTouch><FaInstagram  className="text-2xl" />Instagram</ButtonGetInTouch>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
