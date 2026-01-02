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
            title: "TaskNest",
            desc: "Task Management",
            linkDetail: "/",
            linkOpen: "/"
        },
        {
            title: "Crumbly",
            desc: "Online Shop",
            linkDetail: "/",
            linkOpen: "/"
        },
        {
            title: "Voltora",
            desc: "Power Calculator",
            linkDetail: "/",
            linkOpen: "/"
        },
    ]
    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Personal Project</div>
            <div className="flex flex-col md:flex-row gap-5">
                {data.map((val, i) => (
                    <Card key={i} 
                    className="
                        flex flex-col justify-between w-full md:w-[35%] h-[300] py-4 
                        bg-linear-to-t from-[#ffffff80] from-0% to-transparent to-80% bg-transparent
                        ">
                            {/* bg-linear-to-t from-[#c7ff0480] from-0% to-transparent to-80% bg-transparent */}
                        <CardHeader className="gap-0">
                            <CardTitle className="text-4xl text-[#fe4a23] font-display font-[400] uppercase">{val.title}</CardTitle>
                            <p>Web App {val.desc}</p>
                        </CardHeader>
                        <CardContent className="flex gap-2">
                            <Link href={val.linkDetail} className="w-3/6">
                                <Button variant={"outlineNew"} className="w-full">Detail</Button>
                            </Link>
                            <Link href={val.linkOpen} className="w-3/6">
                                <Button variant={"neon"} className="w-full">Open <LuExternalLink /></Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))
                }
            </div>
        </div>
    )
}

export default PersonalProject
