import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LuExternalLink } from "react-icons/lu"
import Link from "next/link"
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa6"

const PersonalProject = () => {
    const data = [
        {
            title: "EasyTask",
            desc: "Web app for real-time estimation of household electricity consumption and monthly costs.",
            img: "/EasyTask-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/EASYTASK-Web-App-Task-Management",
            linkOpen: "https://easytask-web.vercel.app/"
        },
        {
            title: "Crumbly",
            desc: "E-commerce platform with multi-payment gateway integration and order management.",
            img: "/Crumbly-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/CRUMBLY-Web-App-Online-Shop",
            linkOpen: "https://crumbly-bread.vercel.app/"
        },
        {
            title: "Voltora",
            desc: "Web app for real-time estimation of household electricity consumption and monthly costs.",
            img: "/Voltora-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/VOLTORA-Web-App-Power-Calculator",
            linkOpen: "https://voltora-calculator.vercel.app/"
        },
    ]

    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Personal Project <Badge className="bg-linear-to-r from-cyan-500 to-blue-500 font-semibold">Dummy!</Badge></div>
            <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row gap-5">
                {data.map((val, i) => (
                    <Card
                        key={i}
                        className="flex w-full md:w-[48%] lg:w-[35%] flex-col justify-between py-6"
                    >

                        <CardContent className="flex flex-col overflow-hidden space-y-6">
                            <div
                                className="w-full h-35 bg-cover rounded-md shadow-sm border border-border"
                                style={{ backgroundImage: `url(${val.img})` }}
                            />

                            <div className="flex flex-col space-y-2">
                                <CardTitle className="font-display text-3xl font-normal uppercase text-primary">
                                    {val.title}
                                </CardTitle>
                                <p className="">{val.desc}</p>
                            </div>


                            <div className="flex w-full gap-2">
                                <Link href={val.linkDetail} target="_blank" className="w-1/2">
                                    <Button variant="secondary" className="w-full">
                                        <FaGithub /> Github
                                    </Button>
                                </Link>
                                <Link href={val.linkOpen} target="_blank" className="w-1/2">
                                    <Button variant="default" className="w-full">
                                        Open <LuExternalLink />
                                    </Button>
                                </Link>
                            </div>

                        </CardContent>
                    </Card>

                ))
                }
            </div>
        </div >
    )
}

export default PersonalProject
