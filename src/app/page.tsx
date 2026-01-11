import Certificate from "@/components/Certificate";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import PersonalProject from "@/components/PersonalProject";

export default function Home() {
  return (
    <>
      <div id="home" className="mb-20"></div>
      <Hero />

      <div id="experience" className="mb-20"></div>
      <Experience />

      <div id="certificate" className="mb-20"></div>
      <Certificate />

      <div id="project" className="mb-20"></div>
      <PersonalProject />

      <div id="getInTouch" className="mb-20"></div>
      <GetInTouch />

      <div className="mb-30"></div>

      <div className="w-full md:w-[80%]">
        <p className="text-right text-black/50 text-sm mb-5">@2025 Husein’s Web App Portofolio</p>
      </div>

    </>
  )
}
