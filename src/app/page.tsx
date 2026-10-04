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

      <section id="project" aria-label="Personal projects" className="flex w-full scroll-mt-2 justify-center pt-28 md:pt-20">
        <PersonalProject />
      </section>

      <section id="experience" aria-label="Experience" className="flex w-full scroll-mt-2 justify-center pt-24 md:pt-20">
        <Experience />
      </section>

      <section aria-label="Skills" className="flex w-full justify-center pt-8 md:pt-12">
        <Skills />
      </section>

      <section id="certificate" aria-label="Certificates" className="flex w-full scroll-mt-2 justify-center pt-24 md:pt-20">
        <Certificate />
      </section>

      <section id="whaticando" aria-label="Services" className="flex w-full scroll-mt-2 justify-center pt-20">
        <WhatICanDo />
      </section>

      <section id="getInTouch" aria-label="Contact" className="flex w-full scroll-mt-2 justify-center pt-20">
        <GetInTouch />
      </section>

      <footer className="w-full max-w-6xl pt-28">
        <p className="mb-5 border-t-2 border-foreground/15 pt-5 text-right text-sm text-muted-foreground">© 2026 Husein&apos;s Web App Portfolio</p>
      </footer>

    </main>
  )
}
