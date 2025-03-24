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
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Lucas Arroyo - Portafolio Personal" />
        <meta
          property="og:description"
          content="Portafolio de Lucas Arroyo, estudiante de ingeniería y misionero salesiano"
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
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
    </>
  )
}

