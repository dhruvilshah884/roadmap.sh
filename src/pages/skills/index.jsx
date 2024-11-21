import React from "react";
import Navbar from "../navbar";

const Index = () => {
  return (
    <div className="bg-darkBlue min-h-screen text-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center py-10 px-5">
        <h1 className="text-4xl font-bold mb-4">Developer Roadmaps</h1>
        <p className="text-center max-w-2xl text-lg mb-6">
          roadmap.sh is a community effort to create roadmaps, guides, and other
          educational content to help guide developers in picking up a path and
          guide their learnings.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-10">
          WATCH Practice your skills with projects
        </button>

        {/* Roadmap Sections */}
        <h2 className="text-2xl font-semibold mb-4">Role-based Roadmaps</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            "Frontend",
            "Backend",
            "DevOps",
            "Full Stack",
            "AI Engineer",
            "Data Analyst",
            "AI and Data Scientist",
            "Android",
            "iOS",
            "PostgreSQL",
            "Blockchain",
            "QA",
            "Software Architect",
            "Cyber Security",
            "UX Design",
            "Game Developer",
            "Technical Writer",
            "MLOps",
            "Product Manager",
            "Engineering Manager",
            "Developer Relations",
          ].map((role, index) => (
            <div
              key={index}
              className="bg-darkLighter hover:bg-gray-700 text-center py-2 px-4 rounded transition duration-200 cursor-pointer"
            >
              {role}
            </div>
          ))}
        </div>

        {/* Create Custom Roadmap */}
        <div className="mt-8">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">
            + Create your own Roadmap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
