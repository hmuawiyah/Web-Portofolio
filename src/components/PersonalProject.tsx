import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";
import FadeContent from "./FadeContent";

const PersonalProject = () => {
    const data = [
        {
            title: "Voltora",
            desc: "Web app for real-time estimation of household electricity consumption and monthly costs.",
            img: "/Voltora-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/VOLTORA-Web-App-Power-Calculator",
            linkOpen: "https://voltora-calculator.vercel.app/"
        },
        {
            title: "Crumbly",
            desc: "E-commerce platform with multi-payment gateway integration and order management.",
            img: "/Crumbly-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/CRUMBLY-Web-App-Online-Shop",
            linkOpen: "https://crumbly-bread.vercel.app/"
        },
        {
            title: "EasyTask",
            desc: "Web app for real-time estimation of household electricity consumption and monthly costs.",
            img: "/EasyTask-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/EASYTASK-Web-App-Task-Management",
            linkOpen: "https://easytask-web.vercel.app/"
        },
    ]

    return (
        <FadeContent
            className="w-full max-w-6xl"
        >
            <div className="mb-8 grid grid-cols-4 border-b-2 border-foreground pb-5 md:grid-cols-12">
                <span className="section-kicker col-span-2 md:col-span-3">01 / Selected work</span>
                <h2 className="section-title col-span-4 mt-8 text-primary md:col-span-9 md:col-start-4 md:mt-0">Personal projects</h2>
                <Badge variant="outline" className="col-span-2 mt-5 md:col-start-4">Concept projects</Badge>
            </div>
            <div className="grid grid-cols-1 gap-px border border-foreground bg-foreground md:grid-cols-2 lg:grid-cols-3">
                {data.map((val, i) => (
                    <Card
                        key={i}
                        className="group flex w-full flex-col justify-between overflow-hidden rounded-none border-0 pt-0 pb-6"
                    >
                        <Link
                            href={val.linkOpen}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${val.title} project`}
                            className="block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        >
                            <div
                                aria-hidden="true"
                                className="h-56 w-full cursor-pointer bg-cover grayscale outline -outline-offset-1 outline-black/10 transition-[filter] duration-150 group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${val.img})` }}
                            />
                        </Link>
                        <CardContent className="flex flex-col overflow-hidden space-y-6">

                            <div className="flex flex-col space-y-2">
                                <CardTitle className="font-display text-4xl uppercase tracking-[-0.055em] text-primary">
                                    {val.title}
                                </CardTitle>
                                <p className="text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
                            </div>


                            <div className="mt-5 flex w-full gap-2">
                                <Button variant="secondary" className="w-1/2" asChild>
                                    <Link href={val.linkDetail} target="_blank">
                                        <FaGithub /> Github
                                    </Link>
                                </Button>
                                <Button variant="default" className="w-1/2" asChild>
                                    <Link href={val.linkOpen} target="_blank">
                                        Open <LuExternalLink />
                                    </Link>
                                </Button>
                            </div>

                        </CardContent>
                    </Card>

                ))
                }
            </div>
        </FadeContent>
    )
}

export default PersonalProject
