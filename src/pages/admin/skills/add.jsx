import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import "./roadmap.css";

const AddSkills = () => {
  const [formData, setFormData] = useState({
    roadmap: "",
    name: "",
    title: "",
    description: "",
    image: "",
    whatToLearn: "",
    howToLearn: "",
    socials: "",
    timeTaken: "",
    price: "",
    practice: "",
  });

  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    // Fetch the list of roadmaps
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setRoadmaps(data);
      } catch (error) {
        console.error("Error fetching roadmaps:", error);
      }
    };

    fetchRoadmaps();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Skill added successfully!");
        setFormData({
          roadmap: "",
          name: "",
          title: "",
          description: "",
          image: "",
          whatToLearn: "",
          howToLearn: "",
          socials: "",
          timeTaken: "",
          price: "",
          practice: "",
        });
      } else {
        alert("Failed to add skill.");
      }
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Add Skill</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg max-w-full"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Roadmap
            </label>
            <select
              name="roadmap"
              value={formData.roadmap}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Roadmap</option>
              {roadmaps.map((roadmap) => (
                <option key={roadmap._id} value={roadmap._id}>
                  {roadmap.title}
                </option>
              ))}
            </select>
          </div>

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
              placeholder="Enter skill name"
              required
            />
          </div>

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
              placeholder="Enter title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter description"
              rows="4"
              required
            ></textarea>
          </div>

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

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              What to Learn (comma separated)
            </label>
            <input
              type="text"
              name="whatToLearn"
              value={formData.whatToLearn}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter what to learn"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              How to Learn (comma separated)
            </label>
            <input
              type="text"
              name="howToLearn"
              value={formData.howToLearn}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter how to learn"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Socials (comma separated)
            </label>
            <input
              type="text"
              name="socials"
              value={formData.socials}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter socials"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Time Taken
            </label>
            <input
              type="text"
              name="timeTaken"
              value={formData.timeTaken}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter time taken"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter price"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Practice
            </label>
            <input
              type="text"
              name="practice"
              value={formData.practice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter practice"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;
