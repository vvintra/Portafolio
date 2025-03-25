import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import SalesianWork from "@/components/salesian-work"
import EngineeringGroup from "@/components/engineering-group"
import Certificates from "@/components/certificates"
import Gallery from "@/components/gallery"
import Poems from "@/components/poems"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <SalesianWork />
      <EngineeringGroup />
      <Certificates />
      <Poems />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

