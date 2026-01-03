import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiMongodb, SiExpress, SiPostgresql, SiPrisma, SiAdobelightroomclassic, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri"

const Highlight = ({ children }
    : Readonly<{
        children: React.ReactNode;
    }>) => {

    return (
        <div className="rounded-md bg-muted p-2 text-base xl:text-xl">
            {children}
        </div>
    )
}

const Experience = () => {


    const textContent = `Developed 200+ high-quality mockups across various branding materials
    and designed custom Canva templates to boost team efficiency and brand consistency.`

    return (
        // <>
            <div id="experience" className="w-full md:w-[80%]">
                <div className="font-semibold text-2xl mb-4">Experiences</div>
                <div className="flex flex-col lg:flex-row w-full gap-5">
                    <Card className="w-full lg:w-[55%] xl:w-[60%] h-fit">
                        <CardHeader>
                            <div className="flex justify-between text-sm uppercase gap-0">
                                <p>Impro Studio Jakarta</p>
                                <p>2023-2025</p>
                            </div>
                            {/* </CardHeader>
                        <CardHeader> */}
                            <CardTitle className="text-4xl text-[#fe4a23] font-display font-[400] uppercase">Junior Graphic<br />Designer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {textContent}
                        </CardContent>
                    </Card>
                    <div className="flex flex-wrap lg:flex-nowrap flex-row md:flex-col w-full lg:w-[45%] xl:w-[40%] gap-5">
                        <Card className="py-3 w-full">
                            <CardContent className="flex justify-between items-center">
                                <span className="text-sm"> Front End </span>
                                <div className="flex flex-wrap gap-1 md:gap-3">
                                    <Highlight><RiNextjsFill /></Highlight>
                                    <Highlight><RiReactjsLine /></Highlight>
                                    <Highlight><SiTypescript /></Highlight>
                                    <Highlight><RiTailwindCssFill /></Highlight>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="py-3 w-full">
                            <CardContent className="flex justify-between items-center">
                                <span className="text-sm"> Backend End </span>
                                <div className="flex flex-wrap gap-1 md:gap-3">
                                    <Highlight><SiExpress /></Highlight>
                                    <Highlight><SiMongodb /></Highlight>
                                    <Highlight><SiPostgresql /></Highlight>
                                    <Highlight><SiPrisma /></Highlight>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="py-3 w-full">
                            <CardContent className="flex justify-between items-center">
                                <span className="text-sm"> Design </span>
                                <div className="flex flex-wrap gap-1 md:gap-3">
                                    <Highlight><SiAdobephotoshop /></Highlight>
                                    <Highlight><SiAdobeillustrator /></Highlight>
                                    <Highlight><SiAdobelightroomclassic /></Highlight>
                                    <Highlight><SiFigma /></Highlight>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        // </>
    )
}

export default Experience
