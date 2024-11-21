import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import "./roadmap.css"; // Add a separate CSS file for styling

const ViewRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch("");
        if (response.ok) {
          const data = await response.json();
          setRoadmaps(data);
        } else {
          console.error("Failed to fetch roadmaps.");
        }
      } catch (error) {
        console.error("Error fetching roadmaps:", error);
      }
    };

    fetchRoadmaps();
  }, []);

  return (
    <div className="main-container ">
      <Sidebar />
      <div className="content-container">
        <h1 className="page-title">Roadmaps</h1>
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {roadmaps.length > 0 ? (
                roadmaps.map((roadmap) => (
                  <tr key={roadmap._id}>
                    <td>{roadmap.title}</td>
                    <td>{roadmap.description}</td>
                    <td>
                      <img
                        src={roadmap.image}
                        alt={roadmap.title}
                        className="roadmap-image"
                      />
                    </td>
                    <td>{roadmap.price ? `$${roadmap.price}` : "Free"}</td>
                    <td>{new Date(roadmap.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(roadmap.updatedAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="empty-message">
                    No roadmaps available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewRoadmaps;
