import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Card } from "@heroui/card";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-48 mb-48">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title()}>Bru Gladiador</h1>
          <br />
          <h1 className={title({ color: "violet" })}>Software developer</h1>
          <div className={subtitle({ class: "mt-4" })}>
            Not just a developer — a design-conscious problem solver.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
      <Divider className="my-4" />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <h1 className={title()}>About me</h1>
          <p>
            I'm Bru Gladiador, a Computer Engineering graduate passionate about
            system design, both visual and structural. I’ve gained experience in
            software development through academic projects and work in the
            telemedicine sector, where I contributed to backend, testing,
            documentation, and mobile apps. I'm focused on building clean,
            functional, and well-designed solutions.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 py-8 md:py-10">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
          ></Card>
        </div>
      </section>
    </>
  );
}
