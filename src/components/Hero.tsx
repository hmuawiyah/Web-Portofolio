import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLaptopCode, FaPaintBrush, FaMapMarkerAlt } from "react-icons/fa"
// import { FaMapMarkerAlt } from "react-icons/fa"
import { BiSolidJoystick } from "react-icons/bi"
import { RiFootballFill } from "react-icons/ri"

const Highlight = ({ children }
    : Readonly<{
        children: React.ReactNode;
    }>) => {

    return (
        <div className="flex items-center rounded-md border bg-muted px-4 py-2 text-sm gap-1 md:gap-2">
            {children}
        </div>
    )
}

const Hero = () => {

    const textContent = `Junior Web Developer specializing in React, Next.js, and Tailwind CSS. 
    Experienced with REST APIs, Express.js, and SQL/NoSQL databases. Understands UI/UX 
    basics and on-page SEO, and actively builds real-world projects.`

    return (
        <div className="flex justify-center gap-5 w-full md:w-[80%]">
            <div className="
                relative
                hidden md:flex justify-center items-center border shadow-sm
                rounded-xl w-[40%] xl:w-[22.5%] h-fit aspect-3/4
            ">
                <div className="absolute inset-0 bg-[url(/me-2.jpg)] bg-cover bg-top rounded-xl"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 from-0% to-transparent to-80% rounded-xl"></div>
                {/* <div className="absolute inset-0 bg-linear-to-t from-[#fe4a23] from-0% to-transparent to-80% rounded-xl"></div> */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-[#c7ff0430] from-0% to-transparent to-80% rounded-xl"></div> */}
            </div>
            <div className="flex flex-col w-full lg:w-[75%] gap-5">
                <Card >
                    <CardHeader className="gap-0">
                        <CardTitle className="text-4xl font-display font-[400] text-[#fe4a23] uppercase">Husein Muawiyah</CardTitle>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <CardDescription className="text-lg">Junior Web Developer</CardDescription>
                            <CardDescription className="
                                flex justify-center items-center text-xs py-1 px-3 rounded-md
                                bg-gray-100 border text-black/80
                            "><FaMapMarkerAlt className="text-xs mr-1" />Bekasi</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {textContent}
                    </CardContent>
                </Card>
                <Card className="py-3">
                    <CardContent className="flex flex-col xl:flex-row justify-between items-start xl:items-center">
                        <span className="mb-2 xl:mb-0"> Interest </span>
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


