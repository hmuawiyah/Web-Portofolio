import Certificate from "@/components/Certificate";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import PersonalProject from "@/components/PersonalProject";

export default function Home() {
  return (
    <>
      <div className="my-10"></div>
      <Hero />
      <div className="my-10"></div>
      <Experience />
      <div className="my-10"></div>
      <Certificate />
      <div className="my-10"></div>
      <PersonalProject />
      <div className="my-10"></div>
      <GetInTouch />

      <div className="mb-30"></div>

      <div className="w-full md:w-[80%]">
        <p className="text-right text-black/50 text-sm mb-5">@2025 Husein’s Web App Portofolio</p>
      </div>

    </>
  )
}
