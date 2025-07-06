//projects page with a list of projects in a grid format of 2 columns
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6 text-center">Projects</h1>
      <p className="text-lg leading-relaxed mb-4">
        Here are some of the key projects I have worked on:
      </p>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong>Project 1:</strong> Description of project 1.
        </li>
        <li>
          <strong>Project 2:</strong> Description of project 2.
        </li>
        <li>
          <strong>Project 3:</strong> Description of project 3.
        </li>
      </ul>
    </div>
  );
}
