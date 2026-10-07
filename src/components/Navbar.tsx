"use client"

import { Button } from "./ui/button"
import { PiCertificateDuotone, PiFolderSimpleDuotone, PiHouseDuotone, PiPhoneDuotone, PiSuitcaseSimpleDuotone } from "react-icons/pi"
import { useCallback } from "react"

const Navbar = () => {

  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    // <div className="flex w-full justify-center items-center">
    <nav aria-label="Primary navigation" suppressHydrationWarning className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 pt-4 md:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background from-15% to-transparent" />
      <div suppressHydrationWarning className="
      relative z-10 flex w-[90%] md:w-fit items-center justify-between md:justify-center gap-1 bg-background
      h-14 px-3 md:gap-3 md:px-5 rounded-none border border-foreground 
      ">
        <Button variant="ghost" className="text-sm hover:bg-primary hover:text-primary-foreground" onClick={() => handleNavigate("home")}><PiHouseDuotone /> Home</Button>
        <Button variant="ghost" className="hidden text-sm hover:bg-primary hover:text-primary-foreground md:flex" onClick={() => handleNavigate("project")}><PiFolderSimpleDuotone /> Projects</Button>
        <Button variant="ghost" className="hidden text-sm hover:bg-primary hover:text-primary-foreground md:flex" onClick={() => handleNavigate("experience")}><PiSuitcaseSimpleDuotone /> Experience</Button>
        <Button variant="ghost" className="hidden text-sm hover:bg-primary hover:text-primary-foreground md:flex" onClick={() => handleNavigate("certificate")}><PiCertificateDuotone /> Certificates</Button>
        <Button variant="default" size="sm" className="text-xs" onClick={() => handleNavigate("getInTouch")}><PiPhoneDuotone /> <span className="hidden md:block">Get in touch</span></Button>
      </div>
    </nav>
  )
}

export default Navbar
