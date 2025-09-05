"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import isMobile from "../hooks/useIsMobile";

export default function AboutMe() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div
      id="aboutme"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-base-100"
    >
      <motion.div
        className="w-full h-full px-6 md:px-16 py-8 flex flex-col items-center justify-center gap-12 bg-base-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className={`w-full flex ${
            isMobile()
              ? "flex-col items-center gap-12"
              : "lg:w-fit h-full flex-row justify-center items-center"
          }`}
          variants={itemVariants}
        >
          {/* Perfil */}
          <div className="w-full lg:w-1/4 flex flex-col h-full justify-center items-center m-4 lg:m-8">
            <Image
              width={250}
              height={250}
              src="/profile_image.jpg"
              alt="profile image"
              className="transition-transform duration-500 rounded-full"
            />
            <div className="flex flex-col items-start mt-6 lg:mt-8">
              <h2
                className={`text-lg md:text-2xl leading-relaxed ${
                  isMobile() ? "text-center w-full" : "text-left"
                }`}
              >
                About Me
              </h2>
              <p
                className={`text-primary/60 w-full text-sm md:text-lg leading-normal ${
                  isMobile() ? "text-center w-full" : "text-left"
                }`}
              >
                I’m a recent Computer Engineering graduate with a strong passion
                for building impactful applications. I enjoy creating versatile,
                user-friendly solutions that bridge functionality and design.
                Eager to learn and adapt, I thrive on turning ideas into
                high-quality, scalable software. Beyond my technical interests,
                I also enjoy studying languages, such as Chinese, to broaden my
                cultural and communication skills.
              </p>
            </div>
          </div>

          {!isMobile() && (
            <div className="m-12 divider divider-horizontal"></div>
          )}

          <div
            className={`flex flex-col gap-8 justify-center ${
              isMobile() ? "w-full" : "w-1/2 h-full"
            }`}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-left text-lg md:text-2xl leading-relaxed">
                Hard Skills
              </h3>
              <p className="text-primary/60 w-fit text-sm md:text-lg leading-normal">
                <span className="text-primary/80">Programming languages:</span>
                <br />
                JavaScript - TypeScript - HTML5 - CSS3 - Java - PHP - Python -
                C/C++ - SQL
              </p>
              <p className="text-primary/60 w-fit text-sm md:text-lg leading-normal">
                <span className="text-primary/80">Frontend:</span>
                <br />
                React - Angular - Next.js - Tailwind CSS - Vite - WordPress -
                Material UI
              </p>
              <p className="text-primary/60 w-fit text-sm md:text-lg leading-normal">
                <span className="text-primary/80">Backend:</span>
                <br />
                Spring Boot - Node.js - Express - REST APIs - GraphQL - Laravel
              </p>
              <p className="text-primary/60 w-fit text-sm md:text-lg leading-normal">
                <span className="text-primary/80">Databases:</span>
                <br />
                MySQL - MongoDB - PostgreSQL - Firebase - Sequelize ORM
              </p>
              <p className="text-primary/60 w-fit text-sm md:text-lg leading-normal">
                <span className="text-primary/80">Others:</span>
                <br />
                Git - GitHub - Office Suite - Agile - Scrum
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-left text-lg md:text-2xl leading-relaxed">
                Soft Skills
              </h3>
              <p className="text-primary/60 w-fit text-sm md:text-lg leading-normal">
                Communication - Attention to Detail - Teamwork - Problem Solving
                - Curiosity - Adaptability - Responsibility
              </p>
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#experience"
          className="btn btn-text btn-md sm:btn-lg sm:w-auto"
          whileHover={{ scale: 1.05 }}
        >
          <span className="icon-[tabler--arrow-down] size-4 sm:size-5 rtl:rotate-180"></span>
        </motion.a>
      </motion.div>
    </div>
  );
}
