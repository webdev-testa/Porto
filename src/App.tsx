import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/section/hero"
import { Projects } from "@/components/section/projects"
import { About } from "@/components/section/about"
import { Contact } from "@/components/section/contact"

export default function App() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
