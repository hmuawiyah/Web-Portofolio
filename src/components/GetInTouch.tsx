import { Button } from "./ui/button"
import { SiGithub } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { RiInstagramFill } from "react-icons/ri"
import FadeContent from "./FadeContent"

const GetInTouch = () => {

    return (
        <FadeContent
            className="relative w-full max-w-6xl"
        >
            <div className="selection-inverse relative grid overflow-hidden border-2 border-foreground bg-primary md:grid-cols-12">
                <div className="border-b border-primary-foreground/40 p-6 md:col-span-8 md:border-b-0 md:border-e md:p-12">
                <span className="section-kicker relative z-10 mb-8 text-primary-foreground">05 / Let&apos;s collaborate</span>
                <h2 className="section-title relative z-10 mb-6 text-primary-foreground">Have an idea? Let&apos;s build it.</h2>
                <p className="relative z-10 max-w-xl text-base font-medium leading-relaxed text-primary-foreground/80 md:text-xl">
                    Reach out for a project, collaboration, or a thoughtful conversation about the web.
                </p>
                </div>
                <div className="relative z-10 grid grid-cols-2 md:col-span-4 md:grid-cols-1">

                    <div className="border-b border-e border-primary-foreground/40 md:border-e-0" >
                        <Button variant="link" className="min-h-20 h-full w-full justify-start rounded-none px-4 py-4! text-primary-foreground text-sm md:text-xl font-semibold hover:bg-primary-foreground hover:text-primary" asChild><Link href="https://www.linkedin.com/in/husein-muawiyah/" target="_blank" rel="noreferrer"><FaLinkedinIn className="size-6!" /><span>LinkedIn</span></Link></Button>
                    </div>
                    <div className="border-b border-primary-foreground/40">
                        <Button variant="link" className="min-h-20 h-full w-full justify-start rounded-none px-4 py-4! text-primary-foreground text-sm md:text-xl font-semibold hover:bg-primary-foreground hover:text-primary" asChild><Link href="https://github.com/hmuawiyah" target="_blank" rel="noreferrer"><SiGithub className="size-6!" /><span>GitHub</span></Link></Button>
                    </div>
                    <div className="border-e border-primary-foreground/40 md:border-e-0 md:border-b">
                        <Button variant="link" className="min-h-20 h-full w-full justify-start rounded-none px-4 py-4! text-primary-foreground text-sm md:text-xl font-semibold hover:bg-primary-foreground hover:text-primary" asChild><Link href="mailto:huseinmuawiyah@gmail.com"><MdEmail className="size-7!" /><span>Email</span></Link></Button>
                    </div>
                    <div>
                        <Button variant="link" className="min-h-20 h-full w-full justify-start rounded-none px-4 py-4! text-primary-foreground text-sm md:text-xl font-semibold hover:bg-primary-foreground hover:text-primary" asChild><Link href="https://www.instagram.com/huseinmuawiyah/" target="_blank" rel="noreferrer"><RiInstagramFill className="size-7!" /><span>Instagram</span></Link></Button>
                    </div>
                </div>
            </div>
        </FadeContent >
    )
}

export default GetInTouch
