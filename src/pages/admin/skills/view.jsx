import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import "./roadmap.css"; // Your styling file

const ViewSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(""); // Specify the correct API endpoint
        if (response.ok) {
          const data = await response.json();
          setSkills(data);
        } else {
          console.error("Failed to fetch skills.");
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <h1 className="page-title">Skills</h1>
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                {/* name , title , description , image , what to learn , how to learn , socials , timetaken , price , practice */}
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>What To Learn</th>
                <th>How To Learn</th>
                <th>Socials</th>
                <th>Time Taken</th>
                <th>Price</th>
                <th>Practice</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <tr key={skill._id}>
                    <td>{skill.name}</td>
                    <td>{skill.title}</td>
                    <td>{skill.description}</td>
                    <td>{skill.image}</td>
                    <td>{skill.whatToLearn}</td>
                    <td>{skill.howToLearn}</td>
                    <td>{skill.socials}</td>
                    <td>{skill.timeTaken}</td>
                    <td>{skill.price}</td>
                    <td>{skill.practice}</td>
                    <td>{new Date(skill.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(skill.updatedAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="empty-message">
                    No skills available.
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

export default ViewSkills;
