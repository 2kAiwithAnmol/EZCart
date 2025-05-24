import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">About EZCart</h2>
      <p className="text-gray-700 mb-4">
        EZCart is a modern and user-friendly e-commerce platform built with React and Tailwind CSS.
        The goal is to provide a smooth shopping experience with powerful features like filtering,
        sorting, and cart management – all within a fast and responsive UI.
      </p>

      <p className="text-gray-700 mb-4">
        This project is a frontend-only mock application that demonstrates how a full-fledged
        e-commerce app can be structured using best practices, reusable components, and clean design.
      </p>

      <p className="text-gray-700">
        Built by <span className="font-semibold text-blue-600">Anmol</span> as part of a learning
        journey in frontend development and UI/UX.
      </p>
    </div>
  );
};

export default About;
