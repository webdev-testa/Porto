import type React from "react"

import { useEffect, useMemo, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  FileDown,
  MapPin,
  Phone,
  ExternalLink,
  Sparkles,
} from "lucide-react"

// shadcn/ui components — make sure you've added these via the CLI:
// npx shadcn@latest add button card badge input textarea
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { text } from "stream/consumers"

// ----------------------
// 1) Personalizable data
// ----------------------
const ME = {
  name: "Ammardito Shafaat",
  role: "Back End Developer",
  tagline:
    "I enjoy solving problems and building backend systems, with a mild interest in front-end and a curiosity for data and machine learning.",
  location: "Jakarta, Indonesia",
  email: "ammarditoshafaat2001@gmail.com",
  phone: "+62 812‑3012‑6439",
  headshot: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=500&auto=format&fit=crop",
  socials: {
    github: "https://github.com/webdev-testa",
    linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
    email: "ammarditoshafaat2001@gmail.com",
  },
  resumeUrl: import.meta.env.BASE_URL + "resume.pdf",
  skills: ["TypeScript", "React", "Tailwind", "Shadcn", "Node.js", "Java", "Springboot", "Python", "Tensorflow"],
}

const EXPERIENCE: Array<{
  company: string
  role: string
  period: string
  location?: string
  bullets: string[]
  link?: string
}> = [
  {
    company: "LG Sinar Mas",
    role: "C#/.NET Java Developer",
    period: "June 2025 — Present",
    location: "Jakarta, ID (Onsite)",
    bullets: [],
  },
  {
    company: "Bangkit Academy",
    role: "Mentor Bangkit Machine Learning",
    period: "Feb 2024 — July 2024",
    location: "Bandung, ID (Online)",
    bullets: [],
  },
  {
    company: "Mekari",
    role: "Information Security & Compliance Officer",
    period: "June 2023 — June 2024",
    location: "Jakarta, ID (Hybrid)",
    bullets: [],
  },
]

const PROJECTS: Array<{
  title: string
  blurb: string
  tags: string[]
  href?: string
  repo?: string
}> = [
  {
    title: "Threat Modeling Toolkit",
    blurb:
      "A lightweight, opinionated toolkit that generates attack trees from system diagrams and exports mitigations to Jira.",
    tags: ["TypeScript", "React", "D3", "Security"],
    href: "#",
    repo: "#",
  },
  {
    title: "Privacy Impact Wizard",
    blurb: "Guided PIA flow with risk scoring, evidence attachments, and export to ISO/IEC 27701 Annex mapping.",
    tags: ["Next.js", "Tailwind", "PWW 27701"],
    href: "#",
    repo: "#",
  },
  {
    title: "Audit Log Analyzer",
    blurb: "Parses cloud provider logs to highlight anomalous access patterns and policy drift.",
    tags: ["Python", "Pandas", "Cloud"],
    href: "#",
    repo: "#",
  },
]

// ----------------------
// 2) Animated Role Text Component
// ----------------------
function AnimatedRole() {
  const roles = [
    { text: "Back End Developer", color: "text-sky-300" }, // Soft baby blue
    { text: "Front End Developer", color: "text-rose-400" }, // Soft red to pink
    { text: "Machine Learning", color: "text-orange-400" }, // Orange
  ]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.p
      key={currentRoleIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className={`text-lg font-bold ${roles[currentRoleIndex].color}`} // Added font-bold and dynamic color classes
    >
      {roles[currentRoleIndex].text}
    </motion.p>
  )
}

// ----------------------
// 3) Theme toggle (uses the .dark class on <html>)
// ----------------------
function useSystemPrefersDark() {
  return useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  }, [])
}

function ThemeToggle() {
  const systemDark = useSystemPrefersDark()
  const [dark, setDark] = useState<boolean>(false)

  // initialize from localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const startDark = saved ? saved === "dark" : systemDark
    setDark(startDark)
  }, [systemDark])

  // apply to <html>
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add("dark")
    else root.classList.remove("dark")
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <Button
      variant="secondary"
      size="icon"
      aria-label="Toggle theme"
      className="rounded-full"
      onClick={() => setDark((v) => !v)}
    >
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <motion.div animate={isOpen ? "open" : "closed"} className="flex flex-col justify-center items-center w-5 h-5">
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 5 },
            }}
            className="w-5 h-0.5 bg-current block transition-all"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-5 h-0.5 bg-current block mt-1 transition-all"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5 },
            }}
            className="w-5 h-0.5 bg-current block mt-1 transition-all"
          />
        </motion.div>
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border p-4"
        >
          <nav className="flex flex-col gap-4">
            <a className="hover:underline underline-offset-4 py-2" href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a className="hover:underline underline-offset-4 py-2" href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a className="hover:underline underline-offset-4 py-2" href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  )
}

// ----------------------
// 4) Decorative blobs & sparkles
// ----------------------
function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={"pointer-events-none absolute -z-10 blur-3xl opacity-30 " + className}
      style={{
        background: "radial-gradient(60% 60% at 50% 50%, hsl(var(--primary)/0.35), transparent)",
      }}
    />
  )
}

function MorphingBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={"pointer-events-none absolute -z-10 blur-2xl opacity-20 " + className}
      animate={{
        borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "50% 60% 30% 60%", "60% 40% 30% 70%"],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        background: "linear-gradient(45deg, hsl(var(--primary)/0.4), hsl(var(--accent)/0.3))",
        width: "300px",
        height: "300px",
      }}
    />
  )
}

type ScrollRevealProps = { className?: string; children: React.ReactNode } & HTMLMotionProps<"div">

