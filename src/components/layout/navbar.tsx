import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { ME } from "@/data/personal-info"

export function Navbar() {
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
