import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/animations"
import { ME, EXPERIENCE } from "@/data/personal-info"

export function About() {
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
                I’m a Systems and Information Technology graduate with a deep curiosity for tech—exploring new tools and building things is what I love to do.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                As long as I’m working on a cool project, I love helping teams build features and models by solving requirements and coming up with ideas for more optimized solutions based on the use case.
              </p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Backend development: Optimize architectures and integrate databases/APIs</li>
                <li>Frontend development: Enhancing user-facing features and seamless backend-UI interaction</li>
                <li>Machine learning: Integrating models and optimizing processes with AI-driven solutions.</li>
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
