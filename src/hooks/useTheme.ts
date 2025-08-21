import { useState, useEffect, useMemo } from "react"

function useSystemPrefersDark() {
    return useMemo(() => {
        if (typeof window === "undefined") return false
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }, [])
}

export function useTheme() {
    const systemDark = useSystemPrefersDark()
    const [dark, setDark] = useState<boolean>(false)

  // initialize from localStorage or system
    useEffect(() => {
        const saved = localStorage.getItem("theme")
        const startDark = saved ? saved === "dark" : systemDark
        setDark(startDark)
    }, [systemDark])

  // apply to <html>
    useEffect(() => {
        const root = document.documentElement
        if (dark) root.classList.add("dark")
        else root.classList.remove("dark")
        localStorage.setItem("theme", dark ? "dark" : "light")
    }, [dark])
    
    return { dark, setDark }
}