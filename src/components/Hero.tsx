import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLaptopCode, FaPaintBrush } from "react-icons/fa"
import { BiSolidJoystick } from "react-icons/bi"
import { RiFootballFill } from "react-icons/ri"

const Highlight = ({ children }
    : Readonly<{
        children: React.ReactNode;
    }>) => {

    return (
        <div className="flex items-center rounded-md bg-muted px-4 py-2 text-sm gap-1 md:gap-2">
            {children}
        </div>
    )
}

const Hero = () => {

    const textContent = `Junior Web Developer specializing in React, Next.js, and Tailwind CSS. 
    Experienced with REST APIs, Express.js, and SQL/NoSQL databases. Understands UI/UX 
    basics and on-page SEO, and actively builds real-world projects.`

    return (
        <div className="flex justify-center gap-5 w-full lg:w-[80%]">
            <div className="
                hidden md:flex justify-center items-center border shadow-sm
                bg-linear-to-t from-[#c7ff0480] from-0% to-transparent to-80% 
                rounded-xl w-[25%] h-auto
            ">
                IMG
            </div>
            <div className="flex flex-col w-full lg:w-[75%] gap-5">
                <Card >
                    <CardHeader className="gap-0">
                        <CardTitle className="text-4xl font-display font-[400] text-[#fe4a23] uppercase">Husein Muawiyah</CardTitle>
                        <CardDescription className="text-lg">Junior Web Developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {textContent}
                    </CardContent>
                </Card>
                <Card className="py-3">
                    <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <span className="mb-2 md:mb-0"> Interest </span>
                        <div className="flex flex-wrap items-center gap-3">
                            <Highlight><FaLaptopCode />Programming</Highlight>
                            <Highlight><FaPaintBrush />Design</Highlight>
                            <Highlight><RiFootballFill />Football</Highlight>
                            <Highlight><BiSolidJoystick />Gaming</Highlight>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Hero