function ScrollReveal({ children, className = "", ...props }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function AnimatedButton({ children, className = "", variant = "default", ...props }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={`transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 ${className}`}
        variant={variant}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  )
}

function TiltCard({ children, className = "", ...props }: any) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (centerX - e.clientX) / 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10" {...props}>
        {children}
      </Card>
    </motion.div>
  )
}

// ----------------------
// 5) Sections
// ----------------------
function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {ME.name}
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href={ME.socials.github} target="_blank" rel="noreferrer">
                <Github className="size-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a href={ME.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="size-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Email">
              <a href={ME.socials.email}>
                <Mail className="size-5" />
              </a>
            </Button>
          </div>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <GradientBlob className="left-[-10%] top-[-10%] size-[30rem]" />
      <GradientBlob className="right-[-10%] bottom-[-10%] size-[24rem]" />
      <MorphingBlob className="left-[20%] top-[30%]" />
      <MorphingBlob className="right-[15%] bottom-[20%]" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={ME.headshot}
          alt={ME.name}
          className="size-48 sm:size-64 md:size-80 mx-auto rounded-2xl object-cover border border-border shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="space-y-4 sm:space-y-6 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {ME.location}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{ME.name}</h1>
          <AnimatedRole />
          <p className="leading-relaxed max-w-prose text-sm sm:text-base">{ME.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <AnimatedButton asChild className="w-full sm:w-auto">
              <a href="#projects">
                View Projects <ArrowUpRight className="ml-2 size-4" />
              </a>
            </AnimatedButton>
            <AnimatedButton asChild variant="secondary" className="w-full sm:w-auto">
              <a href={ME.resumeUrl} target="_blank" rel="noreferrer">
                Download CV <FileDown className="ml-2 size-4" />
              </a>
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <ScrollReveal className="mb-6 sm:mb-8 flex items-center gap-2">
        <Sparkles className="size-5" />
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {PROJECTS.map((p, index) => (
          <ScrollReveal key={p.title} style={{ transitionDelay: `${index * 0.1}s` }}>
            <TiltCard className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">{p.title}</CardTitle>
                <CardDescription className="text-sm">{p.blurb}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5 sm:gap-2 pb-3">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto flex flex-col sm:flex-row gap-2 pt-3">
                {p.href && (
                  <AnimatedButton asChild size="sm" className="w-full sm:w-auto">
                    <a href={p.href} target="_blank" rel="noreferrer">
                      Live <ExternalLink className="ml-1 size-4" />
                    </a>
                  </AnimatedButton>
                )}
                {p.repo && (
                  <AnimatedButton asChild variant="secondary" size="sm" className="w-full sm:w-auto">
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Code <Github className="ml-1 size-4" />
                    </a>
                  </AnimatedButton>
                )}
              </CardFooter>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <ScrollReveal className="mb-6 sm:mb-8 flex items-center gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">About</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
        <ScrollReveal>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">What I do</CardTitle>
              <CardDescription className="text-sm">
                Blending engineering and governance to build secure, privacy‑first products.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                I help teams ship features without compromising security by designing practical controls, automating
                evidence collection, and translating compliance into developer experience.
              </p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Threat modeling & secure SDLC enablement</li>
                <li>Risk assessment & ISO/IEC 27001/27701 alignment</li>
                <li>Cloud posture & access review automation</li>
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal style={{ transitionDelay: "0.1s" }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Skills</CardTitle>
              <CardDescription className="text-sm">Tech Stack & Tools I use</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5 sm:gap-2">
              {ME.skills.map((s) => (
                <Badge key={s} variant="secondary" className="text-xs">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal style={{ transitionDelay: "0.2s" }}>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Experience</CardTitle>
              <CardDescription className="text-sm">A quick timeline of where I've worked.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="relative ml-2 border-l border-border pl-4 sm:pl-6">
                {EXPERIENCE.map((job) => (
                  <li key={job.company + job.role} className="relative mb-6 sm:mb-8 last:mb-0">
                    <span
                      aria-hidden
                      className="absolute -left-2.5 top-2.5 inline-flex h-1 w-1 rounded-full bg-primary ring-1 ring-background"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-x-3">
                      <div className="font-medium text-sm sm:text-base">
                        {job.role} · <span className="text-muted-foreground">{job.company}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{job.period}</div>
                    </div>
                    {job.location && (
                      <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">{job.location}</div>
                    )}
                    <ul className="mt-2 list-disc pl-5 text-xs sm:text-sm text-muted-foreground space-y-1">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <ScrollReveal className="mb-6 sm:mb-8 flex items-center gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Contact</h2>
      </ScrollReveal>

      <ScrollReveal>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Let's work together</CardTitle>
            <CardDescription className="text-sm">Tell me about your project or just say hi.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget as HTMLFormElement)
                const payload = Object.fromEntries(data.entries())
                alert("Submitted!\n" + JSON.stringify(payload, null, 2))
              }}
            >
              <div className="space-y-2">
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="you@domain.com" required />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm" htmlFor="message">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="What do you need?" rows={5} required />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-2">
                <div className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="size-4" />
                    {ME.phone}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="size-4" />
                    {ME.email}
                  </span>
                </div>
                <AnimatedButton type="submit" className="w-full sm:w-auto">
                  Send
                </AnimatedButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </ScrollReveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 h-auto sm:h-16 py-4 sm:py-0 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
        <span className="text-muted-foreground">
          © {new Date().getFullYear()} {ME.name}
        </span>
        <a className="inline-flex items-center gap-1 hover:underline underline-offset-4" href="#home">
          Back to top <ArrowUpRight className="size-4" />
        </a>
      </div>
    </footer>
  )
}

// ----------------------
// 6) App layout
// ----------------------
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