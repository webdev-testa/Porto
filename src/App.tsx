import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

// shadcn/ui components — make sure you've added these via the CLI:
// npx shadcn@latest add button card badge input textarea
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { text } from "stream/consumers";

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
  headshot:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=500&auto=format&fit=crop", 
  socials: {
    github: "https://github.com/webdev-testa",
    linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
    email: "ammarditoshafaat2001@gmail.com",
  },
  resumeUrl: "/resume.pdf", // place a file at public/resume.pdf
  skills: [
    "TypeScript",
    "React",
    "Tailwind",
    "Shadcn",
    "Node.js",
    "Java",
    "Springboot",
    "Python",
    "Tensorflow",
  ],
};

const EXPERIENCE: Array<{
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  link?: string;
}> = [
  {
    company: "LG Sinar Mas",
    role: "C#/.NET Java Developer",
    period: "June 2025 — Present",
    location: "Jakarta, ID (Onsite)",
    bullets:[
      "as",
      "as",
      "as"
    ],
  },
  {
    company: "Bangkit Academy",
    role: "Mentor Bangkit Batch 1 2024",
    period: "Feb 2024 — July 2024",
    location: "Bandung, ID (Online)",
    bullets:[
      "as",
      "as",
      "as"
    ],
  },
  {
    company: "Mekari",
    role: "Information Security & Compliance Officer",
    period: "June 2023 — June 2024",
    location: "Jakarta, ID (Hybrid)",
    bullets:[
      "as",
      "as",
      "as"
    ],
  }
]

const PROJECTS: Array<{
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
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
    blurb:
      "Guided PIA flow with risk scoring, evidence attachments, and export to ISO/IEC 27701 Annex mapping.",
    tags: ["Next.js", "Tailwind", "PWW 27701"],
    href: "#",
    repo: "#",
  },
  {
    title: "Audit Log Analyzer",
    blurb:
      "Parses cloud provider logs to highlight anomalous access patterns and policy drift.",
    tags: ["Python", "Pandas", "Cloud"],
    href: "#",
    repo: "#",
  },
];
// ----------------------
// 2) Animated Role Text Component
// ----------------------
function RoleLoop() {
  const roles = [
    {text: "Back End Developer", color: "text-[#A2D2DF]"},
    {text: "Front End Developer", color: "text-[#DA6C6C]"},
    {text: "Machine Learning Developer", color: "text-[#F39E60]"},
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
      className={`text-lg font-bold ${roles[currentRoleIndex].color}`}
    >
      {roles[currentRoleIndex].text}
    </motion.p>
  )
}

// ----------------------
// 2) Theme toggle (uses the .dark class on <html>)
// ----------------------
function useSystemPrefersDark() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }, []);
}

function ThemeToggle() {
  const systemDark = useSystemPrefersDark();
  const [dark, setDark] = useState<boolean>(false);

  // initialize from localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const startDark = saved ? saved === "dark" : systemDark;
    setDark(startDark);
  }, [systemDark]);

  // apply to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

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
  );
}

// ----------------------
// 3) Decorative blobs & sparkles
// ----------------------
function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute -z-10 blur-3xl opacity-30 " + className
      }
      style={{
        background:
          "radial-gradient(60% 60% at 50% 50%, hsl(var(--primary)/0.35), transparent)",
      }}
    />
  );
}

// ----------------------
// 4) Sections
// ----------------------
function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {ME.name}
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:underline underline-offset-4" href="#projects">Projects</a>
          <a className="hover:underline underline-offset-4" href="#about">About</a>
          <a className="hover:underline underline-offset-4" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <GradientBlob className="left-[-10%] top-[-10%] size-[30rem]" />
      <GradientBlob className="right-[-10%] bottom-[-10%] size-[24rem]" />
      <div className="mx-auto max-w-6xl px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={ME.headshot}
          alt={ME.name}
          className="size-48 md:size-56 rounded-2xl object-cover border border-border shadow-sm"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {ME.location}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {ME.name}
          </h1>
          <RoleLoop />
          <p className="leading-relaxed max-w-prose">
            {ME.tagline}
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <a href="#projects">
                View Projects <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={ME.resumeUrl} target="_blank" rel="noreferrer">
                Download CV <FileDown className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="size-5" />
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription>{p.blurb}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="mt-auto flex gap-2">
              {p.href && (
                <Button asChild size="sm">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    Live <ExternalLink className="ml-1 size-4" />
                  </a>
                </Button>
              )}
              {p.repo && (
                <Button asChild variant="secondary" size="sm">
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Code <Github className="ml-1 size-4" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>What I do</CardTitle>
            <CardDescription>
              Blending engineering and governance to build secure, privacy‑first products.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              I help teams ship features without compromising security by designing practical controls, automating
              evidence collection, and translating compliance into developer experience.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Threat modeling & secure SDLC enablement</li>
              <li>Risk assessment & ISO/IEC 27001/27701 alignment</li>
              <li>Cloud posture & access review automation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Tech Stack & Tools I use</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {ME.skills.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>A quick timeline of where I’ve worked.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="relative ml-2 border-l border-border pl-6">
              {EXPERIENCE.map((job) => (
                <li key={job.company + job.role} className="relative mb-8 last:mb-0">
                  <span aria-hidden className="absolute -left-2.5 top-2.5 inline-flex h-1 w-1 rounded-full bg-primary ring-1 ring-background"/>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <div className="font-medium"> 
                      {job.role} · <span className="text-muted-foreground">{job.company}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{job.period}</div>
                  </div>
                  {job.location && (
                    <div className="text-sm text-muted-foreground mt-0.5">{job.location}</div>
                  )}
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Let’s work together</CardTitle>
          <CardDescription>Tell me about your project or just say hi.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget as HTMLFormElement);
              const payload = Object.fromEntries(data.entries());
              alert("Submitted!\n" + JSON.stringify(payload, null, 2));
            }}
          >
            <div className="space-y-2">
              <label className="text-sm" htmlFor="name">Name</label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" placeholder="you@domain.com" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm" htmlFor="message">Message</label>
              <Textarea id="message" name="message" placeholder="What are we building?" rows={5} required />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-2">
              <div className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="inline-flex items-center gap-1"><Phone className="size-4" />{ME.phone}</span>
                <span className="inline-flex items-center gap-1"><Mail className="size-4" />{ME.email}</span>
              </div>
              <Button type="submit">Send</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">© {new Date().getFullYear()} {ME.name}</span>
        <a className="inline-flex items-center gap-1 hover:underline underline-offset-4" href="#home">
          Back to top <ArrowUpRight className="size-4" />
        </a>
      </div>
    </footer>
  );
}

// ----------------------
// 5) App layout
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
  );
}
