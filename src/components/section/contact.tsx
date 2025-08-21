import { Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal, AnimatedButton } from "@/components/ui/animations"
import { ME } from "@/data/personal-info"

export function Contact() {
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