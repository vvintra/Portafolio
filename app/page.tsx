import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import SalesianWork from "@/components/salesian-work"
import EngineeringGroup from "@/components/engineering-group"
import Projects from "@/components/projects"
import Gallery from "@/components/gallery"
import Poems from "@/components/poems"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Education />
        <SalesianWork />
        <EngineeringGroup />
        <Poems />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
