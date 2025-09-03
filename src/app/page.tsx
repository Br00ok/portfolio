"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Skills from "./skills/page";

export default function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-base-100 scroll-smooth">
      <main className="min-h-screen scroll-smooth">
        <motion.div
          className="flex h-full flex-col justify-between gap-12 md:gap-24 overflow-x-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* HERO */}
          <motion.div
            className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:gap-8 px-4 text-center sm:px-6 lg:px-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-4">
              <div className="col-span-3 row-span-2 col-start-4 row-start-2 mt-12">
                <motion.h1
                  className="flex justify-center text-primary text-left relative z-1 font-extrabold leading-none text-5xl sm:text-5xl md:text-8xl lg:text-9xl md:max-w-3xl md:text-balance"
                  variants={itemVariants}
                >
                  <span>
                    Bru
                    <br />
                    Gladiador
                  </span>
                </motion.h1>
              </div>
              <div className="flex justify-end items-center col-span-2 col-start-2 row-start-4 -mt-8">
                <span className="text-right text-accent text-2xl md:text-7xl leading-none font-extrabold">
                  Software
                  <br />
                  Engineer
                </span>
              </div>
              <div className="col-span-3 col-start-4 row-start-5">
                <motion.p
                  className="text-left text-primary/80 max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl"
                  variants={itemVariants}
                >
                  A design-oriented developer with a passion for creating
                  beautiful and functional software.
                </motion.p>
              </div>
              <div className="col-span-2 col-start-3 row-start-6">
                <motion.a
                  href="#aboutme"
                  className="btn btn-text btn-md sm:btn-lg sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  See more
                  <span className="icon-[tabler--arrow-down] size-4 sm:size-5 rtl:rotate-180"></span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {isMobile ? (
            <div>
              <AboutMe />
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <AboutMe />
            </motion.div>
          )}
          <Skills />
        </motion.div>
      </main>
    </div>
  );
}
