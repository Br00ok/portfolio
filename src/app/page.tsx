"use client";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Link from "next/link";
import isMobile from "./hooks/useIsMobile";

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

  return (
    <div className="bg-base-100 scroll-smooth">
      <main className="min-h-screen scroll-smooth">
        <motion.div
          className={`flex h-full flex-col justify-between overflow-x-hidden ${
            isMobile() ? "gap-0" : "gap-12 md:gap-24"
          }`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* HERO */}
          <motion.div
            id="home"
            className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:gap-8 px-4 text-center sm:px-6 lg:px-8"
            variants={itemVariants}
          >
            {isMobile() ? (
              <div className="flex flex-col items-center gap-8 px-6 text-center">
                <motion.h1
                  className="text-primary font-extrabold leading-tight text-4xl xs:text-5xl sm:text-6xl mt-8"
                  variants={itemVariants}
                >
                  Bru
                  <br />
                  Gladiador
                </motion.h1>

                <span className="text-accent text-xl xs:text-2xl sm:text-3xl font-extrabold leading-tight">
                  Software Engineer
                </span>

                <motion.p
                  className="text-primary/80 mb-8 max-w-sm text-sm xs:text-base sm:text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  A design-oriented developer with a passion for creating
                  beautiful and functional software.
                </motion.p>

                <Link
                  href="https://linkedin.com/in/brugladiadorllorella"
                  target="_blank"
                  aria-label="LinkedIn Link"
                  className="fixed bottom-4 right-4 z-30 bg-transparent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <span className="icon-[tabler--brand-linkedin] size-7"></span>
                </Link>
              </div>
            ) : (
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
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <AboutMe />
          </motion.div>

          <Experience />
          <Projects />
        </motion.div>
      </main>
    </div>
  );
}
