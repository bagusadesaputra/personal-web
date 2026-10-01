import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Skills } from "@/components/skills"

function Page() {
  return (
    <>
      <SiteHeader />
      {/* header (sticky, h-14) keeps flow space; pull main up so hero sits
          at the same position as clicking #top */}
      <main className="-mt-14">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

export default Page
