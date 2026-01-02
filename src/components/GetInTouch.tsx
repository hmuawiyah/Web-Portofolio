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
    const data = [
        {
            name: "Linkedin",
            link: ""
        },
        {
            name: "Github",
            link: ""
        },
        {
            name: "Behance",
            link: ""
        },
        {
            name: "Email",
            link: ""
        },
    ]

    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Get in touch</div>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">

                <div className="w-full md:w-1/4 h-15">
                    <ButtonGetInTouch><SiLinkedin /> Linkedin</ButtonGetInTouch>
                </div>
                <div className="w-full md:w-1/4 h-15">
                    <ButtonGetInTouch><SiGithub />Github</ButtonGetInTouch>
                </div>
                <div className="w-full md:w-1/4 h-15">
                    <ButtonGetInTouch><ImBehance2 />Behance</ButtonGetInTouch>
                </div>
                <div className="w-full md:w-1/4 h-15">
                    <ButtonGetInTouch><RiInstagramFill className="text-2xl md:text-3xl" />Instagram</ButtonGetInTouch>
                </div>
                {/* <div className="w-full md:w-1/4 h-15">
                    <ButtonGetInTouch><HiMail className="text-3xl" />Email</ButtonGetInTouch>
                </div> */}

            </div>
        </div>
    )
}

export default GetInTouch
