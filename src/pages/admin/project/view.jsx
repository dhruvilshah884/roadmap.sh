import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import "./roadmap.css"; // Add a separate CSS file for styling

const ViewRoadmaps = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(""); // Specify the correct API endpoint
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error("Failed to fetch projects.");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <h1 className="page-title">Projects</h1>
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Type</th>
                <th>Status</th>
                <th>Link</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.name}</td>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </td>
                    <td>{project.type}</td>
                    <td>{project.status}</td>
                    <td>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link}
                      </a>
                    </td>
                    <td>{new Date(project.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(project.updatedAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="empty-message">
                    No projects available.
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
