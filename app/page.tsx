import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Trajectory from "@/components/trajectory"
import Certificates from "@/components/certificates"
import Gallery from "@/components/gallery"
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
        <Trajectory />
        <Certificates />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
