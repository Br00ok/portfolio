import { Button } from "@/components/ui/button"
import Main from "./(main)/page"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <AnimatedGridPattern />
      <Main></Main>
    </div>
  )
}
