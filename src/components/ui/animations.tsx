import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Decorative background elements
export function GradientBlob({ className = "" }: { className?: string }) {
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

export function MorphingBlob({ className = "" }: { className?: string }) {
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

// Animation components
type ScrollRevealProps = { className?: string; children: React.ReactNode } & HTMLMotionProps<"div">

export function ScrollReveal({ children, className = "", ...props }: ScrollRevealProps) {
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

export function AnimatedButton({ children, className = "", variant = "default", ...props }: any) {
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

export function TiltCard({ children, className = "", ...props }: any) {
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
