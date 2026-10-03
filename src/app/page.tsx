import Certificate from "@/components/Certificate";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import PersonalProject from "@/components/PersonalProject";
import Skills from "@/components/Skills";
import WhatICanDo from "@/components/WhatIcanDo";

export default function Home() {
  return (
    <main id="home" className="flex w-full flex-col items-center pt-28 md:pt-32">

      <section aria-label="Introduction" className="flex w-full justify-center">
        <Hero />
      </section>

      <section id="project" aria-label="Personal projects" className="flex w-full scroll-mt-24 justify-center pt-24 md:pt-32">
        <PersonalProject />
      </section>

      <section id="experience" aria-label="Experience" className="flex w-full scroll-mt-24 justify-center pt-24 md:pt-32">
        <Experience />
      </section>

      <section aria-label="Skills" className="flex w-full justify-center pt-8 md:pt-12">
        <Skills />
      </section>

      <section id="certificate" aria-label="Certificates" className="flex w-full scroll-mt-24 justify-center pt-24 md:pt-32">
        <Certificate />
      </section>

      <section id="whaticando" aria-label="Services" className="flex w-full scroll-mt-24 justify-center pt-24">
        <WhatICanDo />
      </section>

      <section id="getInTouch" aria-label="Contact" className="flex w-full scroll-mt-24 justify-center pt-24">
        <GetInTouch />
      </section>

      <footer className="w-full pt-28 md:w-[80%]">
        <p className="mb-5 text-right text-sm text-black/50">© {new Date().getFullYear()} Husein&apos;s Web App Portfolio</p>
      </footer>

    </main>
  )
}
