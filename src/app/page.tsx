"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";

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
          className="flex h-full flex-col justify-between gap-12 md:gap-24 overflow-x-hidden pt-28 md:pt-45 lg:gap-25 lg:pt-47.5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* HERO */}
          <motion.div
            className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:gap-8 px-4 text-center sm:px-6 lg:px-8"
            variants={itemVariants}
          >
            {/* Badges */}
            <motion.div
              className="bg-base-200 border-base-content/20 flex flex-wrap justify-center w-fit items-center gap-2 rounded-full border px-3 py-2"
              variants={itemVariants}
            >
              <span className="badge badge-primary shrink-0 rounded-full text-sm md:text-xl">
                Full-Stack
              </span>
              <span className="text-base-content/80 text-lg md:text-2xl">
                Software Engineer
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-base-content relative z-1 font-bold leading-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl md:max-w-3xl md:text-balance"
              variants={itemVariants}
            >
              <span>Bru Gladiador </span>
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2 left-1/3 -z-1 max-lg:left-4 max-md:hidden"
              >
                <path
                  d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                  stroke="url(#paint0_linear_10365_68643)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10365_68643"
                    x1="19.0416"
                    y1="4.03539"
                    x2="42.8362"
                    y2="66.9459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stopColor="var(--color-primary)" />
                    <stop offset="1" stopColor="var(--color-primary-content)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-base-content/80 max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl"
              variants={itemVariants}
            >
              A design-oriented developer with a passion for creating beautiful
              and functional software 🚀
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
              variants={itemVariants}
            >
              <motion.a
                href="#aboutme"
                className="btn btn-outline btn-md sm:btn-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
              >
                See more
                <span className="icon-[tabler--arrow-down] size-4 sm:size-5 rtl:rotate-180"></span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/brugladiadorllorella"
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
              >
                <button className="btn btn-md sm:btn-lg btn-gradient [--btn-color:#0a66c2] text-white w-full sm:w-auto">
                  <span className="icon-[tabler--brand-linkedin] size-4 sm:size-5 shrink-0"></span>
                  LinkedIn
                </button>
              </motion.a>
            </motion.div>
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
        </motion.div>
      </main>
    </div>
  );
}
