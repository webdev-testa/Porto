import { ArrowUpRight } from "lucide-react"
import { ME } from "@/data/personal-info"

export function Footer() {
    return (
    <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 h-auto sm:h-16 py-4 sm:py-0 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground"> © {new Date().getFullYear()} {ME.name} </span>
            <a className="inline-flex items-center gap-1 hover:underline underline-offset-4" href="#home">
                Back to top <ArrowUpRight className="size-4" />
            </a>
        </div>
    </footer>
    )
}
