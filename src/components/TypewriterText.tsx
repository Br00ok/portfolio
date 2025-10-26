"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({ text }: { text?: string }) {
  return (
    <p className="mt-12 text-xl text-content">
      <Typewriter
        words={[text || ""]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={25}
        delaySpeed={4000}
      />
    </p>
  );
}
