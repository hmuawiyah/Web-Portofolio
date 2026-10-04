"use client"

import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"
import { FaAngleUp } from "react-icons/fa6"
import { LuExternalLink } from "react-icons/lu"
import FadeContent from "@/components/FadeContent"

interface CertificateData {
    icon: string
    title: string
    org: string
    year: string
    id: string
    url?: string
}

const Certificate = () => {
    const [isMore, setIsMore] = useState(false)

    const data: CertificateData[] = [
        {
            icon: '/logo/ms.png',
            title: "Fundamentals of UI/UX Design",
            org: "Microsoft",
            year: "Feb 2026",
            id: "O0JANXIP9LDS",
            url: "https://www.coursera.org/account/accomplishments/verify/O0JANXIP9LDS"
        },
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
        <FadeContent
            className="w-full max-w-6xl"
        >
            <div className="mb-8 grid grid-cols-4 items-end border-b-2 border-foreground pb-5 md:grid-cols-12">
                <div className="col-span-4 grid grid-cols-4 md:col-span-10 md:grid-cols-10">
                    <span className="section-kicker col-span-2">03 / Credentials</span>
                    <h2 className="section-title col-span-4 mt-8 text-primary md:col-span-8 md:col-start-3 md:mt-0">Certificates</h2>
                </div>

                <Button variant={'default'} size={'sm'} onClick={() => setIsMore(!isMore)}
                    aria-label={isMore ? "Show fewer certificates" : "Show more certificates"}
                    aria-expanded={isMore} aria-controls="certificate-list"
                    className="col-span-1 col-start-4 size-11! justify-self-end p-0! md:col-start-12">

                    <FaAngleUp className={`transition-all duration-300
                        ${isMore
                            ? 'rotate-0'
                            : 'rotate-180'
                        }
                        `} />

                </Button>

            </div>
            <div id="certificate-list" className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 overflow-hidden transition-all duration-300 ease-in-out
            ${isMore ? "max-h-[5000px]" : "max-h-[350px] md:max-h-[210px]"}`}>

                {data.map((val) => (
                    <Card key={val.id} className="h-40 w-full gap-0 rounded-none py-4 md:h-48">
                        <CardContent className="flex flex-col justify-between h-full">
                            <div className="flex gap-2">
                                <div
                                    className="hidden md:block w-10 h-10 shrink-0 bg-cover bg-center rounded-md border border-border"
                                    style={{ backgroundImage: `url('${val.icon}')` }}
                                ></div>
                                <div className="flex flex-col gap-2">
                                    <CardTitle className="text-sm font-bold leading-snug text-primary">{val.title}</CardTitle>
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
                                ""
                            )}
                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="flex justify-center w-full ">
                <Button variant={'default'} onClick={() => setIsMore(!isMore)}
                    aria-expanded={isMore} aria-controls="certificate-list"
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

        </FadeContent>
    )
}

export default Certificate
