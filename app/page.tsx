import { Button } from "@/components/ui/button"
import Main from "./(main)/page"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <AnimatedGridPattern />
      <ScrollProgress />
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
        <Main></Main>
      </div>
    </div>
  )
}
