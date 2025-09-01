"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 text-center gap-6 pt-28 md:pt-32 pb-16">
      <motion.div
        className="text-primary/60"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="icon-[tabler--code] size-[150px]"></span>
      </motion.div>

      <motion.div
        className="max-w-3xl p-12 bg-base-200 rounded-2xl shadow-lg flex flex-col gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-4">
          Projects
        </h1>
        <p className="text-xl md:text-2xl text-base-content/80 mb-3">
          This page is currently under construction. 🚧
        </p>
        <p className="text-lg md:text-xl text-base-content/70 mb-6">
          Information about personal projects and collaborative initiatives will
          be added here in the near future. This section will showcase practical
          examples of development work, demonstrating skills, creativity, and
          technical contributions outside of formal professional experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="btn btn-outline btn-md sm:btn-lg"
          >
            Back to Home
          </motion.button>

          <Link
            href="https://linkedin.com/in/brugladiadorllorella"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md sm:btn-lg btn-gradient [--btn-color:#0a66c2] text-white"
          >
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
