import { TextAnimate } from "@/components/ui/text-animate"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Main() {
  return (
    <main>
      <section className="flex items-center justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-extrabold">
            <TextAnimate animation="blurInUp" by="word">
              Hi, I&apos;m Bru
            </TextAnimate>
          </h1>
          <h2 className="text-4xl font-bold tracking-tighter text-muted-foreground">
            @SoftwareDeveloper
          </h2>
        </div>
        <div className="flex w-fit items-center justify-center">
          <Avatar className={"h-40 w-40"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              eaque.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Action</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
