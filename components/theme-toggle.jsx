"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-full transition-all duration-[2000ms] ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-all duration-[2000ms] ease-in-out" />
      ) : (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-all duration-[2000ms] ease-in-out" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
