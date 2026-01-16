import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiMongodb, SiExpress, SiPostgresql, SiPrisma, SiAdobelightroomclassic, SiTypescript } from "react-icons/si"
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri"

const Highlight = ({ children }
    : Readonly<{
        children: React.ReactNode
    }>) => {

    return (
        <div className="rounded-md bg-muted p-2 text-base xl:text-xl">
            {children}
        </div>
    )
}

type dataProps = {
    companyName: string
    subject: string
    year: string
    textContent: string
}

const data: dataProps[] = [
    {
        companyName: 'Impro Studio Jakarta',
        subject: 'Junior Graphic Designer',
        year: 'May 2023 - May 2025',
        textContent:
        `Developed 200+ high-quality mockups across various branding materials and
        designed custom Canva templates to boost team efficiency and brand consistency.`
    }, {
        
        companyName: 'Universitas Gunadarma',
        subject: `Informatics`,
        year: 'Sep 2019 - Dec 2023',
        textContent:
            `Studied web development, algorithms, databases, and software engineering.
        Completed several personal and academic projects focused on fullstack web applications.`
    }
]


const Experience = () => {

    return (
        <div className="flex flex-wrap w-full md:w-[80%] justify-between">

            <div className="w-full lg:w-[55%] xl:w-[60%]">
                <div className="font-semibold text-2xl mb-4">Experience & Education</div>
                <div className="flex flex-col w-full gap-5">
                    {data.map((val, i) => (
                        <Card className="w-full h-fit" key={i}>
                            <CardHeader>
                                <div className="flex flex-col md:flex-row justify-start md:justify-between text-sm md:text-base uppercase gap-0 mb-3">
                                    <p>{val.companyName}</p>
                                    <p className="capitalize text-gray-500">{val.year}</p>
                                </div>
                                <CardTitle className="flex flex-wrap w-[300] text-4xl text-[#fe4a23] font-display font-[400] uppercase">{val.subject}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm md:text-base">
                                {val.textContent}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-[43%] xl:w-[38%]">
                <div className="mb-20 md:mb-0"></div>
                <div className="font-semibold text-2xl mb-4">Skills</div>
                <div className="flex flex-wrap lg:flex-nowrap flex-row md:flex-col w-full gap-5">
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
    )
}

export default Experience
