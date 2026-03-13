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
import { FaAngleUp } from "react-icons/fa6"
import { LuExternalLink } from "react-icons/lu"

interface CertificateData {
    icon: string
    title: string
    org: string
    year: string
    id: string
    url?: string
}

const Certificate = () => {
    const [isMore, setIsMore] = useState<boolean>()

    const data: CertificateData[] = [
        {
            icon: '/logo/dicoding.png',
            title: "Introduction to Artificial Intelligence",
            org: "Dicoding Indonesia",
            year: "Feb 2026",
            id: "98XW0RWJLXM3",
            url: "https://www.dicoding.com/certificates/98XW0RWJLXM3"
        },
        {
            icon: '/logo/dicoding.png',
            title: "Learning Front-End Web Development for Beginners",
            org: "Dicoding Indonesia",
            year: "Feb 2026",
            id: "98XW0RJ2LXM3",
            url: "https://www.dicoding.com/certificates/98XW0RJ2LXM3"
        },
        {
            icon: '/logo/dicoding.png',
            title: "Learning Beginner Back-End with JavaScript",
            org: "Dicoding Indonesia",
            year: "Sep 2025",
            id: "QLZ96QVE7Z5D",
            url: "https://www.dicoding.com/certificates/QLZ96QVE7Z5D"
        },
        {
            icon: '/logo/fcc.png',
            title: "Legacy JavaScript Algorithms and Data Structures",
            org: "freeCodeCamp",
            year: "Sep 2025",
            id: "hmuawiyah-ljaads",
            url: "https://freecodecamp.org/certification/hmuawiyah/javascript-algorithms-and-data-structures"
        },
        {
            icon: '/logo/fcc.png',
            title: "Front End Development Libraries",
            org: "freeCodeCamp",
            year: "Aug 2025",
            id: "hmuawiyah-fedl",
            url: "https://freecodecamp.org/certification/hmuawiyah/front-end-development-libraries"
        },
        {
            icon: '/logo/bnsp.png',
            title: "Junior Web Programmer",
            org: "BNSP",
            year: "Sep 2023",
            id: "No. 62019 2514 5 0009980 2023",
            url: "https://drive.google.com/file/d/1PuGIoqDNk4FtWgzqhsM8Ol3yjlH-iWzE/view"
        },
        {
            icon: '/logo/gunadarma.png',
            title: "Basic Web Application Development",
            org: "Uninversitas Gunadarma",
            year: "Jun 2023",
            id: "538265",
            url: "https://drive.google.com/file/d/1J1c0_M-CLy-brKZTw2iSDo2D95ynvQ_-/view"
        },
        {
            icon: '/logo/dicoding.png',
            title: "Learning Basic of Javascript Programming",
            org: "Dicoding Indonesia",
            year: "Sep 2022",
            id: "81P281D3QPOY",
            url: "https://www.dicoding.com/certificates/81P281D3QPOY"
        },
        {
            icon: '/logo/gunadarma.png',
            title: "Go-Lang for Intermediate",
            org: "Uninversitas Gunadarma",
            year: "Aug 2022",
            id: "439646",
            url: "https://drive.google.com/file/d/1IBIcJWmhsYEgjRo8zO8vZGfWN3sMLowQ/view"
        },
        {
            icon: '/logo/gunadarma.png',
            title: "Go-Lang for Beginner",
            org: "Uninversitas Gunadarma",
            year: "Aug 2021",
            id: "333650",
            url: "https://drive.google.com/file/d/1jTz0cetbIlJDuhw8T660Ke9g6BE27bFi/view"
        },
        {
            icon: '/logo/efset.png',
            title: "EF SET - B1 Intermediate English",
            org: "EF Standard English Test",
            year: "Jul 2021",
            id: "Vi21gL",
            url: "https://cert.efset.org/Vi21gL"
        },
        {
            icon: '/logo/gunadarma.png',
            title: "Fundamental Web Programming",
            org: "Uninversitas Gunadarma",
            year: "Aug 2020",
            id: "180004",
            url: "https://drive.google.com/file/d/11ZmkRZ0AdJY8fKFPIheMe2zKLqRB5OEd/view"
        },
        {
            icon: '/logo/dicoding.png',
            title: "Learning Basic of Web Programming",
            org: "Dicoding Indonesia",
            year: "Sep 2019",
            id: "1OP8L6D5VZQK",
            url: "https://www.dicoding.com/certificates/1OP8L6D5VZQK"
        },
    ]

    return (
        <div className="w-full md:w-[80%]">
            <div className="font-semibold text-2xl mb-4">
                Certificates

                <Button variant={'default'} size={'sm'} onClick={() => setIsMore(!isMore)}
                    className="ml-2 p-0! h-6! w-6!">

                    <FaAngleUp className={`transition-all duration-300
                        ${isMore
                            ? 'rotate-0'
                            : 'rotate-180'
                        }
                        `} />

                </Button>

            </div>
            <div className={`flex flex-wrap justify-between w-full gap-4 overflow-hidden transition-all duration-300 ease-in-out
            ${isMore ? "h-[2050] md:h-[980]" : "h-[330] md:h-[210]"}`}>

                {data.map((val, i) => (
                    <Card key={i} className="w-full md:w-[47.9%] xl:w-[32%] h-35 md:h-45 gap-0 py-4">
                        <CardContent className="flex flex-col justify-between h-full">
                            <div className="flex gap-2">
                                <div
                                    className="hidden md:block w-10 h-10 shrink-0 bg-cover bg-center rounded-md border border-border"
                                    style={{ backgroundImage: `url('${val.icon}')` }}
                                ></div>
                                <div className="flex flex-col gap-2">
                                    <CardTitle className="text-sm text-primary font-semibold">{val.title}</CardTitle>
                                    <div className="text-xs font-semibold">
                                        {val.org} ({val.year})
                                    </div>
                                    <div className="hidden md:block text-xs min-h-0!">
                                        <span className="mr-1 text-foreground">
                                            Credential ID:
                                        </span>
                                        <span className="text-foreground">
                                            {val.id}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {val.url ? (
                                <Button variant={'secondary'} size={'sm'} className="text-xs" asChild>
                                    <Link href={val.url} target="_blank">
                                        View Certificate <LuExternalLink />
                                    </Link>
                                </Button>
                            ) : (
                                <Button variant={'secondary'} size={'sm'} className="text-xs" disabled>
                                    No Link Available <LuExternalLink />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="flex justify-center w-full ">
                <Button variant={'default'} onClick={() => setIsMore(!isMore)}
                    className="mt-5">
                    {isMore
                        ? "Show less"
                        : "Show more"
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
