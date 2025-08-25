"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  return (
    <div id="aboutme">
      <div className="w-full h-fit p-16 flex items-center justify-center bg-base-200">
        <div className="w-fit ">
          <div className="mockup-phone">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display bg-base-200">
              <div className="h-fit p-10 w-100 grid place-content-center">
                <div className="card group hover:shadow-sm sm:max-w-sm">
                  <figure>
                    <img
                      src="profile_image.jpg"
                      alt="profile image"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                  <div className="card-body space-y-3">
                    <h5 className="card-title">About me👋🏼</h5>
                    <p>
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
        </div>
        <div className="m-24 flex flex-col items-center justify-center ">
          <div className="flex justify-evenly items-center">
            <div className="card sm:max-w-sm m-4">
              <div className="card-body">
                <h5 className="card-title mb-2.5">Studies📚</h5>
                <p className="mb-4">
                  I recently graduated in Computer Engineering from Pompeu Fabra
                  University (UPF). In addition to my passion for technology and
                  problem-solving, I enjoy studying languages, such as Chinese,
                  to broaden my cultural and communication skills.
                </p>
                {/* <div className="card-actions">
                  <button className="btn btn-secondary">Learn More</button>
                </div> */}
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="card sm:max-w-sm m-4">
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Experience📂</h5>
                  <p className="mb-4">
                    Recently completed a one-year professional experience in the
                    telemedicine industry, with responsibilities spanning
                    backend development, quality assurance, testing, and mobile
                    application development, while building a strong foundation
                    in delivering reliable digital health solutions.
                  </p>
                  {/* <div className="card-actions">
                    <button className="btn btn-secondary">Learn More</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="card sm:max-w-sm m-4">
              <div className="card-body">
                <h5 className="card-title mb-2.5">Projects💻</h5>
                <p className="mb-4">
                  Developed multiple projects utilizing technologies such as
                  WordPress, React, Express, and others, creating e-commerce
                  websites and personal projects that strengthened both
                  technical expertise and practical implementation skills.
                </p>
                {/* <div className="card-actions">
                  <button className="btn btn-secondary">Learn More</button>
                </div> */}
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="card sm:max-w-sm m-4">
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Objectives📈</h5>
                  <p className="mb-4">
                    Driven by the goal of continuously learning and contributing
                    to engaging projects that focus on building impactful and
                    meaningful applications, with a strong commitment to
                    creating solutions that deliver real value to users.
                  </p>
                  {/* <div className="card-actions">
                    <button className="btn btn-secondary">Learn More</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
