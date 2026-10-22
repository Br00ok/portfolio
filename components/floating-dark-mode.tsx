"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon, SunMedium } from "lucide-react"

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function FloatingDarkMode() {
  const { resolvedTheme, setTheme } = useTheme()

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full p-6"
        aria-label="Canvia el tema"
        disabled={!mounted}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted ? (
          resolvedTheme === "dark" ? (
            <SunMedium className="my-icon" />
          ) : (
            <Moon className="my-icon" />
          )
        ) : null}
      </Button>
    </div>
  )
}
