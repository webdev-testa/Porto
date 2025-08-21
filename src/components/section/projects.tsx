import { Github, ExternalLink, Sparkles } from "lucide-react"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, AnimatedButton, TiltCard } from "@/components/ui/animations"
import { PROJECTS } from "@/data/personal-info"

export function Projects() {
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
