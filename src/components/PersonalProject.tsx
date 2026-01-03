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
import { LuExternalLink } from "react-icons/lu"
import Link from "next/link"

const PersonalProject = () => {
    const data = [
        {
            title: "EasyTask",
            desc: "Task Management",
            img: "/EasyTask-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/EASYTASK-Web-App-Task-Management",
            linkOpen: "https://easytask-web.vercel.app/"
        },
        {
            title: "Crumbly",
            desc: "Online Shop",
            img: "/Crumbly-SS.jpg",
            linkDetail: "https://github.com/hmuawiyah/CRUMBLY-Web-App-Online-Shop",
            linkOpen: "https://crumbly-bread.vercel.app/"
        },
        {
            title: "Voltora",
            desc: "Power Calculator",
            img: "/",
            linkDetail: "#",
            linkOpen: "#"
        },
    ]

    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Personal Project</div>
            <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row gap-5">
                {data.map((val, i) => (
                    <Card
                        key={i}
                        className="flex h-[300] w-full md:w-[48%] lg:w-[35%] flex-col justify-between py-4 pb-0!"
                    >
                        <CardHeader className="gap-0">
                            <CardTitle className="font-display text-4xl font-normal uppercase text-[#fe4a23]">
                                {val.title}
                            </CardTitle>
                            <p>Web App {val.desc}</p>
                        </CardHeader>

                        <CardContent className="relative flex h-full items-end pb-0 overflow-hidden">
                            <div
                                className={`absolute inset-0 bg-cover bg-top rounded-b-xl`}
                                style={{ backgroundImage: `url(${val.img})` }}

                                // className={`absolute inset-0 bg-cover bg-top bg-[url(/Crumbly-SS.jpg)] rounded-b-xl`}
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 from-0% to-transparent to-80% rounded-b-xl" />

                            <div className="relative z-10 flex w-full gap-2 pb-4">
                                <Link href={val.linkDetail} target="_blank" className="w-1/2">
                                    <Button variant="outlineNew" className="w-full">
                                        Detail
                                    </Button>
                                </Link>
                                <Link href={val.linkOpen} target="_blank" className="w-1/2">
                                    <Button variant="neon" className="w-full">
                                        Open <LuExternalLink />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                ))
                }
            </div>
        </div>
    )
}

export default PersonalProject
