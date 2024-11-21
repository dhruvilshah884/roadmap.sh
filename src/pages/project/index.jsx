import React from "react";
import Navbar from "../navbar";

const Index = () => {
  // Sample project data
  const projects = [
    {
      title: "Single-Page CV",
      description:
        "Create a single-page HTML CV to showcase your career history.",
      tags: ["Beginner", "HTML"],
      stats: "4,469 Started",
    },
    {
      title: "Basic HTML Website",
      description: "Create a simple HTML-only website with multiple pages.",
      tags: ["Beginner", "HTML"],
      stats: "1,884 Started",
    },
    {
      title: "Personal Portfolio",
      description:
        "Convert the previous HTML portfolio into a personal portfolio.",
      tags: ["Beginner", "CSS"],
      stats: "739 Started",
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="text-center py-10 bg-white shadow">
        <h1 className="text-4xl font-bold mb-2">Frontend Projects</h1>
        <p className="text-gray-600">
          Project ideas to take you from beginner to advanced in Frontend
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 py-5 bg-gray-200">
        <button className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400">
          Beginner
        </button>
        <button className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400">
          Intermediate
        </button>
        <button className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400">
          Advanced
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded border border-gray-200"
          >
            {/* Project Tags */}
            <div className="flex space-x-2 mb-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-100 text-yellow-700 text-xs font-semibold py-1 px-2 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Project Title */}
            <h3 className="font-bold text-lg">{project.title}</h3>
            {/* Project Description */}
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            {/* Project Stats */}
            <p className="text-gray-500 text-sm">{project.stats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
