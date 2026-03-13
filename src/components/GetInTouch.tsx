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
import { SiGithub } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { RiInstagramFill } from "react-icons/ri"
import { SoftGradient } from "./SoftGradient"

const GetInTouch = () => {

    return (
        <div id="getInTouch" className="w-full md:w-[80%] relative">
            <div className="bg-primary flex flex-col justify-center items-center p-9 md:p-15 rounded-xl relative overflow-hidden">

                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* <SoftGradient /> */}
                    <div
                        className="hidden md:block absolute inset-0 w-full h-full"
                        style={{
                            background: `
                                radial-gradient(ellipse at 50% 8%, 
                                #FF9224 20%, 
                                #FF922450 45%, 
                                #FF922400 60%) 
                        `,
                        }}
                    />
                    <div
                        className="block md:hidden absolute inset-0 w-full h-full"
                        style={{
                            background: `
                                radial-gradient(circle at 50% 3%, 
                                #FF9224 15%, 
                                #FF922450 30%, 
                                #FF922400 45%) 
                            `,
                        }}
                    />
                </div>

                <div className="text-center font-display font-semibold text-background uppercase text-4xl mb-4 relative z-10">Get in touch</div>
                <p className=" text-center font-medium text-background text-lg md:text-xl w-full md:w-130 leading-6 mb-15 relative z-10">
                    Want to connect? Feel free to reach out anytime
                </p>
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-1 md:gap-5 relative z-10">

                    <div className="lg:w-1/4 h-15" >
                        <Link href={'https://www.linkedin.com/in/husein-muawiyah/'} target="_blank">
                            <Button variant={"link"} className="text-background text-sm md:text-xl font-semibold"><FaLinkedinIn className="w-6! h-6!" /><span className="hidden md:block">Linkedin</span></Button>
                        </Link>
                    </div>
                    <div className="lg:w-1/4 h-15">
                        <Link href={'https://github.com/hmuawiyah'} target="_blank">
                            <Button variant={"link"} className="text-background text-sm md:text-xl font-semibold"><SiGithub className="w-6! h-6!" /><span className="hidden md:block">Github</span></Button>
                        </Link>
                    </div>
                    <div className="lg:w-1/4 h-15">
                        <Link href={'mailto:huseinmuawiyah@gmail.com'} target="_blank">
                            <Button variant={"link"} className="text-background text-sm md:text-xl font-semibold"><MdEmail className="w-7! h-7!" /><span className="hidden md:block">Email</span></Button>
                        </Link>
                    </div>
                    <div className="lg:w-1/4 h-15">
                        <Link href={'https://www.instagram.com/huseinmuawiyah/'} target="_blank">
                            <Button variant={"link"} className="text-background text-sm md:text-xl font-semibold"><RiInstagramFill className="w-7! h-7!" /><span className="hidden md:block">Instagram</span></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
