import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
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