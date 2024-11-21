import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  // States for toggling dropdowns
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  // Toggle dropdowns
  const toggleRoadmap = () => setIsRoadmapOpen(!isRoadmapOpen);
  const toggleProject = () => setIsProjectOpen(!isProjectOpen);
  const toggleSkills = () => setIsSkillsOpen(!isSkillsOpen);
  const toggleSetting = () => setIsSettingOpen(!isSettingOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen fixed w-64 bg-darkBlue text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        {/* Roadmap Section */}
        <div className="mb-4">
          <button
            onClick={toggleRoadmap}
            className="text-lg w-full text-left hover:bg-darkLighter px-4 py-2 rounded transition duration-200"
          >
            Roadmap
          </button>
          {isRoadmapOpen && (
            <div className="ml-4">
              <Link href="/admin/roadmap/add">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  Add Roadmap
                </div>
              </Link>
              <Link href="/admin/roadmap/view">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  View Roadmap
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <button
            onClick={toggleSkills}
            className="text-lg w-full text-left hover:bg-darkLighter px-4 py-2 rounded transition duration-200"
          >
            Skills
          </button>
          {isSkillsOpen && (
            <div className="ml-4">
              <Link href="/admin/skills/add">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  Add Skills
                </div>
              </Link>
              <Link href="/admin/skills/view">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  View Skills
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Project Section */}
        <div className="mb-4">
          <button
            onClick={toggleProject}
            className="text-lg w-full text-left hover:bg-darkLighter px-4 py-2 rounded transition duration-200"
          >
            Project
          </button>
          {isProjectOpen && (
            <div className="ml-4">
              <Link href="/admin/project/add">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  Add Project
                </div>
              </Link>
              <Link href="/admin/project/view">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  View Project
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={toggleSetting}
            className="text-lg w-full text-left hover:bg-darkLighter px-4 py-2 rounded transition duration-200"
          >
            Setting
          </button>
          {isSettingOpen && (
            <div className="ml-4">
              <Link href="/add-skills">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  Settings
                </div>
              </Link>
              <Link href="/view-skills">
                <div className="text-sm hover:bg-darkLighter px-4 py-2 rounded transition duration-200">
                  Logout
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
