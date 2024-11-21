import React from "react";
import Navbar from "../navbar"; // Assuming you already have this component

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: About Text */}
          <div>
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className="mt-4 text-lg text-gray-300">
              Roadmap.sh is the most complete and updated learning roadmap,
              designed to help you achieve your career goals. Whether you're new
              to tech or aiming for a specific role, our roadmaps help you
              understand what you need to learn and how to get there.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              We provide a structured path for both beginners and professionals,
              guiding them through different learning stages with carefully
              curated resources and project suggestions.
            </p>
          </div>

          {/* Right Column: Image or Illustration */}
          <div className="flex justify-center">
            <img
              className="max-w-xs rounded-lg"
              src="https://images.unsplash.com/photo-1564177611049-76e2933c6017?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // You can replace this with the actual image.
              alt="Illustration of Roadmap"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 bg-gray-900 py-12 px-6 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-400">
              Our mission is to help tech enthusiasts build a successful career
              by providing them with the most organized, real-world advice,
              resources, and project-based learning paths.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-white">
            Why Choose Roadmap.sh?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-white">
                Easy to Follow
              </h3>
              <p className="mt-4 text-gray-300">
                Our roadmaps are simple and easy to follow, taking the confusion
                out of your learning journey.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-white">
                Curated Resources
              </h3>
              <p className="mt-4 text-gray-300">
                Each roadmap is filled with handpicked learning resources that
                are up-to-date and high-quality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-white">
                Real-World Projects
              </h3>
              <p className="mt-4 text-gray-300">
                Test your skills with practical, real-world projects that mirror
                what you would encounter in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-white">Meet the Team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150" // Replace with team member image
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-white mt-4">
                Dhruvil Shah
              </h3>
              <p className="text-gray-400">FullStack Developer</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150" // Replace with team member image
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-white mt-4">
                Harsh Vala
              </h3>
              <p className="text-gray-400">BDE</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150" // Replace with team member image
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-white mt-4">
                Rahul Virwal
              </h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150" // Replace with team member image
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-white mt-4">
                Kush Prajapati
              </h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
