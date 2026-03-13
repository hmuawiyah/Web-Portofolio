"use client"

import { Button } from "./ui/button"
import { PiCertificateDuotone, PiFolderSimpleDuotone, PiHouseDuotone, PiPhoneDuotone, PiSuitcaseSimpleDuotone } from "react-icons/pi"
import { useCallback, useState } from "react"

const Navbar = () => {

  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    // <div className="flex w-full justify-center items-center">
    <div suppressHydrationWarning className="
    fixed flex justify-between md:justify-center items-end w-full px-7 md:px-10 h-18 md:p-0 z-50 
    bg-gradient-to-b from-white from-0% to-transparent to-60% 
    ">
      <div suppressHydrationWarning className="
      flex justify-between md:justify-center items-center gap-5 bg-white 
      h-13 w-full md:w-fit shadow-md px-5 rounded-full border border-border/50
      ">
        <Button variant={"secondary"} className="text-sm font-semibold pl-0 md:pl-4 bg-transparent hover:bg-secondary" onClick={() => handleNavigate("home")}><PiHouseDuotone /> Home</Button>
        <Button variant={"secondary"} className="hidden text-sm font-semibold md:flex bg-transparent hover:bg-secondary" onClick={() => handleNavigate("experience")}><PiSuitcaseSimpleDuotone /> Experience</Button>
        <Button variant={"secondary"} className="hidden text-sm font-semibold md:flex bg-transparent hover:bg-secondary" onClick={() => handleNavigate("project")}><PiFolderSimpleDuotone /> Project</Button>
        <Button variant={"secondary"} className="hidden text-sm font-semibold md:flex bg-transparent hover:bg-secondary" onClick={() => handleNavigate("certificate")}><PiCertificateDuotone />Certificate</Button>
        <Button variant={"default"} size={"sm"} className="text-xs font-bold rounded-lg" onClick={() => handleNavigate("getInTouch")}><PiPhoneDuotone /> Get in touch</Button>
      </div>
    </div>
    // </div>
    // <div suppressHydrationWarning className="
    // fixed flex justify-between md:justify-center items-center gap-4 bg-white/20 backdrop-blur-lg 
    // h-15 w-full px-10 md:p-0 z-50 shadow-sm
    // ">
    //   <Button variant={"link"} className="pl-0 md:pl-4" onClick={() => handleNavigate("home")}>Home</Button>
    //   <Button variant={"link"} className="hidden md:block" onClick={() => handleNavigate("experience")}>Experience</Button>
    //   <Button variant={"link"} className="hidden md:block" onClick={() => handleNavigate("project")}>Project</Button>
    //   <Button variant={"link"} className="hidden md:block" onClick={() => handleNavigate("certificate")}>Certificate</Button>
    //   <Button variant={"default"} size={"sm"} className="text-sm font-semibold" onClick={() => handleNavigate("getInTouch")}>Get in touch</Button>
    // </div>
  )
}

export default Navbar
