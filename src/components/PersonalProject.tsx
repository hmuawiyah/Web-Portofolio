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
            img: "/TASKNEST-SS.jpg",
            linkDetail: "/",
            linkOpen: "/"
        },
        {
            title: "Crumbly",
            desc: "Online Shop",
            img: "/",
            linkDetail: "/Crumbly-SS.jpg",
            linkOpen: "/"
        },
        {
            title: "Voltora",
            desc: "Power Calculator",
            img: "/",
            linkDetail: "/",
            linkOpen: "/"
        },
    ]

    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Personal Project</div>
            <div className="flex flex-col md:flex-row gap-5">
                {data.map((val, i) => (
                    <Card
                        key={i}
                        className="flex h-[300] w-full flex-col justify-between py-4 pb-0! md:w-[35%]"
                    >
                        <CardHeader className="gap-0">
                            <CardTitle className="font-display text-4xl font-normal uppercase text-[#fe4a23]">
                                {val.title}
                            </CardTitle>
                            <p>Web App {val.desc}</p>
                        </CardHeader>

                        <CardContent className="relative flex h-full items-end pb-0 overflow-hidden">
                            <div
                                className={`absolute inset-0 bg-cover bg-top bg-[url(${val.img})] rounded-b-xl`}
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-b-xl" />

                            <div className="relative z-10 flex w-full gap-2 pb-4">
                                <Link href={val.linkDetail} className="w-1/2">
                                    <Button variant="outlineNew" className="w-full">
                                        Detail
                                    </Button>
                                </Link>
                                <Link href={val.linkOpen} className="w-1/2">
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
