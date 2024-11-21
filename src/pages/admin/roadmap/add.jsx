import React, { useState } from "react";
import Sidebar from "../sidebar";
import "./roadmap.css"; // CSS file for styling

const AddRoadmap = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

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
        alert("Roadmap added successfully!");
        setFormData({
          title: "",
          description: "",
          image: "",
          price: "",
        });
      } else {
        alert("Failed to add roadmap.");
      }
    } catch (error) {
      console.error("Error adding roadmap:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Add Roadmap</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg max-w-full "
        >
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
              placeholder="Enter roadmap title"
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
              placeholder="Enter roadmap description"
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
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter price (optional)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Roadmap
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoadmap;
