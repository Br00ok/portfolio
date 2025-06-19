import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex  justify-center min-h-screen w-screen p-0 m.0">
      <ModeToggle />
      <main className="w-full h-full flex items-center justify-center">
        <Card className="absolute flex flex-col items-center justify-center w-1/2 p-8 m-0 top-16">
          <div>
            <Image
              src="/banner.png"
              alt="Banner image"
              width={100}
              height={100}
            ></Image>
          </div>

          <Avatar className="w-64 h-64 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <AvatarImage src="/profile-image.png" alt="Profile image" />
            <AvatarFallback>Profile image</AvatarFallback>
          </Avatar>
        </Card>
      </main>

      <footer className="flex items-center justify-center"></footer>
    </div>
  );
}
