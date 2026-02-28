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
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdEmail, MdOutlineMail } from "react-icons/md"
import Link from "next/link"
import { RiInstagramFill } from "react-icons/ri"

// const ButtonGetInTouch = ({ children }
//     : Readonly<{
//         children: React.ReactNode
//     }>) => {
//     return (
//         <Card className="
//             flex flex-row items-center p-4 rounded-xl cursor-pointer gap-3
//             transition-all ease-in-out duration-300
//             bg-[#c7ff04] hover:bg-[#b7e023]
//             text-xl font-[500]
//             ">{children}</Card>

//     )
// }

const GetInTouch = () => {

    return (
        <div id="getInTouch" className="w-full md:w-[80%]">
            <div className="bg-primary flex flex-col justify-center items-center p-9 md:p-15 rounded-xl">
                <div className="text-center font-display font-semibold text-background uppercase text-4xl mb-4">Get in touch</div>
                <p className=" text-center font-medium text-background text-base md:text-lg w-full md:w-130 leading-6 mb-10">Want to connect? Feel free to reach out anytime. I am always open to a good conversation and new ideas to collaborate on.</p>
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-1 md:gap-5">

                    <div className="w-full md:w-[48%] lg:w-1/4 h-15" >
                        <Link href={'https://www.linkedin.com/in/husein-muawiyah/'} target="_blank">
                            <Button variant={"link"} className="text-background text-xl font-[500]"><FaLinkedinIn className="w-6! h-6!" /> Linkedin</Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                        <Link href={'https://github.com/hmuawiyah'} target="_blank">
                            <Button variant={"link"} className="text-background text-xl font-[500]"><SiGithub className="w-6! h-6!" />Github</Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                        <Link href={'mailto:huseinmuawiyah@gmail.com'} target="_blank">
                            <Button variant={"link"} className="text-background text-xl font-[500]"><MdEmail className="w-7! h-7!" />Email</Button>
                        </Link>
                    </div>
                    {/* <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                <Link href={'https://www.behance.net/huseinmuawiyah'} target="_blank">
                    <ButtonGetInTouch><ImBehance2 />Behance</ButtonGetInTouch>
                </Link>
                </div> */}
                    <div className="w-full md:w-[48%] lg:w-1/4 h-15">
                        <Link href={'https://www.instagram.com/huseinmuawiyah/'} target="_blank">
                            <Button variant={"link"} className="text-background text-xl font-[500]"><RiInstagramFill className="w-7! h-7!" />Instagram</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
