"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  // Variants para cada card y el mockup
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Variants para contenedor que hace stagger
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div id="aboutme" className="scroll-mt-28 md:scroll-mt-22">
      <motion.div
        className="w-full h-fit px-6 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-center gap-12 bg-base-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* PHONE MOCKUP */}
        <motion.div
          className="w-full lg:w-fit flex justify-center"
          variants={itemVariants}
        >
          <div className="mockup-phone">
            <div className="mockup-phone-camera bg-base-content/60 ring-2 ring-base-100/50 shadow-md shadow-black/40"></div>
            <div className="mockup-phone-display bg-base-100/80">
              <div className="h-fit pt-10 pb-6 px-6 md:px-10 grid place-content-center">
                <div className="card group hover:shadow-sm sm:max-w-sm">
                  <figure>
                    <img
                      src="profile_image.jpg"
                      alt="profile image"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                  <div className="card-body space-y-3">
                    <h5 className="card-title text-lg md:text-xl">
                      About me👋🏼
                    </h5>
                    <p className="text-sm md:text-base">
                      I’m a recent software engineering graduate with a strong
                      passion for building impactful applications. Skilled in
                      both full-stack and mobile development, I enjoy creating
                      versatile and user-friendly solutions that bridge
                      functionality and design. Eager to learn and adapt, I
                      thrive on turning ideas into high-quality, scalable
                      software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* INFO CARDS */}
        <motion.div
          className="flex flex-col gap-6 lg:gap-12"
          variants={containerVariants}
        >
          {/* ROW 1 */}
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

          {/* ROW 2 */}
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
                  Driven by the goal of continuously learning and contributing
                  to engaging projects that focus on building impactful and
                  meaningful applications, with a strong commitment to creating
                  solutions that deliver real value to users.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
