import {
    Card,
    CardContent,
} from "@/components/ui/card"
import FadeContent from "@/components/FadeContent"
import { PiMapPinLineDuotone } from "react-icons/pi"

type dataProps = {
    icon: string
    companyName: string
    subject: string
    city: string
    country: string
    yearStart: string
    yearEnd: string
    textContent: string
}

const data: dataProps[] = [
    {
        icon: '/logo/asietex.png',
        companyName: 'PT Asietex Sinar Indopratama',
        subject: 'Junior Web Programmer',
        city: 'Jakarta',
        country: 'Indonesia',
        yearStart: 'Apr 2026',
        yearEnd: '- Now',
        textContent:
            `Analyzed and migrated legacy VB core business modules to a Laravel backend, incorporating user authentication and bug fixes. 
            Frontend redesign converted outdated VB desktop grids into a modern, responsive, and user-friendly web interface.`
    }, {
        icon: '/logo/impro.png',
        companyName: 'Impro Studio',
        subject: 'Junior Graphic Designer',
        city: 'Jakarta',
        country: 'Indonesia',
        yearStart: 'May 2023',
        yearEnd: '- May 2025',
        textContent:
            `Developed 200+ high-quality, high-resolution mockups and Canva templates 
            designed to be user-friendly and easy to use by non-designers, with well-structured layouts and clear design guidelines to support efficient, consistent, and scalable content production.`
    }, {

        icon: '/logo/gunadarma.png',
        companyName: 'Universitas Gunadarma',
        subject: `Bachelor of Informatics`,
        city: 'Jakarta',
        country: 'Indonesia',
        yearStart: 'Sep 2019',
        yearEnd: '- Dec 2023',
        textContent:
            `Studied web development, algorithms, databases, and software engineering.
        Completed several personal and academic projects focused on fullstack web applications.`
    }
]


const Experience = () => {

    return (
        <FadeContent
            className="w-full max-w-6xl"
        >
            <div className="mb-10 grid grid-cols-4 border-b-2 border-foreground pb-5 md:grid-cols-12">
                <span className="section-kicker col-span-2 md:col-span-3">02 / Journey</span>
                <h2 className="section-title col-span-4 mt-8 text-primary md:col-span-9 md:col-start-4 md:mt-0">Experience &amp; education</h2>
            </div>

            {data.map((val, index) => (
                <div key={index} className="flex gap-6 md:gap-10">
                    <div className="relative hidden md:flex flex-col items-center">
                        {index < data.length - 1 && (
                            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-foreground" />
                        )}
                        <div className="relative z-10 border border-foreground bg-background px-4 py-2 font-mono text-xs font-bold uppercase tabular-nums">
                            <p> {val.yearStart} </p> <p> {val.yearEnd} </p>
                        </div>
                    </div>

                    <div className="flex-1 pb-12">
                        <Card className="rounded-none">
                            <CardContent className="flex flex-col md:flex-row gap-4">
                                <p className="block w-fit border border-foreground px-2 py-1 font-mono text-xs uppercase tabular-nums md:hidden">{val.yearStart} {val.yearEnd}</p>

                                <div
                                    className="w-16 h-16 md:w-18 md:h-18 shrink-0 bg-cover bg-center rounded-md border border-border"
                                    style={{ backgroundImage: `url('${val.icon}')` }}
                                ></div>

                                <div className="flex flex-col gap-4">
                                    <h3 className="font-display text-3xl uppercase leading-tight tracking-[-0.05em] text-primary md:text-3xl">
                                        {val.subject}
                                    </h3>

                                    <div className="">
                                        <p className="font-semibold text-lg">{val.companyName}</p>
                                        <p className="flex items-center text-sm leading-relaxed text-muted-foreground md:mt-0">
                                            <PiMapPinLineDuotone className="me-2 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                            {val.city}, {val.country}
                                        </p>
                                    </div>

                                    <p className="text-sm leading-relaxed text-muted-foreground md:mt-0">
                                        {val.textContent}
                                    </p>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}

        </FadeContent>
    )
}

export default Experience
