import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const roles = [
  { text: "Back End Developer", color: "text-sky-300" },
  { text: "Front End Developer", color: "text-rose-400" },
  { text: "Machine Learning", color: "text-orange-400" },
]

export function AnimatedRole() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

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
