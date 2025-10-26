import TypewriterText from "@/components/TypewriterText";
import { Button } from "@heroui/react";
import {
  IconArrowNarrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
process.loadEnvFile();
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen pt-20 w-full flex flex-col items-center bg-transparent"
    >
      <div className="h-full w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-8xl font-bold m-2">Bru Gladiador</h1>
        <h2 className="text-3xl md:text-5xl font-bold m-2 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-gradient">
          Software Developer
        </h2>

        <div className="max-w-3/4 md:max-w-120 h-52 md:h-35">
          <TypewriterText text="A design-oriented developer with a passion for creating beautiful and functional software." />
        </div>
        <div className="flex gap-5">
          <Button
            color="primary"
            startContent={<IconBrandLinkedin />}
            variant="bordered"
          >
            <Link href={`${process.env.LINKEDIN_URL}`} target="_blank">
              LinkedIn
            </Link>
          </Button>
          <Button
            color="primary"
            startContent={<IconBrandGithub />}
            variant="bordered"
          >
            <Link href={`${process.env.LINKEDIN_URL}`} target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
      <Button
        className="mt-auto mb-15 bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        radius="full"
        endContent={<IconArrowNarrowDown />}
      >
        <Link href="#aboutme">About me</Link>
      </Button>
    </section>
  );
}
