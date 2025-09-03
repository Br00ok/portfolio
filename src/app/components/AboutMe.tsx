"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      className="w-full flex items-center justify-center h-2/5 bg-base-100"
    >
      <motion.div
        className="w-full h-full px-6 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-center gap-12 bg-base-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-full lg:w-fit h-full flex justify-center"
          variants={itemVariants}
        >
          <div className="flex h-full justify-center">
            <Image
              width={250}
              height={250}
              src="/profile_image.jpg"
              alt="profile image"
              className="transition-transform duration-500 rounded-full m-16"
            />
          </div>

          <div className="flex h-full flex-col w-1/2">
            <h3 className=" text-left card-title text-lg md:text-2xl leading-relaxed">
              About me
            </h3>
            <p className="w-fit text-sm md:text-lg leading-normal">
              I’m a recent Computer Engineering graduate with a strong passion
              for building impactful applications. I enjoy creating versatile,
              user-friendly solutions that bridge functionality and design.
              Eager to learn and adapt, I thrive on turning ideas into
              high-quality, scalable software. Beyond my technical interests, I
              also enjoy studying languages, such as Chinese, to broaden my
              cultural and communication skills.
            </p>
          </div>
        </motion.div>

        {/* INFO CARDS
        <motion.div
          className="flex flex-col gap-6 lg:gap-12"
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              className="card sm:max-w-sm w-full"
              variants={itemVariants}
            >
              <div className="card-body">
                <h5 className="card-title mb-2.5 text-lg md:text-xl">
                  Studies📚
                </h5>
                <p className="text-sm md:text-base">
                  I recently graduated in Computer Engineering from Pompeu Fabra
                  University (UPF). In addition to my passion for technology and
                  problem-solving, I enjoy studying languages, such as Chinese,
                  to broaden my cultural and communication skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card sm:max-w-sm w-full"
              variants={itemVariants}
            >
              <div className="card-body">
                <h5 className="card-title mb-2.5 text-lg md:text-xl">
                  Experience📂
                </h5>
                <p className="text-sm md:text-base">
                  Recently completed a one-year professional experience in the
                  telemedicine industry, with responsibilities spanning backend
                  development, quality assurance, testing, and mobile
                  application development, while building a strong foundation in
                  delivering reliable digital health solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              className="card sm:max-w-sm w-full"
              variants={itemVariants}
            >
              <div className="card-body">
                <h5 className="card-title mb-2.5 text-lg md:text-xl">
                  Projects💻
                </h5>
                <p className="text-sm md:text-base">
                  Developed multiple projects utilizing technologies such as
                  WordPress, React, Express, and others, creating e-commerce
                  websites and personal projects that strengthened both
                  technical expertise and practical implementation skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card sm:max-w-sm w-full"
              variants={itemVariants}
            >
              <div className="card-body">
                <h5 className="card-title mb-2.5 text-lg md:text-xl">
                  Objectives📈
                </h5>
                <p className="text-sm md:text-base">
                  I am driven by the goal of continuously learning and
                  contributing to engaging projects that focus on building
                  impactful and meaningful applications, with a strong
                  commitment to creating solutions that deliver real value to
                  users.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  );
}
