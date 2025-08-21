import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

export function ThemeToggle() {
    const { dark, setDark } = useTheme()
    
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
    )
}