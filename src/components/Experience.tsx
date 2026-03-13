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
    icon: string
    companyName: string
    subject: string
    yearStart: string
    yearEnd: string
    textContent: string
}

const data: dataProps[] = [
    {
        icon: '/logo/impro.png',
        companyName: 'Impro Studio Jakarta',
        subject: 'Junior Graphic Designer',
        yearStart: 'May 2023',
        yearEnd: '- May 2025',
        textContent:
            `Developed 200+ high-quality, high-resolution mockups and Canva templates 
            designed to be user-friendly and easy to use by non-designers, with well-structured layouts and clear design guidelines to support efficient, consistent, and scalable content production.`
    }, {

        icon: '/logo/gunadarma.png',
        companyName: 'Universitas Gunadarma',
        subject: `Bachelor of Informatics`,
        yearStart: 'Sep 2019',
        yearEnd: '- Dec 2023',
        textContent:
            `Studied web development, algorithms, databases, and software engineering.
        Completed several personal and academic projects focused on fullstack web applications.`
    }
]


const Experience = () => {

    return (
        <div className="w-full md:w-[70%]">
            {data.map((val, index) => (
                <div key={index} className="flex gap-6 md:gap-10">
                    <div className="relative hidden md:flex w-28 shrink-0 flex-col items-center md:w-36">
                        {index < data.length - 1 && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1.5px] bg-border" />
                        )}
                        <div className="relative z-10 font-medium text-foreground bg-card border border-border rounded-xl px-4 py-2 shadow-sm">
                            <p> {val.yearStart} </p> <p> {val.yearEnd} </p>
                        </div>
                    </div>

                    <div className="flex-1 pb-12">
                        <Card>
                            <CardContent className="flex flex-col md:flex-row gap-6">
                                <div
                                    className="w-16 h-16 md:w-18 md:h-18 shrink-0 bg-cover bg-center rounded-md border border-border"
                                    style={{ backgroundImage: `url('${val.icon}')` }}
                                > </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-primary font-display text-2xl md:text-3xl uppercase tracking-wide leading-tight">
                                        {val.subject}
                                    </h3>
                                    <p className="font-semibold text-lg">{val.companyName}</p>
                                    <p className="block md:hidden bg-secondary text-foreground text-sm px-2 py-1 rounded-md w-fit border border-border">{val.yearStart} {val.yearEnd}</p>
                                    <p className="text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
                                        {val.textContent}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience
