import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import "./roadmap.css";

const AddSkills = () => {
  const [formData, setFormData] = useState({
    skills: "",
    name: "",
    title: "",
    description: "",
    image: "",
    type: "beginner",
    status: "notstarted",
    link: "",
  });

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch the list of skills (assuming you have an API for this)
    const fetchSkills = async () => {
      try {
        const response = await fetch("/"); // Adjust the endpoint as needed
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        // Adjust the endpoint for projects
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Project added successfully!");
        setFormData({
          skills: "",
          name: "",
          title: "",
          description: "",
          image: "",
          type: "beginner",
          status: "notstarted",
          link: "",
        });
      } else {
        alert("Failed to add project.");
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Add Project</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg max-w-full"
        >
          {/* Skills Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Skills
            </label>
            <select
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Skill</option>
              {skills.map((skill) => (
                <option key={skill._id} value={skill._id}>
                  {skill.name} {/* Adjust field based on the skill schema */}
                </option>
              ))}
            </select>
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter project name"
              required
            />
          </div>

          {/* Title Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter project description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image URL Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Type Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Status Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="notstarted">Not Started</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Link Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Project Link
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter project link"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;
