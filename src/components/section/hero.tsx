import { motion } from "framer-motion"
import { ArrowUpRight, FileDown, MapPin } from "lucide-react"
import { AnimatedRole } from "@/components/ui/animated-role"
import { AnimatedButton, GradientBlob, MorphingBlob } from "@/components/ui/animations"
import { ME } from "@/data/personal-info"

export function Hero() {
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
