import React from "react";
import Navbar from "../navbar";

const Roadmap = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Frontend Developer Roadmap</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Step-by-step guide to becoming a modern frontend developer in 2024
        </p>
      </div>

      {/* Roadmap Container */}
      <div className="flex flex-col items-center px-5">
        {/* Level 1 */}
        <div className="flex items-center">
          <div className="bg-yellow-300 text-center py-2 px-4 rounded shadow-md">
            Start Here
          </div>
        </div>

        {/* Level 2 */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <div className="bg-yellow-200 py-2 px-4 rounded shadow-md">
            Learn HTML
          </div>
          <div className="bg-yellow-200 py-2 px-4 rounded shadow-md">
            Learn CSS
          </div>
          <div className="bg-yellow-200 py-2 px-4 rounded shadow-md">
            Learn JavaScript
          </div>
        </div>

        {/* Level 3 */}
        <div className="flex items-center justify-between mt-10 space-x-4">
          <div className="bg-yellow-100 py-2 px-4 rounded shadow-md">
            CSS Frameworks
          </div>
          <div className="bg-yellow-100 py-2 px-4 rounded shadow-md">
            JavaScript Frameworks
          </div>
        </div>

        {/* Level 4 */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="bg-gray-200 py-2 px-4 rounded shadow-md">
            React.js
          </div>
          <div className="bg-gray-200 py-2 px-4 rounded shadow-md">Vue.js</div>
          <div className="bg-gray-200 py-2 px-4 rounded shadow-md">
            TailwindCSS
          </div>
          <div className="bg-gray-200 py-2 px-4 rounded shadow-md">Next.js</div>
        </div>

        {/* Final Message */}
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
