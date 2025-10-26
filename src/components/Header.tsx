import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
process.loadEnvFile();

export default function Header() {
  return (
    <header>
      <Navbar className="fixed h-20">
        <NavbarBrand>
          <Link href="#home">
            <p className="font-bold text-foreground text-2xl">Bru Gladiador</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-secondary"
              href="#aboutme"
            >
              About me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-secondary"
              href="#experience"
            >
              Experience
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-secondary"
              href="#projects"
            >
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link
              href={process.env.LINKEDIN_URL!}
              target="_blank"
              className="text-secondary"
            >
              <IconBrandLinkedin />
            </Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Link
              href={process.env.GITHUB_URL!}
              target="_blank"
              className="text-secondary"
            >
              <IconBrandGithub />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
