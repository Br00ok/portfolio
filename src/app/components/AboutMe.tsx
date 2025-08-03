"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="mockup-phone">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display bg-base-content">
          <div className="h-156 w-80 grid place-content-center">
            <div className="flex flex-col items-center justify-center">
              <div className="avatar">
                <div className="size-50 rounded-full">
                  <img src="profile_image.jpg" alt="avatar" />
                </div>
              </div>
              <h1 className="text-2xl font-bold mt-4">About Me</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5"></div>
    </div>
  );
}
