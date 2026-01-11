"use client"

import { Button } from "./ui/button"

import { useCallback, useState } from "react"

// type NavigationProps = {
//   activeSection: string
//   onNavigate: (section: string) => void
// }

// const Navbar = ({ activeSection, onNavigate }: NavigationProps) => {
const Navbar = () => {

  const [activeSection, setActiveSection] = useState("home")

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <div className="
    fixed flex justify-between md:justify-center items-center gap-4 bg-black/5 backdrop-blur-xs 
    h-13 w-full px-10 md:p-0 z-50
    ">
      <Button variant={"link"} className="pl-0 md:pl-4" onClick={() => handleNavigate("home")}>Home</Button>
      <Button variant={"link"} className="hidden md:block" onClick={() => handleNavigate("experience")}>Experience</Button>
      <Button variant={"link"} className="hidden md:block" onClick={() => handleNavigate("certificate")}>Certificate</Button>
      <Button variant={"link"} className="hidden md:block" onClick={() => handleNavigate("project")}>Project</Button>
      <Button variant={"neon"} size={"sm"} className="text-sm" onClick={() => handleNavigate("getInTouch")}>Get in touch</Button>
      {/* <Button variant={"default"} size={"sm"} className="text-sm bg-[#c7ff04] text-gray-700 hover:text-white transition-all ease-in-out duration-300">Get in touch</Button> */}
    </div>
  )
}

export default Navbar
