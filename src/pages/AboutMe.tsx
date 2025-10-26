"use client";
import { useState } from "react";
import { Avatar, Card, Checkbox } from "@heroui/react";
import Skills from "@/components/Skills";
import NextSectionButton from "@/components/NextSectionButton";
export default function AboutMe() {
  const [lang, setLang] = useState(true);
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(true);
  return (
    <section
      id="aboutme"
      className="gap-10 pt-20 h-fit md:h-screen w-full bg-transparent flex flex-col items-center justify-center"
    >
      <Card className="gap-10 p-5 w-3/4 h-full md:w-fit md:h-fit flex flex-col md:flex-row items-center justify-center backdrop-blur-2xl bg-background/35 shadow-lg shadow-black/20">
        <Avatar className="h-50 w-50" src="/profile_picture.jpg" />
        <p className="max-w-160">
          I'm a recent Computer Engineering graduate passionate about building
          impactful applications. I enjoy creating user-friendly solutions that
          combine functionality with thoughtful design. I'm always eager to
          learn and adapt, turning ideas into quality, scalable software. Beyond
          coding, I study languages and practice music—hobbies that sharpen my
          discipline, creativity, and cultural perspective.
        </p>
      </Card>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-5 mb-10">
          <Checkbox
            color="default"
            isSelected={lang}
            onChange={() => setLang(!lang)}
          >
            Languages
          </Checkbox>
          <Checkbox
            isSelected={frontend}
            onChange={() => setFrontend(!frontend)}
            color="primary"
          >
            Frontend
          </Checkbox>
          <Checkbox
            isSelected={backend}
            onChange={() => setBackend(!backend)}
            color="secondary"
          >
            Backend
          </Checkbox>
        </div>
        <div className="flex max-w-3/4 md:max-w-1/3 items-center justify-center">
          <Skills isLang={lang} frontend={frontend} backend={backend} />
        </div>
      </div>

      <NextSectionButton path="experience" />
    </section>
  );
}
