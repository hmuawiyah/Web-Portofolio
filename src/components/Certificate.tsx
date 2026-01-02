"use client"

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
import Link from "next/link"
import { useState } from "react"
import { FaAngleUp } from "react-icons/fa6";

const Certificate = () => {
    const [isMore, setIsMore] = useState(false)

    const data = [
        {
            title: "Learning Beginner Back-End with JavaScript",
            org: "Dicoding Indonesia",
            year: "Sep 2025",
            id: "QLZ96QVE7Z5D",
            url: "https://www.dicoding.com/certificates/QLZ96QVE7Z5D"
        },
        {
            title: "Legacy JavaScript Algorithms and Data Structures",
            org: "freeCodeCamp",
            year: "Sep 2025",
            id: "hmuawiyah-ljaads",
            url: "https://freecodecamp.org/certification/hmuawiyah/javascript-algorithms-and-data-structures"
        },
        {
            title: "Front End Development Libraries",
            org: "freeCodeCamp",
            year: "Aug 2025",
            id: "hmuawiyah-fedl",
            url: "https://freecodecamp.org/certification/hmuawiyah/front-end-development-libraries"
        },
        {
            title: "Junior Web Programmer",
            org: "Badan Nasional Sertifikasi Profesi (BNSP)",
            year: "Sep 2023",
            id: "No. 62019 2514 5 0009980 2023",
        },
        {
            title: "Learning Basic of Javascript Programming",
            org: "Dicoding Indonesia",
            year: "Sep 2023",
            id: "81P281D3QPOY",
            url: "https://www.dicoding.com/certificates/81P281D3QPOY"
        },
        // {
        //     title: "Learning Basic of Data Visualisation",
        //     org: "Dicoding Indonesia",
        //     year: "July 2021",
        //     id: "NVP719K1OPR0",
        //     url: "https://www.dicoding.com/certificates/NVP719K1OPR0"
        // },
        // {
        //     title: "Start Programming with Python",
        //     org: "Dicoding Indonesia",
        //     year: "July 2021",
        //     id: "07Z65RLR2XQR",
        //     url: "https://www.dicoding.com/certificates/07Z65RLR2XQR"
        // },
        {
            title: "Learning Basic of Web Programming",
            org: "Dicoding Indonesia",
            year: "Sep 2019",
            id: "1OP8L6D5VZQK",
            url: "https://www.dicoding.com/certificates/1OP8L6D5VZQK"
        },
    ]

    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">Certificates</div>
            <div className={`flex flex-wrap justify-between w-full gap-5 overflow-hidden transition-all duration-300 ease-in-out
            ${isMore ? "h-[900] md:h-[425]" : "h-[150]"}`}>

                {data.map((val, i) => (
                    <Card key={i} className="w-full md:w-[48.7%] h-fit gap-0 py-4">
                        <CardHeader className="flex justify-between">
                            <CardTitle className="text-base text-[#fe4a23] font-semibold uppercase truncate">{val.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                {val.org} ({val.year})
                            </div>
                            <span className="mr-2 text-black/50">
                                Credential ID:
                            </span>
                            <span className="text-black/50">
                                {val.url
                                    ? (
                                        <Link href={val.url} target="_blank" className="underline">
                                            {val.id}
                                        </Link>
                                    )
                                    : (
                                        val.id
                                    )
                                }
                            </span>
                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="flex justify-center w-full ">
                <Button variant={'neon'} onClick={() => setIsMore(!isMore)} 
                className="mt-5">
                    {isMore
                        ? "See less"
                        : "See more"
                    }
                    <FaAngleUp className={`transition-all duration-300
                        ${isMore
                            ? 'rotate-0'
                            : 'rotate-180'
                        }

                        `} />

                </Button>
            </div>

        </div>
    )
}

export default Certificate
